import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { jwtMiddleware } from "@/auth/jwt-middleware.js";
import { createMatch } from "@/logic/match.js";
import { cancelWaitingQueue } from "@/logic/queue.js";
import { prisma } from "@/lib/prisma.js";

dotenv.config();

const app = express();
// If running behind a proxy (NGINX/Render/Heroku), trust it so secure cookies and IPs work correctly
app.set("trust proxy", true);
const server = createServer(app);
const allowedOriginsRaw = process.env.WEBSITE_URLS || process.env.WEBSITE_URL || "http://localhost:3000";
const allowedOrigins = allowedOriginsRaw.split(",").map(s => s.trim()).filter(Boolean);
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

  // If this socket disconnects at any point,
  // cancel its queue entry if it was still WAITING.
  socket.on("disconnect", async () => {
    try {
      await cancelWaitingQueue(userId);
    } catch (e) {
      console.warn("failed to cancel waiting queue on disconnect", e);
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
      try { socket.join(room); } catch {}
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
      const { gameState, opponentId, oppSocket } = await createMatch(io, socket);

      // If no opponent was found yet, the createMatch flow already emitted
      // "match:searching" to this socket. Do not emit an error here —
      // keep the client in a waiting state until a match is made.
      if (!gameState) return;

      if (oppSocket) {
        const room = `match:${gameState.id}`;
        // Join both sockets to the room atomically and emit directly to both ids to avoid race conditions
        try {
          // Join both players to the match room
          io.in([socket.id, oppSocket.id]).socketsJoin(room);
        } catch {}

        // Deploy game handler for BOTH players so they can interact immediately without reconnecting
        try {
          await import("@/logic/game.js").then(async ({ deployGameHandler }) => {
            // Deploy for the initiating socket (already a real Socket)
            await deployGameHandler(io, socket, gameState.id);
            // Try to fetch the real Socket instance for the opponent and deploy as well
            const oppReal = io.of("/").sockets.get(oppSocket.id as string);
            if (oppReal) {
              await deployGameHandler(io, oppReal, gameState.id);
            }
          });
        } catch (e) {
          console.warn("failed to deploy game handlers for both players", e);
        }

        // Emit start event directly to both sockets to ensure both clients navigate
        io.to([socket.id, oppSocket.id]).emit("match:start", gameState);
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
});

const port = Number(process.env.WEBSOCKET_PORT ?? 3001);
server.listen(port, () => {
  console.log(`WS server running on port ${port}`);
});
