"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { useUserStore } from "@/app/store/userStore";
import { useOrgStore } from "@/app/store/org-store";
import { LuSearch } from "react-icons/lu";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";

export default function Header() {


  const { data: session } = authClient.useSession();
  const { data: activeMember } = authClient.useActiveMember();

  const { data: activeOrg } = authClient.useActiveOrganization();
  const setActiveOrg = useOrgStore((state) => state.setActiveOrg);
  const setUser = useUserStore((state) => state.setUser);
  const setRole = useUserStore((state) => state.setRole);

  useEffect(() => {
    setActiveOrg(activeOrg);
  }, [activeOrg, setActiveOrg]);

  // Store user and role in the global user store
  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
    if (activeMember?.role) {
      setRole(activeMember.role);
    }
  }, [session, activeMember]);








  const userInitial = session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U";
  const userName = session?.user?.name || "Loading...";
  const userRole = activeMember?.role || "Loading...";

  return (
    <div className="h-auto py-3 bg-white border-b-2 border-neutral-200/60 px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        {/* search */}
        <div className="flex items-center gap-3 px-4 h-10 w-[350px] bg-white border-2 border-neutral-300/30 rounded-lg">
          <LuSearch className="text-neutral-400" size={16} />
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-1 bg-transparent border-none outline-none text-neutral-600 font-instrument text-[14px]"
          />
          <div className="flex items-center text-neutral-400/50 ">
            <MdOutlineKeyboardCommandKey />
            K
          </div>
        </div>


      </div>

      <div className="flex items-center gap-5">
        <button className="w-9 h-9 bg-[#F1F5F9] rounded-full flex items-center justify-center">
          <Image src="/icons/bell.svg" alt="Notifications" width={20} height={20} />
        </button>

        <div className="w-0.5 h-6 bg-neutral-200"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-[#E1F5FE] rounded-full flex items-center justify-center shrink-0">
            <span className="font-instrument font-bold text-[16px] text-[#0288D1]">{userInitial}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-instrument font-semibold text-[14px] text-neutral-600">{userName}</span>
            <span className="font-instrument font-semibold text-[11px] text-blue-600 capitalize">{userRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
