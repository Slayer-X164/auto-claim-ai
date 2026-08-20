"use client";

import { useUserStore } from "@/app/store/userStore";
import { LuFiles, LuClock, LuCircleCheck, LuTriangleAlert, LuTrendingUp, LuArrowUpRight, LuArrowDownRight } from "react-icons/lu";

export default function ReviewerDashboard() {
  const user = useUserStore((state) => state.user);

  const stats = [
    {
      label: "Total Claims",
      value: "128",
      change: "+12%",
      trend: "up" as const,
      icon: LuFiles,
      iconBg: "bg-blue-50",
      iconColor: "text-[#1F66FF]",
    },
    {
      label: "Pending Review",
      value: "14",
      change: "+3",
      trend: "up" as const,
      icon: LuClock,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      label: "Approved",
      value: "98",
      change: "+8%",
      trend: "up" as const,
      icon: LuCircleCheck,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      label: "Rejected",
      value: "16",
      change: "-2%",
      trend: "down" as const,
      icon: LuTriangleAlert,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];

  const recentClaims = [
    { id: "CLM-134", customer: "Ravi Malhotra", vehicle: "Hyundai Creta 2022", status: "Needs Review", aiConfidence: "92%", time: "2 hours ago" },
    { id: "CLM-133", customer: "Ananya Bose", vehicle: "Tata Nexon 2021", status: "Processing", aiConfidence: "74%", time: "4 hours ago" },
    { id: "CLM-132", customer: "Devansh Kapoor", vehicle: "Maruti Baleno 2023", status: "Approved", aiConfidence: "97%", time: "6 hours ago" },
    { id: "CLM-131", customer: "Meera Joshi", vehicle: "Honda City 2020", status: "Rejected", aiConfidence: "88%", time: "8 hours ago" },
    { id: "CLM-130", customer: "Arjun Patel", vehicle: "Kia Seltos 2023", status: "Auto Approved", aiConfidence: "99%", time: "1 day ago" },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Needs Review": return "bg-amber-100 text-amber-600 border-amber-400";
      case "Processing": return "bg-blue-100 text-blue-600 border-blue-400";
      case "Approved": return "bg-emerald-100 text-emerald-600 border-emerald-400";
      case "Rejected": return "bg-red-100 text-red-600 border-red-400";
      case "Auto Approved": return "bg-violet-100 text-violet-600 border-violet-400";
      default: return "bg-gray-100 text-gray-600 border-gray-400";
    }
  };

  const weeklyData = [
    { day: "Mon", claims: 12 },
    { day: "Tue", claims: 18 },
    { day: "Wed", claims: 8 },
    { day: "Thu", claims: 22 },
    { day: "Fri", claims: 15 },
    { day: "Sat", claims: 6 },
    { day: "Sun", claims: 3 },
  ];
  const maxClaims = Math.max(...weeklyData.map((d) => d.claims));

  return (
    <div className="flex flex-col items-start gap-5 w-full p-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-instrument font-bold text-[28px] text-[#0F172A]">Dashboard</h1>
        <p className="font-instrument text-[14px] text-[#475569]">
          Welcome back, <span className="font-semibold text-[#0F172A]">{user?.name || "Reviewer"}</span>. Here's what's happening today.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 w-full">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-3 p-5 bg-white border border-neutral-300 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-instrument font-medium text-[13px] text-[#475569]">{stat.label}</span>
              <div className={`w-9 h-9 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                <stat.icon size={18} className={stat.iconColor} />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <span className="font-instrument font-bold text-[32px] text-[#0F172A] leading-none">{stat.value}</span>
              <span className={`flex items-center gap-0.5 font-instrument font-semibold text-[12px] mb-1 ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                {stat.trend === "up" ? <LuArrowUpRight size={14} /> : <LuArrowDownRight size={14} />}
                {stat.change}
              </span>
            </div>
            <span className="font-instrument text-[12px] text-[#94A3B8]">vs last month</span>
          </div>
        ))}
      </div>

      {/* Bottom Grid: Chart + Recent Claims */}
      <div className="grid grid-cols-5 gap-4 w-full">
        {/* Weekly Chart */}
        <div className="col-span-2 flex flex-col p-6 bg-white border border-neutral-300 rounded-xl gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LuTrendingUp size={18} className="text-[#475569]" />
              <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Weekly Overview</h2>
            </div>
            <span className="font-instrument text-[12px] text-[#94A3B8]">This Week</span>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end gap-3 h-[160px]">
            {weeklyData.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <span className="font-instrument font-semibold text-[11px] text-[#475569]">{item.claims}</span>
                <div
                  className="w-full bg-[#1F66FF]/15 rounded-md hover:bg-[#1F66FF]/30 transition-colors relative overflow-hidden"
                  style={{ height: `${(item.claims / maxClaims) * 120}px` }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-[#1F66FF] rounded-md"
                    style={{ height: `${(item.claims / maxClaims) * 100}%` }}
                  />
                </div>
                <span className="font-instrument font-medium text-[11px] text-[#94A3B8]">{item.day}</span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="flex items-center gap-6 pt-3 border-t border-[#E2E8F0]">
            <div className="flex flex-col">
              <span className="font-instrument text-[12px] text-[#94A3B8]">Total this week</span>
              <span className="font-instrument font-bold text-[18px] text-[#0F172A]">84</span>
            </div>
            <div className="flex flex-col">
              <span className="font-instrument text-[12px] text-[#94A3B8]">Daily average</span>
              <span className="font-instrument font-bold text-[18px] text-[#0F172A]">12</span>
            </div>
          </div>
        </div>

        {/* Recent Claims */}
        <div className="col-span-3 flex flex-col p-6 bg-white border border-neutral-300 rounded-xl gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Recent Claims</h2>
            <span className="font-instrument font-medium text-[12px] text-[#1F66FF] cursor-pointer hover:underline">View All</span>
          </div>

          <div className="flex flex-col w-full">
            {/* Table Header */}
            <div className="flex items-center px-3 py-2.5 bg-neutral-200 rounded-md font-instrument font-bold text-[11px] text-black">
              <div className="w-[90px]">CLAIM ID</div>
              <div className="flex-1">CUSTOMER</div>
              <div className="flex-1">VEHICLE</div>
              <div className="w-[120px]">STATUS</div>
              <div className="w-[100px]">AI CONF.</div>
              <div className="w-[90px]">TIME</div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col divide-y divide-[#E2E8F0]">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="flex items-center px-3 py-3 font-instrument text-[13px] hover:bg-neutral-50 transition-colors cursor-pointer">
                  <div className="w-[90px] font-semibold text-[#1F66FF]">{claim.id}</div>
                  <div className="flex-1 font-medium text-[#0F172A]">{claim.customer}</div>
                  <div className="flex-1 text-[#475569]">{claim.vehicle}</div>
                  <div className="w-[120px]">
                    <span className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold border rounded-md ${getStatusStyles(claim.status)}`}>
                      {claim.status}
                    </span>
                  </div>
                  <div className="w-[100px] font-semibold text-[#10B981]">{claim.aiConfidence}</div>
                  <div className="w-[90px] text-[#94A3B8] text-[12px]">{claim.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
