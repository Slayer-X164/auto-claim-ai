"use client"
import { useEffect } from "react";
import { authClient } from "@/app/lib/auth-client";
import { useUserStore } from "@/app/store/userStore";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session, setUser]);

  if (isPending) return <div>Loading...</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {user && (
        <div className="mt-4">
          <p>Welcome back, {user.name}!</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </main>
  );
}
