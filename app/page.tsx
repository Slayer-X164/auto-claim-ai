import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0655FF] from-0% to-white to-88% flex flex-col items-center px-4 py-4 font-instrument overflow-x-hidden">

      {/* Navigation Bar */}
      <nav className="w-full max-w-[1148px] bg-white rounded-lg px-2 sm:px-[10px] py-[7px] flex flex-row items-center justify-between shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <Image
            src="/images/logo.png"
            width={43}
            height={43}
            alt="AutoClaimAI Logo"
            className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px]"
          />
          <span className="text-[16px] sm:text-[20px] pt-0.5 font-semibold text-black">
            AutoClaimAI
          </span>
        </div>

        {/* Links Section */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-[16px] font-medium text-black hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="#" className="text-[16px] font-medium text-black hover:opacity-70 transition-opacity">
              Features
            </Link>
            <Link href="#" className="text-[16px] font-medium text-black hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </div>

          <Link
            href="/login"
            className="px-6 py-[8px] bg-black text-white text-[14px] sm:text-[16px] font-light rounded-lg hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-[60px] sm:mt-[80px] w-full max-w-[897px] gap-[41px] px-4">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold text-white leading-[38px] sm:leading-tight">
          AI agents that read every claim before your reviewers do
        </h1>

        <p className="text-[16px] sm:text-[20px] font-medium text-white max-w-[598px] tracking-[0.06em] leading-normal">
          Upload a few photos and your policy. our ai agents verify, assess, and validate your claim in minutes, no adjuster callbacks, no hold music
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[29px] mt-4">
          <button className="px-[25px] py-[10px] bg-black text-white text-[16px]  sm:text-[18px] cursor-pointer font-light rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
            Create Organisation
          </button>
          <button className="px-[25px] py-[10px] bg-white text-black text-[16px]  sm:text-[18px] cursor-pointer font-light rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Join Organisation
          </button>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="w-full max-w-[1092px] h-[300px] sm:h-[400px] md:h-[500px] bg-white/20 rounded-[20px] p-4 sm:p-6 mt-[80px] sm:mt-[100px] mb-20 backdrop-blur-sm ">
        <div className="w-full h-full bg-white rounded-[16px] flex items-center justify-center">
          <span className="text-[30px] sm:text-[50px] font-bold text-black">
            Video
          </span>
        </div>
      </div>

    </main>
  );
}