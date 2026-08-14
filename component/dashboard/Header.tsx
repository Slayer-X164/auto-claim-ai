import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[72px] bg-white border-b border-[#E2E8F0] px-8 flex items-center justify-between shrink-0">
      <div className="flex items-center">
        <div className="bg-[#F1F5F9] px-3 py-1.5 rounded-md">
          <span className="font-instrument font-bold text-[12px] tracking-[0.0417em] text-[#475569]">
            ADMIN CONSOLE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="w-9 h-9 bg-[#F1F5F9] rounded-full flex items-center justify-center">
          <Image src="/icons/bell.svg" alt="Notifications" width={20} height={20} />
        </button>

        <div className="w-[1px] h-6 bg-[#E2E8F0]"></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-[#E1F5FE] rounded-full flex items-center justify-center">
            <span className="font-instrument font-bold text-[16px] text-[#0288D1]">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-instrument font-semibold text-[14px] text-[#0F172A]">Sarah Chen</span>
            <span className="font-instrument font-medium text-[11px] text-[#94A3B8]">Super Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
