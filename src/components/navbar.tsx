'use client'

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react"

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="fixed top-4 left-1/2 pl-6 pr-6 -translate-x-1/2 w-[calc(100%-160px)] z-5550 bg-[#111010]/20 backdrop-blur-[16px] rounded-[24px] border border-white/10 h-16 flex items-center justify-between shadow-xl">
            <Link href="/">
                <div className="font-bold text-3xl tracking-tighter text-gray-100 mr-10">smalytale</div>
            </Link>

            <div className="flex gap-8 font-medium text-[1.2rem] text-gray-300">
                <Link href="/femay" className="hover:text-white transition">Smllygram</Link>
                <Link href="/" className="hover:text-white transition">Ресурсы</Link>
                <Link href="/" className="hover:text-white transition">Сервера</Link>
                <Link href="/" className="hover:text-white transition">Поддержка</Link>
                <Link href="/" className="hover:text-white transition">Статус работы</Link>
            </div>

            <div className="flex items-center">
                <div className="flex gap-4">
                    {session ? (
                        <div className="flex items-center gap-3 cursor-pointer">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="w-12 h-12 relative border-2 border-white/20 rounded-full overflow-hidden">
                                        <Image
                                            src={session.user?.image || "/default-avatar.png"}
                                            alt="Avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mt-5 mr-20 text-white bg-[#111010]/20 backdrop-blur-[16px] border-white/10 rounded-[24px]">
                                    <DropdownMenuGroup className="">
                                        <DropdownMenuLabel className="text-[1rem] hover:bg-black/25 rounded-t-[1.2rem] rounded-b-[0.25rem] cursor-pointer">Аккаунт</DropdownMenuLabel>
                                        <DropdownMenuItem className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Настройки</DropdownMenuItem>
                                        <DropdownMenuItem className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Сообщения</DropdownMenuItem>
                                        <DropdownMenuItem className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Каналы</DropdownMenuItem>
                                        <DropdownMenuItem className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Избранное</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator className="bg-white/20"/>
                                    <DropdownMenuItem className="text-[1rem] text-red-400 bg-black/25  rounded-[.5rem] hover:bg-red-400/15 cursor-pointer" variant="destructive">
                                        <button className="w-full flex items-center cursor-pointer" onClick={() => signOut()}>
                                            <LogOutIcon className="text-red-400" />
                                            <p className="pl-2">Выйти</p>
                                        </button>
                                    </DropdownMenuItem>
                                    <p className="text-[.8rem] m-2 text-white/20">Версия сборки unknown</p>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                    ) : (
                        <Link href="/auth/signup" className="bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold hover:bg-white/75 transition">
                            Войти
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}