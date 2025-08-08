import express from "express";
import { createServer } from "node:http";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";

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

io.on("connection", (socket: Socket) => {
  console.log(`a user connected with id: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`user disconnected with id: ${socket.id}`);
  });
});

server.listen(process.env.WEBSOCKET_PORT || 3001, () => {
  console.log(`server running at http://localhost:${process.env.WEBSOCKET_PORT || 3001}`);
});