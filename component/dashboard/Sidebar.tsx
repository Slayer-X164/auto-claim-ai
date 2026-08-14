import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[260px] min-h-screen bg-[#000819] flex flex-col p-6 gap-8 shrink-0">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-1">
          <Image src="/images/Wheel.png" alt="AutoClaim AI Logo" width={31} height={31} />
          <span className="text-white font-instrument font-bold text-[20px]">AutoClaim AI</span>
        </div>

        <div className="flex items-center gap-2.5 px-2.5 py-1.5 border border-white/20 rounded-lg">
          <div className="w-5 h-5 bg-[#1F66FF] rounded-[5px] flex items-center justify-center">
            <Image src="/icons/logo.svg" alt="Brand Icon" width={13} height={13} />
          </div>
          <span className="text-[#94A3B8] font-instrument font-medium text-[14px]">ABC Insurance</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#94A3B8] font-instrument font-semibold text-[11px] uppercase tracking-[0.09em] px-3">
            Overview
          </h3>
          <div className="flex flex-col gap-1">
            <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2.5 bg-[#1E293B] rounded-lg">
              <Image src="/icons/circle-x.svg" alt="Dashboard" width={18} height={18} />
              <span className="text-white font-instrument font-semibold text-[14px] flex-1">Dashboard</span>
              <div className="w-1 h-4 bg-[#1F66FF] rounded-sm"></div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#94A3B8] font-instrument font-semibold text-[11px] uppercase tracking-[0.09em] px-3">
            Operations
          </h3>
          <div className="flex flex-col gap-1">
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1E293B]/50 transition-colors">
              <Image src="/icons/files.svg" alt="Claims" width={18} height={18} />
              <span className="text-[#94A3B8] font-instrument font-medium text-[14px]">Claims</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1E293B]/50 transition-colors">
              <Image src="/icons/users.svg" alt="Reviewers" width={18} height={18} />
              <span className="text-[#94A3B8] font-instrument font-medium text-[14px]">Reviewers</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <h3 className="text-[#94A3B8] font-instrument font-semibold text-[11px] uppercase tracking-[0.09em] px-3">
            Organization
          </h3>
          <div className="flex flex-col gap-1">
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1E293B]/50 transition-colors">
              <Image src="/icons/settings.svg" alt="Settings" width={18} height={18} />
              <span className="text-[#94A3B8] font-instrument font-medium text-[14px]">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
