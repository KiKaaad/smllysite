'use client'

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="fixed top-4 left-1/2 pl-6 pr-6 -translate-x-1/2 w-[calc(100%-160px)] z-5550 bg-[#111010]/20 backdrop-blur-[16px] rounded-[24px] border border-white/10 h-16 flex items-center justify-between shadow-xl">
            <Link href="/">
                <div className="font-bold text-3xl tracking-tighter text-gray-100 mr-10">smalytale</div>
            </Link>

            <div className="flex gap-8 font-medium text-base justify-start text-gray-300">
                <Link href="/" className="hover:text-white transition">Ресурсы</Link>
                <Link href="/" className="hover:text-white transition">Сервера</Link>
                <Link href="/" className="hover:text-white transition">Поддержка</Link>
            </div>

            <div className="flex items-center">
                <div className="flex gap-4">
                    {session ? (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => signOut()}
                                className="text-xs text-gray-400 hover:text-white transition"
                            >
                                Выйти
                            </button>
                            <div className="w-10 h-10 relative border border-white/20 rounded-full overflow-hidden">
                                <Image
                                    src={session.user?.image || "/default-avatar.png"}
                                    alt="Avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ) : (
                        <Link href="/login" className="bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold hover:bg-gray-200 transition">
                            Войти
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}