"use client"
import { useState } from "react";
import InviteModal from "@/component/dashboard/admin/InviteModal";

const reviewers = [
  { initials: "SC", name: "Sarah Chen", pending: 8 },
  { initials: "JM", name: "John Mathew", pending: 4 },
  { initials: "PS", name: "Priya Shah", pending: 6 },
];

export default function ReviewersCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col p-6 gap-4 bg-white border border-[#E2E8F0] rounded-xl w-[380px] shrink-0">
        <h2 className="font-instrument font-bold text-[16px] text-[#0F172A]">Reviewers</h2>

        <div className="flex flex-col gap-3 w-full">
          {reviewers.map((reviewer, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-2xl bg-[#F1F5F9] flex items-center justify-center">
                <span className="font-instrument font-bold text-[12px] text-[#475569]">{reviewer.initials}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-instrument font-semibold text-[14px] text-[#0F172A]">{reviewer.name}</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></div>
                  <span className="font-instrument font-regular text-[12px] text-[#475569]">
                    Active &bull; {reviewer.pending} pending
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="font-instrument cursor-pointer font-semibold text-[14px] text-[#1F66FF] hover:text-[#1554D6] transition-colors"
          >
            + Invite Reviewer
          </button>
        </div>
      </div>

      <InviteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
