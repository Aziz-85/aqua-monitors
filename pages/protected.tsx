import { getSession } from "next-auth/react";

export default function ProtectedPage() {
  return <h1>Protected Content ✅</h1>;
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false
      }
    };
  }
  return { props: {} };
}