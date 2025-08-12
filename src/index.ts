import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { jwtMiddleware } from "@/auth/jwt-middleware.js";
import { createMatch } from "@/logic/match.js";
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
  console.log(`User connected: ${socket.data.user.userId}`);

  // If the user already has an ongoing match, attach them to it and deploy the handler.
  try {
    const userId = socket.data.user.userId as number;
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
      return; // Skip queueing/matchmaking when resuming
    }
  } catch (e) {
    console.warn("match resume check failed", e);
  }

  const { gameState, opponentId, oppSocket } = await createMatch(io, socket);

  if (!gameState) {
    socket.emit("error:match_not_found");
    return;
  }

  if (oppSocket) {
    socket.join(`match:${gameState.id}`);
    oppSocket.join(`match:${gameState.id}`);

    io.to(`match:${gameState.id}`).emit("match:start", gameState);
  } else {
    // Opponent disconnected or not found — handle as needed
    console.warn(`Opponent socket for userId ${opponentId} not found.`);
    // You might want to emit an error or re-queue user here
    socket.emit("error:opponent_disconnected");
  }
});

const port = Number(process.env.WEBSOCKET_PORT ?? 3001);
server.listen(port, () => {
  console.log(`WS server running on port ${port}`);
});
