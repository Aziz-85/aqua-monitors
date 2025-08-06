// pages/admin.tsx

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.email === "admin@example.com") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [session, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!authorized) {
    return <div>❌ Not authorized</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>✅ Welcome Admin</h1>
      <p>This is the admin panel.</p>
    </div>
  );
}
