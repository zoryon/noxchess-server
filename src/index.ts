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
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.WEBSITE_URL || "http://localhost:3000",
    credentials: true
  }
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
        socket.join(`match:${gameState.id}`);
        oppSocket.join(`match:${gameState.id}`);
        io.to(`match:${gameState.id}`).emit("match:start", gameState);
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
