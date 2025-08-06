import { useEffect, useState } from "react";

export default function Dashboard() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("/api/devices")
      .then((res) => res.json())
      .then((data) => setDevices(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 My Devices</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {devices.map((device) => (
          <div
            key={device.id}
            className="bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{device.name}</h2>
            <p className="text-sm text-gray-500">ID: {device.identifier}</p>
            <p className="text-xs text-gray-400 mt-1">
              Registered: {new Date(device.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}