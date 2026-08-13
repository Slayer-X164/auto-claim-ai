import Image from "next/image";
import LoginWithGoogleBtn from "@/component/LoginWithGoogleBtn";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#1F66FF] flex items-center justify-center p-4 sm:p-8 font-instrument">
      {/* Desktop/Tablet Container */}
      <div className="hidden md:flex flex-row w-full max-w-[1000px] h-[651px] bg-white rounded-[30px] overflow-hidden p-[25px] items-center justify-between">

        {/* Left Side (Gradient background) */}
        <div className="relative w-[500px] h-[610px] bg-[rgba(11,88,255,0.08)] rounded-[22px] overflow-hidden p-8 flex flex-col justify-between">
            {/* Blurred shapes behind */}
            <div className="absolute top-[44px] left-[505px] w-[183px] h-[114px] bg-[rgba(11,88,255,0.83)] blur-[100px] rounded-full"></div>
            <div className="absolute -top-[50px] -left-[26px] w-[184px] h-[189px] bg-[rgba(11,88,255,0.83)] blur-[100px] rounded-full"></div>
            <div className="absolute top-[550px] left-[487px] w-[219px] h-[221px] bg-[rgba(11,88,255,0.83)] blur-[100px] rounded-full"></div>
            <div className="absolute top-[709px] left-[158px] w-[256px] h-[300px] bg-[rgba(11,88,255,0.83)] blur-[100px] rounded-full"></div>
            <div className="absolute top-[279px] -left-[65px] w-[237px] h-[135px] bg-[rgba(11,88,255,0.83)] blur-[100px] rounded-full"></div>

            {/* Logo */}
            <div className="relative z-10 flex items-center gap-3">
               <Image src="/images/logo.png" width={43} height={43} alt="AutoClaimAI Logo" />
               <span className="text-[26px] font-semibold text-black">AutoClaimAI</span>
            </div>

            {/* Text */}
            <div className="relative z-10 flex flex-col gap-3 mb-10">
               <span className="text-[20px] font-medium text-black">You can easily</span>
               <h1 className="text-[40px] font-medium text-black leading-tight">Get your vehicle claim reviewed and decided in minutes.</h1>
            </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex flex-col items-center justify-center w-full max-w-[418px] px-8">
            <div className="flex flex-col w-full gap-[42px]">
               {/* Headings */}
               <div className="flex flex-col gap-[3px]">
                 <h2 className="text-[46px] font-bold text-black leading-tight">Complete Login</h2>
                 <p className="text-[14px] text-[#828282] font-inter">
                    Access your tasks, notes, and process anytime.
                    anywhere and keep everything flowing in one place
                 </p>
               </div>

               {/* Form */}
               <div className="flex flex-col gap-[31px]">
                  <div className="flex flex-col gap-[10px]">
                     <label className="text-[18px] text-black">Enter your email</label>
                     <input
                       type="email"
                       placeholder="abc@gmail.com"

                       className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#D1D1D1] rounded-[7px] text-black outline-none"

                     />
                  </div>
                  <button className="w-full drop-shadow-[1px_10px_20px_rgba(10,10,10,0.3)] cursor-pointer py-3 bg-black text-white rounded-[7px] text-[16px]">
                    Get OTP
                  </button>
               </div>

               {/* Divider */}
               <div className="flex flex-col items-center gap-[38px] w-full">
                  <div className="flex items-center justify-between w-[329px]">
                     <div className="h-[1px] w-[81px] bg-[#D2D0D0]"></div>
                     <span className="text-[16px] text-[#D2D0D0] font-medium">try login with</span>
                     <div className="h-[1px] w-[81px] bg-[#D2D0D0]"></div>
                  </div>

                  {/* Social */}
                  <div className="flex items-center justify-center gap-[17px] w-full">
                     <button className="flex items-center justify-center w-[118px] h-[44px] bg-[#EFEFEF] border border-[#D0CECE] rounded-[7px] cursor-pointer hover:bg-gray-200 transition-colors">
                        <Image src="/images/github.png" width={33} height={33} alt="GitHub" />
                     </button>
                     <LoginWithGoogleBtn />
                  </div>
               </div>
            </div>
        </div>
      </div>

      {/* Mobile Container */}
      <div className="flex md:hidden flex-col w-full max-w-[400px] gap-5">
         {/* Top Card */}
         <div className="relative w-full h-[280px] bg-white rounded-[20px] p-2">
            <div className="relative w-full h-full bg-[rgba(11,88,255,0.08)] rounded-[13px] overflow-hidden p-6 flex flex-col justify-between">
               {/* Blurred Shapes */}
               <div className="absolute top-[328px] left-[291px] w-[130px] h-[132px] bg-[rgba(11,88,255,0.83)] blur-[60px] rounded-full"></div>
               <div className="absolute top-[26px] left-[302px] w-[109px] h-[68px] bg-[rgba(11,88,255,0.83)] blur-[60px] rounded-full"></div>
               <div className="absolute -top-[30px] -left-[15px] w-[110px] h-[113px] bg-[rgba(11,88,255,0.83)] blur-[60px] rounded-full"></div>
               <div className="absolute top-[166px] -left-[38px] w-[141px] h-[80px] bg-[rgba(11,88,255,0.83)] blur-[60px] rounded-full"></div>

               {/* Content */}
               <div className="relative z-10 flex flex-col justify-center h-full gap-2 mt-4">
                  <span className="text-[12px] font-medium text-black">You can easily</span>
                  <h1 className="text-[25px] font-normal text-black leading-tight">Get your vehicle claim reviewed and decided in minutes.</h1>
               </div>
            </div>
         </div>

         {/* Bottom Card */}
         <div className="w-full bg-white rounded-[20px] py-8 px-6 flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
               <Image src="/images/logo.png" width={20} height={20} alt="AutoClaimAI Logo" />
               <span className="text-[12px] font-semibold text-black">AutoClaimAI</span>
            </div>

            <div className="flex flex-col w-full gap-[30px]">
               {/* Headings */}
               <div className="flex flex-col gap-[2px] items-center">
                 <h2 className="text-[29px] font-bold text-black">Complete Login</h2>
                 <p className="text-[11px] text-[#828282] font-inter text-center leading-relaxed">
                    Access your tasks, notes, and process anytime.<br/>
                    anywhere and keep everything flowing in one place
                 </p>
               </div>

               {/* Form */}
               <div className="flex flex-col gap-[22px]">
                  <div className="flex flex-col gap-[7px]">
                     <label className="text-[12px] text-black">enter your email</label>
                     <input
                       type="email"
                       placeholder="abc@gmail.com"
                       className="w-full px-[11px] py-[7px] bg-[#F9F9F9] border border-[#D1D1D1] rounded-[5px] text-[14px] text-black outline-none"

                     />
                  </div>
                  <button className="w-full drop-shadow-[1px_10px_20px_rgba(10,10,10,0.3)] cursor-pointer py-[7px] bg-black text-white rounded-[5px] text-[14px]">
                    Get OTP
                  </button>
               </div>

               {/* Divider */}
               <div className="flex items-center justify-between w-full">
                  <div className="h-[1px] w-[57px] bg-neutral-200"></div>
                  <span className="text-[14px] text-[#D2D0D0] font-medium">try login with</span>
                  <div className="h-[1px] w-[57px] bg-neutral-200"></div>
               </div>

               {/* Social & Login Link */}
               <div className="flex flex-col gap-[26px]">
                  <div className="flex items-center justify-center gap-[12px]">
                     <button className="flex items-center justify-center w-[83px] h-[31px] bg-[#EFEFEF] border border-[#D0CECE] rounded-[5px] cursor-pointer hover:bg-gray-200 transition-colors">
                        <Image src="/images/github.png" width={23} height={23} alt="GitHub" />
                     </button>
                     <LoginWithGoogleBtn isMobile={true} />
                  </div>

               </div>
            </div>
         </div>
      </div>
    </main>
  );
}