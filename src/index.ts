import express from "express";
import { createServer } from "node:http";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.WEBSITE_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token; // Sent by client on connect
  if (!token) {
    return next(new Error("No token provided"));
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
    // Attach user info to socket
    socket.data.user = payload;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

io.on("connection", (socket: Socket) => {
  console.log(`user connected: ${socket.data.user.id}`);
  
  socket.on("disconnect", () => {
    console.log(`user disconnected: ${socket.data.user.id}`);
  });
});

server.listen(process.env.WEBSOCKET_PORT || 3001, () => {
  console.log(`server running at http://localhost:${process.env.WEBSOCKET_PORT || 3001}`);
});