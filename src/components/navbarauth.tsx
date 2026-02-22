'use client'

import {signOut, useSession} from "next-auth/react"
import { useEffect, useState } from "react"
import { FastAverageColor } from 'fast-average-color'
import {
    Settings,
    Megaphone,
    Bookmark,
    LogOutIcon,
    MessageCircleMore, EqualApproximately
} from "lucide-react"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Navbar from "@/components/navbar";

export function HeaderAuth() {
    const { data: session } = useSession()
    const [avgColor, setAvgColor] = useState('rgba(255, 255, 255, 0.1)')

    useEffect(() => {
        if (session?.user?.image) {
            const fac = new FastAverageColor()
            fac.getColorAsync(session.user.image, { algorithm: 'dominant' })
                .then(color => {
                    setAvgColor(color.rgba.replace('1)', '0.8)'))
                })
                .catch(() => setAvgColor('rgba(255, 255, 255, 0.1)'))
        }
    }, [session])

    if (!session) return (
        <Navbar/>
    )
    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-26 pointer-events-none z-[45] rounded-b-xl overflow-hidden">

                <div className="absolute inset-0 h-full backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,black,transparent)]" />

                <div className="absolute inset-0 h-[95%] backdrop-blur-xl [mask-image:linear-gradient(to_bottom,black,transparent)]" />

                <div className="absolute inset-0 h-[90%] backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black,transparent)]" />

                <div className="absolute inset-0 h-[85%] backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)]" />

                <div className="absolute inset-0 h-[80%] backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            </div>
            <header className="fixed left-0 right-0 flex justify-center px-6 z-50">
                <div className="flex items-center justify-between w-full max-w-[95%] p-2">

                    <Link href="/">
                        <div
                            className="px-6 py-3 bg-zinc-950/50 backdrop-blur-[16px] rounded-[24px] font-bold text-white tracking-tight text-3xl border border-white/10">
                            smalytale
                        </div>
                    </Link>

                    <nav
                        className="flex items-center gap-2 bg-zinc-950/50 backdrop-blur-[16px] rounded-full p-1 border border-white/10">
                        <NavItem icon={<MessageCircleMore size={24}/>} label="Чаты" active/>
                        <NavItem icon={<Settings size={24}/>} label="Настройки"/>
                        <NavItem icon={<Megaphone size={24}/>} label="Каналы"/>
                        <NavItem icon={<Bookmark size={24}/>} label="Избранное"/>
                        <div className="bg-white/10 w-1 h-12 rounded-full"></div>
                        <NavItem icon={<EqualApproximately size={24}/>} label="Другое"/>
                    </nav>

                    <DropdownMenu>
                        <div
                            className="px-2 py-2 bg-zinc-950/50 backdrop-blur-[16px] rounded-[24px] tracking-tight border border-white/10">
                            <DropdownMenuTrigger asChild>
                                <div
                                    className="flex items-center justify-between gap-3 h-12 my-1 mx-1 rounded-full cursor-pointer transition-all hover:brightness-110 active:scale-95 border border-white/10 backdrop-blur-[16px]"
                                    style={{backgroundColor: avgColor}}>

                                    <span className="font-medium text-[20px] invert pl-4">Профиль</span>
                                    <img
                                        src={session.user.image || ''}
                                        crossOrigin="anonymous"
                                        className="w-12 h-12 rounded-full border border-white/10 object-cover"
                                        alt="Avatar"/>
                                </div>
                            </DropdownMenuTrigger>
                        </div>
                        <DropdownMenuContent
                            className="mt-5 ml-1 text-white bg-[#111010]/20 backdrop-blur-[16px] border-white/10 rounded-[24px] z-12500">
                            <DropdownMenuGroup className="">
                                <Link href={`/${session?.user?.username || ''}`}><DropdownMenuLabel
                                    className="text-[1rem] hover:bg-black/25 rounded-t-[1.2rem] rounded-b-[0.25rem] cursor-pointer">Профиль</DropdownMenuLabel></Link>
                                <DropdownMenuItem
                                    className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Настройки</DropdownMenuItem>
                                <DropdownMenuItem
                                    className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Сообщения</DropdownMenuItem>
                                <DropdownMenuItem
                                    className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Каналы</DropdownMenuItem>
                                <DropdownMenuItem
                                    className="text-[1rem] hover:bg-black/25 rounded-b-[0.25rem] rounded-t-[0.25rem] cursor-pointer">Избранное</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator className="bg-white/20"/>
                            <DropdownMenuItem
                                className="text-[1rem] text-red-400 bg-black/25  rounded-[.5rem] hover:bg-red-400/15 cursor-pointer"
                                variant="destructive">
                                <button className="w-full flex items-center cursor-pointer" onClick={() => signOut()}>
                                    <LogOutIcon className="text-red-400"/>
                                    <p className="pl-2">Выйти</p>
                                </button>
                            </DropdownMenuItem>
                            <p className="text-[.8rem] m-2 text-white/20">Версия сборки unknown</p>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <div className={`flex flex-col items-center justify-center min-w-[70px] px-3 py-1 rounded-full cursor-pointer transition-all ${active ? 'bg-green-500/20 text-green-400' : 'text-white hover:text-white hover:bg-white/5'}`}>
            {icon}
            <span className="text-[16px] font-medium mt-1 tracking-wider">{label}</span>
        </div>
    )
}
