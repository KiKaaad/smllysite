import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import type {Metadata} from "next";
import {HeaderAuth} from "@/components/navbarauth";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Функция создает в титуле юзернейм пользователя
export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
    const { username } = await params

    const user = await prisma.user.findUnique({
        where: { username: username.replace('%40', '').replace('@', '') }
    })
    return {
        title: `smlly | @${user?.username || username}`,
    }
}

// Страница
export default async function ProfilePage({params}: { params: Promise<{ username: string }> }) {const { username } = await params

    // Поиск пользователя
    const user = await prisma.user.findUnique({
        where: {
            username: username.replace('%40', '').replace('@', '')},
            include: { badges: true }
    })

    if (!user) {
        return (
            <>
                <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
                    <HeaderAuth />
                    {/* 406 */}

                    {/* Динамический остров */}

                    <div className="flex justify-center ml-20">
                        <nav className="fixed top-22 w-75 z-5550 bg-[#111010]/20 backdrop-blur-[16px] rounded-[100px] border border-white/10 h-12 flex items-center justify-center shadow-xl">
                            <h6 className="text-center font-medium">406 | Пользователь не найден</h6>
                        </nav>
                    </div>

                    <div className="relative w-full p-20 px-20 flex justify-between">
                        <div className="relative z-10 content-center">
                            <h1 className="text-[64px] font-bold leading-none mb-4">406, <span className="text-pink-300">мы не нашли такого пользователя</span></h1>
                            <h2 className="text-2xl font-medium text-gray-300">
                                Не бойтесь, вы можете вернуться обратно, <br />тыкнув на фуренка справа
                            </h2>
                        </div>
                        <UseRedirectBackFurry/>
                    </div>

                </main>
            </>
        )
    }

    return (
        <main className="flex min-h-screen flex-col items-center bg-[#050505] text-white mx-4 md:mx-14">
            <HeaderAuth />

            <div className="relative w-full max-w-[97%] border border-white/10 bg-[#160f0f] rounded-[48px] overflow-hidden mt-24 min-h-[500px]">

                <div className="absolute top-0 left-0 right-0 h-full w-full">
                    <img
                        src="/avatartrashracc00n.gif"
                        alt="banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex justify-end absolute mt-8 right-8 z-1 w-full">
                    <HoverCard>
                        <HoverCardTrigger><InfoIcon className="transition-transform hover:scale-115"/></HoverCardTrigger>
                        <HoverCardContent className="w-75 bg-[#090909]/20 border-white/10 backdrop-blur-[16px] text-white rounded-[26px] mr-2" side="left" align="start">
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-[1.2rem]">8 июня 2018 года</p>
                                <CalendarIcon/>
                            </div>
                            <p className="font-normal text-white/75 text-[.9rem]">Аккаунт создан</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="font-bold text-[1.2rem]">{user.id}</p>
                                <StoneIcon/>
                            </div>
                            <p className="font-normal text-white/75 text-[.9rem]">DC3, Sankt-Petersburg, RU</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>

                <div className="relative pt-24 pb-12 flex flex-col items-center px-6">

                    {/* Аватарка */}
                    <div className="group relative border-4 border-[#160f0f] rounded-full overflow-hidden w-40 h-40 bg-zinc-950/20 border-white/10 shadow-2xl transition-transform hover:scale-105">
                        <img
                            src={user.image || "/default-avatar.png"}
                            alt={user.username || "User"}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Информация о пользователе */}
                    <div className="mt-6 text-center">
                        <h1 className="text-4xl font-bold tracking-tight">
                            {user.name} {user.lastName}
                        </h1>
                    </div>

                    {/* Статус / Описание */}
                    <div className="mt-6 flex flex-col items-center gap-4">
                    <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 font-bold tracking-widest text-white/60 backdrop-blur-xl">
                        Пользователь
                    </span>

                        {/* Бейджи */}
                        <div className="flex gap-2">
                            {user.badges.map((badge) => (
                                <div key={badge.id} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                    <img src={badge.iconUrl} alt={badge.name} className="w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full ml-14">
                <div className="flex flex-col h-100 w-full max-w-[40%] bg-[#090909] rounded-[48px] mt-8 mb-12">
                    <div className="ml-10 mt-4">
                        <p className="text-white text-lg mt-1 font-bold text-[32px]">@{user.username}</p>
                        <p className="text-white/40 text-lg mt-1 font-medium">Имя пользователя</p>
                    </div>

                    <div className="w h-1 bg-white/10 rounded-full mt-4 mx-8"></div>

                    <div className="ml-10 mt-2">
                        <p className="text-white text-lg mt-1 font-bold text-[32px]">@{user.username}</p>
                        <p className="text-white/40 text-lg mt-1 font-medium">Имя пользователя</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
