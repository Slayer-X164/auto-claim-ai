"use client"
import { useEffect } from "react";
import { authClient } from "@/app/lib/auth-client";
import { useUserStore } from "@/app/store/userStore";
import CenterLoader from "@/component/CenterLoader";
import { useRouter } from "next/navigation";

import KpiCard from "@/component/dashboard/admin/KpiCard";
import RecentClaimsTable from "@/component/dashboard/admin/RecentClaimsTable";
import ReviewersCard from "@/component/dashboard/admin/ReviewersCard";
import ActivityCard from "@/component/dashboard/admin/ActivityCard";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const { data: activeMember, isPending: isMemberPending } = authClient.useActiveMember();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session, setUser]);

  useEffect(() => {
    if (!isSessionPending && !isMemberPending) {
      if (activeMember && activeMember.role !== "admin" && activeMember.role !== "owner") {
        router.replace("/dashboard/reviewer");
      }
    }
  }, [activeMember, isSessionPending, isMemberPending, router]);

  if (isSessionPending || isMemberPending) {
    return (
      <CenterLoader text="Loading your workspace..." />
    );
  }

  return (
    <div className="p-8 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-instrument font-bold text-[28px] text-[#0F172A]">Overview</h1>
        <p className="font-instrument font-regular text-[14px] text-[#475569]">Here's how your organization's claims operation is doing.</p>
      </div>

      <div className="flex gap-5">
        <KpiCard
          title="Total Claims"
          value="128"
          iconSrc="/icons/file.svg"
          borderColor="#1F66FF"
          iconBgColor="rgba(0, 150, 244, 0.07)"
        />
        <KpiCard
          title="Pending Review"
          value="12"
          iconSrc="/icons/clock.svg"
          borderColor="#FFB120"
          iconBgColor="rgba(255, 171, 14, 0.15)"
        />
        <KpiCard
          title="Completed Claims"
          value="116"
          iconSrc="/icons/check-circle.svg"
          borderColor="#00AD45"
          iconBgColor="rgba(0, 149, 55, 0.07)"
        />
        <KpiCard
          title="Active Reviewers"
          value="8"
          iconSrc="/icons/users.svg"
          borderColor="#9A26FF"
          iconBgColor="rgba(111, 0, 246, 0.07)"
        />
      </div>

      <div className="flex gap-6 w-full">
        <RecentClaimsTable />
        <div className="flex flex-col gap-6">
          <ReviewersCard />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
}
