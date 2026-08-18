"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

export default function Header() {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const { data: activeMember } = authClient.useActiveMember();
  const { data: orgs } = authClient.useListOrganizations();
  const { data: activeOrg } = authClient.useActiveOrganization();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOrganizationChange = async (newOrgId: string) => {
    if (!newOrgId) return;
    setIsOpen(false);
    await authClient.organization.setActive({ organizationId: newOrgId });
    const res = await authClient.organization.getActiveMember();

    if (res.data?.role === "reviewer") {
      router.replace("/dashboard/reviewer");
    } else {
      router.replace("/dashboard/admin");
    }
  };

  const userInitial = session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U";
  const userName = session?.user?.name || "Loading...";
  const userRole = activeMember?.role || "Loading...";

  return (
    <div className="h-[72px] bg-white border-b border-[#E2E8F0] px-8 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <div className="relative" ref={dropdownRef}>
          {orgs && orgs.length > 0 && (
            <div 
              className="bg-[#F1F5F9] px-3 py-1.5 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#E2E8F0] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-instrument font-bold text-[12px] tracking-[0.0417em] text-[#475569]">
                {activeOrg?.name?.toUpperCase() || "SELECT WORKSPACE"}
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[#475569] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          )}
          
          {isOpen && orgs && orgs.length > 0 && (
            <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-white border border-[#E2E8F0] rounded-md shadow-lg z-50 overflow-hidden">
              {orgs.map((org) => (
                <div 
                  key={org.id} 
                  className={`px-4 py-2 text-[13px] font-instrument cursor-pointer hover:bg-[#F1F5F9] transition-colors ${activeOrg?.id === org.id ? "bg-[#F8FAFC] font-semibold text-[#0F172A]" : "text-[#475569] font-medium"}`}
                  onClick={() => handleOrganizationChange(org.id)}
                >
                  {org.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {userRole === "admin" && (
            <span className="font-instrument font-semibold tracking-wider text-[12px] tracking-[0.0417em] text-neutral-400">
              ADMIN CONSOLE
            </span>
          )}
      </div>

      <div className="flex items-center gap-5">
        <button className="w-9 h-9 bg-[#F1F5F9] rounded-full flex items-center justify-center">
          <Image src="/icons/bell.svg" alt="Notifications" width={20} height={20} />
        </button>

        <div className="w-[1px] h-6 bg-[#E2E8F0]"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-[#E1F5FE] rounded-full flex items-center justify-center shrink-0">
            <span className="font-instrument font-bold text-[16px] text-[#0288D1]">{userInitial}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-instrument font-semibold text-[14px] text-[#0F172A]">{userName}</span>
            <span className="font-instrument font-semibold text-[11px] text-blue-600 capitalize">{userRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
