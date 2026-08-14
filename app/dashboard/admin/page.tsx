"use client"
import { useEffect } from "react";
import { authClient } from "@/app/lib/auth-client";
import { useUserStore } from "@/app/store/userStore";
import CenterLoader from "@/component/CenterLoader";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const { data: activeMember, isPending: isMemberPending } = authClient.useActiveMember();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session, setUser]);

  useEffect(() => {
    if (!isSessionPending && !isMemberPending) {
      // If there is an active member but they are not an admin/owner, redirect them
      if (activeMember && activeMember.role !== "admin" && activeMember.role !== "owner") {
        router.replace("/dashboard/reviewer");
      }
    }
  }, [activeMember, isSessionPending, isMemberPending, router]);

  if (isSessionPending || isMemberPending) {
    return (
      <CenterLoader text="Loading your workspace..."/>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {user && (
        <div className="mt-4">
          <p>Welcome back, {user.name}!</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </main>
  );
}
