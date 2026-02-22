import {Button} from "@/components/ui/button";
import Link from "next/link";

export function FooterBar() {
    return (
        <div className="pr-20 pl-20">
            <div className="bg-[#080808] relative w-full px-20 py-16 z-15000 rounded-t-[60px] shadow-[0_0_40px_20px_rgba(0,0,0,0.38)]">
                <div className="relative z-10 flex justify-between items-start">

                    {/* Левая часть */}

                    <div className="flex gap-4">
                        <div className="content-center">
                            <img src="/favicon.png" alt="favicon" className="w-16 h-16" />
                        </div>
                        <div>
                            <h1 className="text-[36px] font-bold leading-none text-gray-300">smlly, Nocm</h1>
                            <div className="w-full max-w-[250px] my-4 bg-white/5 h-1 rounded-full"></div>
                            <div className="flex gap-1 font-medium">
                                <span className="text-gray-200">© 2021 – 2026 created by</span>
                                <a href="https://t.me/kikaaad" className="text-[#27A356] hover:text-pink-300 transition-colors">KiKa</a>
                            </div>
                        </div>
                    </div>

                    {/* Колонки */}

                    <div className="flex gap-16">

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[28px] text-white font-bold flex items-start gap-2">⚽ Основное</h3>
                            <ul className="text-[18px] text-white/40 font-medium flex flex-col gap-1">
                                <li className="hover:text-gray-300 cursor-pointer">Кто мы</li>
                                <li className="hover:text-gray-300 cursor-pointer">Цели сообщества</li>
                                <li className="hover:text-gray-300 cursor-pointer">Поддержать нас</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[28px] text-white font-bold flex items-start gap-2">📜 Правила</h3>
                            <ul className="text-[18px] text-white/40 font-medium flex flex-col gap-1">
                                <li className="hover:text-gray-300 cursor-pointer">Правила ТГ</li>
                                <li className="hover:text-gray-300 cursor-pointer">Правила ДС</li>
                                <li className="hover:text-gray-300 cursor-pointer">Общие правила</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-[28px] text-white font-bold flex items-start gap-2">🍩 Ресурсы</h3>
                            <ul className="text-[18px] text-white/40 font-medium flex flex-col gap-1">
                                <li className="hover:text-gray-300 cursor-pointer">Медиа-ресурсы</li>
                                <li className="hover:text-gray-300 cursor-pointer">Поддержка</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[28px] text-white font-bold flex items-start gap-2">🏓 Недавнее</h3>
                            <ul className="text-[18px] text-white/40 font-medium flex flex-col gap-1">
                                <li className="">{'{'} Contents not found {'}'}</li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="flex bg-[#FFFFFF]/2 w-full h-2 mt-8 rounded-[100rem]"></div>
                <div className="flex justify-between items-start w-full mt-10">
                    <div>
                        <p className="text-[30px] font-semibold leading-none text-gray-300 mb-6">
                            Наши ресурсы
                        </p>
                        <div className="flex gap-4">
                            <a href="https://t.me/smaaaly" target="_blank" rel="noreferrer">
                                <Button variant="link" size="sm"
                                        className="text-gray-300 rounded-full w-15 h-15 hover:scale-90 transition-transform hover:bg-blue-500 bg-blue-500/50 cursor-pointer">
                                    <img src="/telegram.svg" alt="Telegram" className="w-12"/>
                                </Button>
                            </a>

                            <a href="https://discord.gg/3JSz5fEeee" target="_blank" rel="noreferrer">
                                <Button variant="link" size="sm"
                                        className="text-gray-300 rounded-full w-15 h-15 hover:scale-90 transition-transform hover:bg-indigo-500 bg-indigo-500/50 cursor-pointer">
                                    <img src="/discord.svg" alt="Discord" className="w-12"/>
                                </Button>
                            </a>

                            <a href="https://github.com/KiKaaad/smllysite" target="_blank" rel="noreferrer">
                                <Button variant="link" size="sm"
                                        className="text-gray-300 rounded-full h-15 w-15 hover:scale-90 transition-transform hover:bg-teal-500 bg-teal-500/50 cursor-pointer">
                                    <img src="/github.svg" alt="GitHub" className="w-12"/>
                                </Button>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[30px] text-white font-bold flex items-start mt-8">Связаться с нами</p>
                            <p className="text-[18px] text-white/50 font-medium flex">smaaaly@proton.me</p>
                        </div>
                    </div>

                    <div className="flex gap-4 ">
                        <div className="bg-[#310A0A]/75 h-44 w-100 rounded-[48px]">
                            <h4 className="text-[36px] font-bold leading-none text-gray-300 mt-8 ml-8 mb-5">Кошмарная зона</h4>
                            <div className="mb-2">
                                <Link href="/" className="text-[20px] font-medium leading-none text-gray-300/70 hover:text-gray-300 ml-8">Политика конфиденциальности</Link>
                            </div>
                            <Link href="/" className="text-[20px] font-medium leading-none text-gray-300/70 hover:text-gray-300 ml-8">Политика сообщества</Link>
                        </div>
                        <div className="bg-[#0A3120]/75 h-44 w-70 rounded-[48px]">
                            <h4 className="text-[36px] font-bold leading-none text-gray-300 hover:text-gray-300 mt-8 ml-8 mb-5">Tools</h4>
                            <div className="mb-2">
                                <Link href="/" className="text-[20px] font-medium leading-none text-gray-300/70 hover:text-gray-300 ml-8">Dev Tools</Link>
                            </div>
                            <Link href="/" className="text-[20px] font-medium leading-none text-gray-300/70 hover:text-gray-300 ml-8 mt-2">Случайная страница</Link>
                        </div>
                    </div>
                </div>

                <p className="text-[60vh] font-semibold text-[#3CCD7D] text-center leading-none mt-15">smlly</p>
            </div>
        </div>
    )
}