import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { jwtMiddleware } from "@/auth/jwt-middleware.js";
import { createMatch } from "./logic/match.js";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.WEBSITE_URL || "http://localhost:3000",
    credentials: true
  }
});

io.use(jwtMiddleware);

io.on("connection", async (socket) => {
  console.log(`User connected: ${socket.data.user.id}`);

  await createMatch(io, socket);
});

server.listen(process.env.WEBSOCKET_PORT || 3001, () => {
  console.log(`WS server running on port ${process.env.WEBSOCKET_PORT || 3001}`);
});
