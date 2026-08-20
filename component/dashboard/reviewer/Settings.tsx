"use client";

import { useState } from "react";
import { useUserStore } from "@/app/store/userStore";
import { useOrgStore } from "@/app/store/org-store";
import { LuUser, LuBell, LuShield, LuLogOut } from "react-icons/lu";

export default function Settings() {
  const user = useUserStore((state) => state.user);
  const role = useUserStore((state) => state.role);
  const activeOrg = useOrgStore((state) => state.activeOrg);

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [claimUpdates, setClaimUpdates] = useState(true);
  const [reviewAssignments, setReviewAssignments] = useState(false);

  const tabs = ["Profile", "Notifications", "Security"];
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="flex flex-col items-start gap-4 w-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between h-[35px]">
        <h1 className="font-instrument font-bold text-[28px] text-[#0F172A]">Settings</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 cursor-pointer py-1 rounded-full font-instrument text-[12px] font-medium border ${
              activeTab === tab
                ? "bg-[#1F66FF] text-white border-[#1F66FF] font-semibold"
                : "bg-white text-[#475569] border-[#E2E8F0]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Profile" && (
        <div className="flex flex-col gap-5 w-full">
          {/* Profile Card */}
          <div className="flex flex-col p-6 bg-white w-full border border-neutral-300 rounded-xl gap-6">
            <div className="flex items-center gap-2">
              <LuUser size={18} className="text-[#475569]" />
              <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Profile Information</h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">FULL NAME</label>
                <input
                  type="text"
                  defaultValue={user?.name || ""}
                  className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#0F172A] outline-none focus:border-[#1F66FF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">EMAIL ADDRESS</label>
                <input
                  type="email"
                  defaultValue={user?.email || ""}
                  className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#0F172A] outline-none focus:border-[#1F66FF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">ROLE</label>
                <input
                  type="text"
                  value={role || "Reviewer"}
                  disabled
                  className="px-4 py-2.5 bg-neutral-100 border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#475569] outline-none capitalize cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">ORGANIZATION</label>
                <input
                  type="text"
                  value={activeOrg?.name || "—"}
                  disabled
                  className="px-4 py-2.5 bg-neutral-100 border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#475569] outline-none cursor-not-allowed"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-5 py-2.5 bg-[#1F66FF] text-white font-instrument font-semibold text-[13px] rounded-lg hover:bg-[#1a5ae0] transition-colors cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Notifications" && (
        <div className="flex flex-col gap-5 w-full">
          {/* Notifications Card */}
          <div className="flex flex-col p-6 bg-white w-full border border-neutral-300 rounded-xl gap-6">
            <div className="flex items-center gap-2">
              <LuBell size={18} className="text-[#475569]" />
              <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Notification Preferences</h2>
            </div>

            <div className="flex flex-col divide-y divide-[#E2E8F0]">
              {/* Toggle Row */}
              <div className="flex items-center justify-between py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-instrument font-semibold text-[14px] text-[#0F172A]">Email Notifications</span>
                  <span className="font-instrument text-[13px] text-[#475569]">Receive email notifications for important updates</span>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${emailNotifications ? "bg-[#1F66FF]" : "bg-neutral-300"}`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${emailNotifications ? "translate-x-5.5" : "translate-x-0.5"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-instrument font-semibold text-[14px] text-[#0F172A]">Claim Updates</span>
                  <span className="font-instrument text-[13px] text-[#475569]">Get notified when a claim status changes</span>
                </div>
                <button
                  onClick={() => setClaimUpdates(!claimUpdates)}
                  className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${claimUpdates ? "bg-[#1F66FF]" : "bg-neutral-300"}`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${claimUpdates ? "translate-x-5.5" : "translate-x-0.5"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-instrument font-semibold text-[14px] text-[#0F172A]">Review Assignments</span>
                  <span className="font-instrument text-[13px] text-[#475569]">Get notified when a new claim is assigned to you</span>
                </div>
                <button
                  onClick={() => setReviewAssignments(!reviewAssignments)}
                  className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${reviewAssignments ? "bg-[#1F66FF]" : "bg-neutral-300"}`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${reviewAssignments ? "translate-x-5.5" : "translate-x-0.5"}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="flex flex-col gap-5 w-full">
          {/* Change Password Card */}
          <div className="flex flex-col p-6 bg-white w-full border border-neutral-300 rounded-xl gap-6">
            <div className="flex items-center gap-2">
              <LuShield size={18} className="text-[#475569]" />
              <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Change Password</h2>
            </div>

            <div className="flex flex-col gap-5 max-w-md">
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">CURRENT PASSWORD</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#0F172A] outline-none focus:border-[#1F66FF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">NEW PASSWORD</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#0F172A] outline-none focus:border-[#1F66FF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-instrument font-semibold text-[12px] text-[#475569]">CONFIRM NEW PASSWORD</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg font-instrument text-[14px] text-[#0F172A] outline-none focus:border-[#1F66FF] transition-colors"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-5 py-2.5 bg-[#1F66FF] text-white font-instrument font-semibold text-[13px] rounded-lg hover:bg-[#1a5ae0] transition-colors cursor-pointer">
                Update Password
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="flex flex-col p-6 bg-white w-full border border-red-200 rounded-xl gap-4">
            <div className="flex items-center gap-2">
              <LuLogOut size={18} className="text-red-500" />
              <h2 className="font-instrument font-bold text-[16px] text-red-600">Danger Zone</h2>
            </div>
            <p className="font-instrument text-[13px] text-[#475569]">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <div>
              <button className="px-5 py-2.5 bg-white text-red-600 font-instrument font-semibold text-[13px] rounded-lg border border-red-300 hover:bg-red-50 transition-colors cursor-pointer">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
