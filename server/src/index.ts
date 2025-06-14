import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

// --- Basic Server Setup ---
const app = express();
app.use(cors()); // Enable CORS for client requests

const server = http.createServer(app);

// --- Socket.IO Setup ---
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // IMPORTANT: Match your client's URL
    methods: ["GET", "POST"],
  },
});

// --- Socket.IO Connection Handler ---
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

// --- Start Server ---
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
