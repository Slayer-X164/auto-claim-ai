"use client"
import { signIn } from "@/app/lib/auth-client"
import Image from "next/image"

export default function LoginWithGoogleBtn({ isMobile = false }: { isMobile?: boolean }) {
    const handleLogin = async () => {
        await signIn()
    }

    return(
        <button
          onClick={handleLogin}
          className={`flex items-center active:scale-96 transition-all duration-100 ease-in-out justify-center bg-[#EFEFEF] border border-[#D0CECE] cursor-pointer hover:bg-gray-200 transition-colors ${
            isMobile
              ? "w-[83px] h-[31px] rounded-[5px]"
              : "w-[118px] h-[44px] rounded-[7px]"
          }`}
        >
            <Image
              src="/images/google.png"
              width={isMobile ? 23 : 33}
              height={isMobile ? 23 : 33}
              alt="Login with Google"
            />
        </button>
    )
}