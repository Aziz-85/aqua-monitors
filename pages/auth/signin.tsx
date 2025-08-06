import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }: { csrfToken: string | null }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" value={csrfToken || ""} />
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input name="email" type="email" required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input name="password" type="password" required />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context);

  return {
    props: {
      csrfToken: csrfToken ?? null, // ✅ fallback to null if undefined
    },
  };
}
