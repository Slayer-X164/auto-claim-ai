"use client"
import { useEffect } from "react";
import { authClient } from "@/app/lib/auth-client";
import { useUserStore } from "@/app/store/userStore";
import CenterLoader from "@/component/CenterLoader";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session, setUser]);

  if (isPending) return <CenterLoader text="Setting up your workspace..."/>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Reviewer Dashboard</h1>

      {user && (
        <div className="mt-4">
          <p>Welcome back, {user.name}! lets review some claims</p>
          <p>Email: {user.email}</p>

        </div>
      )}
    </main>
  );
}
