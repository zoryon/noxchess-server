import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { jwtMiddleware } from "@/auth/jwt-middleware.js";
import { createMatch, createFriendChallenge, cancelFriendChallenge, acceptFriendChallenge, declineFriendChallenge } from "@/logic/match.js";
import { cancelWaitingQueue } from "@/logic/queue.js";
import { prisma } from "@/lib/prisma.js";

dotenv.config();

function cleanEnvString(val?: string | null): string | undefined {
  if (val == null) return undefined;
  // Trim and strip surrounding quotes if present
  const t = val.trim();
  if ((t.startsWith("\"") && t.endsWith("\"")) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

const app = express();
// If running behind a proxy (NGINX/Render/Heroku), trust it so secure cookies and IPs work correctly
app.set("trust proxy", true);
const server = createServer(app);
const allowedOriginsRaw = cleanEnvString(process.env.WEBSITE_URLS) || cleanEnvString(process.env.WEBSITE_URL) || "http://localhost:3000";
const allowedOrigins = allowedOriginsRaw
  .split(",")
  .map(s => cleanEnvString(s) || "")
  .filter(Boolean);
const io = new Server(server, {
  cors: {
    origin: (origin, cb) => {
      // Allow same-origin or no origin (mobile apps, curl)
      if (!origin) return cb(null, true);
      try {
        const u = new URL(origin);
        const ok = allowedOrigins.some(o => {
          try {
            const a = new URL(o);
            return a.hostname === u.hostname && (a.port ? a.port === u.port : true);
          } catch { return o === origin; }
        });
        return cb(null, ok);
      } catch {
        return cb(null, false);
      }
    },
    credentials: true
  },
  // Tweak engine timeouts for real-world networks
  pingInterval: 20_000,
  pingTimeout: 25_000,
  connectTimeout: 10_000,
});

// Simple health endpoint for Render/uptime checks
app.get("/health", (_req, res) => {
  res.send("OK");
});

io.use(jwtMiddleware);

io.on("connection", async (socket) => {
  const userId = socket.data.user.userId as number;
  console.log(`User connected: ${userId}`);
  // Join a per-user room so notifications reach all tabs/devices for this user
  try { socket.join(`user:${userId}`); } catch { }

  // If this socket disconnects at any point,
  // cancel its queue entry if it was still WAITING.
  socket.on("disconnect", async () => {
    try {
      await cancelWaitingQueue(userId);
    } catch (e) {
      console.warn("failed to cancel waiting queue on disconnect", e);
    }
    try {
      // Cancel any pending outgoing challenges if the inviter disconnects and notify receivers
      const pending = await prisma.friend_challenge.findMany({ where: { fromUserId: userId, status: "WAITING" }, select: { id: true, toUserId: true } });
      if (pending.length) {
        await prisma.friend_challenge.updateMany({ where: { fromUserId: userId, status: "WAITING" }, data: { status: "CANCELLED" } });
        try {
          const sockets = await io.fetchSockets();
          for (const ch of pending) {
            const target = sockets.find(s => s.data.user.userId === ch.toUserId);
            if (target) target.emit("challenge:cancelled", { id: ch.id });
          }
        } catch { }
      }
    } catch (e) {
      console.warn("failed to cancel pending challenges on disconnect", e);
    }
  });

  // If the user already has an ongoing match, attach them to it and deploy the handler.
  try {
    const existing = await prisma.match.findFirst({
      where: { status: "ONGOING", match_player: { some: { userId } } },
      include: { match_player: true, match_piece: true }
    });
    if (existing) {
      const room = `match:${existing.id}`;
      try { socket.join(room); } catch { }
      await import("@/logic/game.js").then(({ deployGameHandler }) => deployGameHandler(io, socket, existing.id));
      // Optional hint to the reconnecting client
      socket.emit("match:resume", existing);
      // Do not return — allow queue listeners to be registered too (useful after match ends)
    }
  } catch (e) {
    console.warn("match resume check failed", e);
  }

  // Queue: only start when client explicitly asks
  socket.on("match:queue", async () => {
    try {
      // If user has a pending outgoing challenge, they cannot queue for random or other matches
      const pending = await prisma.friend_challenge.findFirst({ where: { fromUserId: userId, status: "WAITING" }, select: { id: true, toUserId: true } });
      if (pending) {
        socket.emit("challenge:waiting", { id: pending.id, toUserId: pending.toUserId });
        return;
      }
      const { gameState, opponentId, oppSocket } = await createMatch(io, socket);

      // If no opponent was found yet, the createMatch flow already emitted
      // "match:searching" to this socket. Do not emit an error here —
      // keep the client in a waiting state until a match is made.
      if (!gameState) return;

      if (oppSocket) {
        const room = `match:${gameState.id}`;
        // Identify participants
        const white = gameState.match_player.find(p => p.color === "WHITE")?.userId;
        const black = gameState.match_player.find(p => p.color === "BLACK")?.userId;
        const rooms = [white, black].filter(Boolean).map(id => `user:${id}`);
        try { io.in(rooms).socketsJoin(room); } catch { }

        // Deploy game handlers for all sockets of both users
        try {
          await import("@/logic/game.js").then(async ({ deployGameHandler }) => {
            const sockets = await io.fetchSockets();
            const participants = sockets.filter(s => [white, black].includes(s.data.user.userId));
            for (const rs of participants) {
              const real = io.of("/").sockets.get(rs.id as string);
              if (real) await deployGameHandler(io, real, gameState.id);
            }
          });
        } catch (e) { console.warn("failed to deploy to all participants", e); }

        // Emit start to all tabs for both users
        io.to(rooms).emit("match:start", gameState);
      } else {
        console.warn(`Opponent socket for userId ${opponentId} not found.`);
        socket.emit("error:opponent_disconnected");
      }
    } catch (e) {
      console.warn("match queue failed", e);
      socket.emit("error:match_queue_failed");
    }
  });

  // Allow client to cancel waiting state explicitly
  socket.on("match:cancel", async () => {
    try {
      await cancelWaitingQueue(userId);
      socket.emit("match:cancelled");
    } catch (e) {
      console.warn("failed to cancel queue by request", e);
    }
  });

  // Friend challenge: create
  socket.on("challenge:create", async (toUserId: number) => {
    const fromUserId = userId;
    try {
      const ch = await createFriendChallenge(fromUserId, toUserId);
      // Ensure inviter is not in the random queue anymore
      try { await cancelWaitingQueue(fromUserId); } catch { }
      // Notify sender
      socket.emit("challenge:created", ch);
      // Notify receiver if online
      try { io.to(`user:${toUserId}`).emit("challenge:incoming", { ...ch, fromUserId, toUserId }); } catch { }
    } catch (e: any) {
      socket.emit("challenge:error", { message: e?.message || "failed" });
    }
  });

  // Friend challenge: cancel (by either party)
  socket.on("challenge:cancel", async (challengeId: number) => {
    try {
      await cancelFriendChallenge(userId, challengeId);
      socket.emit("challenge:cancelled", { id: challengeId });
      // Notify the other party if online
      try {
        const ch = await prisma.friend_challenge.findUnique({ where: { id: challengeId } });
        if (ch) {
          const otherUserId = ch.fromUserId === userId ? ch.toUserId : ch.fromUserId;
          io.to(`user:${otherUserId}`).emit("challenge:cancelled", { id: challengeId });
        }
      } catch { }
    } catch { }
  });

  // Friend challenge: accept by recipient -> start a direct match
  socket.on("challenge:accept", async (challengeId: number) => {
    try {
      const game = await acceptFriendChallenge(io, challengeId, userId);
      if (!game) return socket.emit("challenge:error", { message: "invalid_challenge" });

      const room = `match:${game.id}`;
      const users = game.match_player.map(p => p.userId).filter(Boolean) as number[];
      const userRooms = users.map(id => `user:${id}`);
      try { io.in(userRooms).socketsJoin(room); } catch { }

      // Deploy handlers for both players
      try {
        await import("@/logic/game.js").then(async ({ deployGameHandler }) => {
          const sockets = await io.fetchSockets();
          const participants = sockets.filter(s => users.includes(s.data.user.userId));
          for (const rs of participants) {
            const real = io.of("/").sockets.get(rs.id as string);
            if (real) await deployGameHandler(io, real, game.id);
          }
        });
      } catch (e) { console.warn("deploy after challenge error", e); }

      // Broadcast start to all tabs for both participants
      io.to(userRooms).emit("match:start", game);
    } catch (e) {
      socket.emit("challenge:error", { message: "accept_failed" });
    }
  });

  // Friend challenge: decline by recipient
  socket.on("challenge:decline", async (challengeId: number) => {
    try {
      await declineFriendChallenge(challengeId, userId);
      socket.emit("challenge:declined", { id: challengeId });
      // Notify sender if online
      try {
        const ch = await prisma.friend_challenge.findUnique({ where: { id: challengeId } });
        if (ch) io.to(`user:${ch.fromUserId}`).emit("challenge:declined", { id: challengeId });
      } catch { }
    } catch { }
  });
});

const rawPort = cleanEnvString(process.env.WEBSOCKET_PORT);
let port = Number(rawPort ?? 3001);
if (!Number.isFinite(port) || port < 0 || port > 65535) {
  port = 3001;
}
server.listen(port, () => {
  console.log(`WS server running on port ${port}`);
});
