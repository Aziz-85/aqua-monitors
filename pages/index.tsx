import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const socket = io();
    socket.emit("sensor-data", { temp: 25, ph: 7.1 });
  }, []);

  return <h1>Socket connected</h1>;
}