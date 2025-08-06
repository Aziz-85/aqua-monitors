import { Server } from "socket.io";

export default function handler(req: any, res: any) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);

    io.on("connection", socket => {
      console.log("Device connected via WebSocket");

      socket.on("sensor-data", data => {
        console.log("Received data:", data);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}