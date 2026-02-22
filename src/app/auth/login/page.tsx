'use client'

import { useSession, signIn } from "next-auth/react"
import { LoginForm } from "@/components/login-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Navbar from "@/components/navbar";

export default function LoginPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session?.user?.isOnboarded) {
            router.push("/")
        }
    }, [session, router])

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#050505] p-4">
            <Navbar/>
            {session ? (
                <div className="w-full max-w-4xl">
                    <LoginForm />
                </div>
            ) : (
                <Card className="w-full max-w-md p-8 text-white border-white/20 bg-[#0f0909] rounded-[24px]">
                    <h1 className="text-2xl font-bold text-center mb-6">Вход в smalytale | Общага</h1>
                    <Button
                        className="w-full bg-white text-black hover:bg-white/90 font-bold py-6 rounded-xl"
                        onClick={() => signIn("github")}><img src="/github.svg" className="w-5 h-5 mr-2 brightness-0" alt="GH" />Продолжить в GitHub
                    </Button>
                </Card>
            )}
        </main>
    )
}
