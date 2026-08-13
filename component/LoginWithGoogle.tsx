"use client"
import { signIn } from "@/app/lib/auth-client"
export default function LoginBtn(){
    const handleLogin = async () => {
        const data = await signIn()
        console.log(data)
    }
    return(
        <button onClick={handleLogin} className="px-6 py-3 bg-blue-600 text-white font-semibold">Login With Google</button>
    )
}