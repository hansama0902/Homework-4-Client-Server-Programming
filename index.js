// ==== index.js ====
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "frontend/dist/index.html"));
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", ({ user, message }) => {
    const time = new Date().toLocaleTimeString();
    const msgData = {
      user,
      message,
      time,
      senderId: socket.id,
    };
    io.emit("chat message", msgData);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
