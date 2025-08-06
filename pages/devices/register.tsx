import { useState } from 'react';

export default function RegisterDevice() {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/devices/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, identifier })
    });
    if (res.ok) alert('Device registered!');
    else alert('Error registering device');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Device Name" required />
      <input value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder="Device ID" required />
      <button type="submit">Register</button>
    </form>
  );
}