import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {Github, Send} from "lucide-react"
import {Dialog} from "next/dist/next-devtools/dev-overlay/components/dialog/dialog";
// Иконка Discord
const DiscordIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
);

// Иконка Telegram
const TelegramIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>
);


export default function Home() {
    return (
        <main className="min-h-screen bg-[#111010] text-white overflow-x-hidden">
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-160px)] z-5550 bg-[#111010]/20 backdrop-blur-[16px] rounded-[24px] border border-white/10 h-16 flex items-center justify-between px-6 shadow-xl">
                <div className="font-bold text-3xl tracking-tighter">#Общага</div>

                <div className="flex gap-8 font-medium text-base text-gray-300">
                    <Link href="/" className="hover:text-white transition">Ресурсы</Link>
                    <Link href="/" className="hover:text-white transition">Сервера</Link>
                    <Link href="/" className="hover:text-white transition">Правила</Link>
                </div>

                <div className="flex gap-4">
                    <Link href="/" className="bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold hover:bg-gray-200 transition">
                        Войти
                    </Link>
                </div>
            </nav>

        <div className="pt-24 pl-10 pr-10">
            <div className="relative h-[80vh] flex items-center px-20">
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-75 z-0 rounded-[60px]"
                    priority
                />
                <div className="relative z-10 max-w-5xl">
                    <h1 className="text-[64px] font-bold leading-none mb-4">Общага - лучший клан для ваших лапок</h1>
                    <h2 className="text-2xl font-medium text-gray-300">
                        Самое адекватнейшее сообщество сервера :З
                    </h2>
                </div>
            </div>
        </div>

    <div className="relative w-full h-[80vh] flex items-center px-20 pt-20">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-[120px] font-black leading-none mb-4">42</h1>
                    <h2 className="text-2xl font-light text-gray-300">
                        Самое адекватнейшее сообщество сервера :З
                    </h2>
                </div>
            </div>

        <div className="pr-16 pl-16">
            <div className="bg-[#141311] relative w-full h-[30rem] px-20 pt-20 rounded-t-[60px] shadow-[0_0_40px_20px_rgba(0,0,0,0.38)]">
                <div className="relative z-10 flex">
                    <div>
                        <h1 className="text-[30px] font-black leading-none mb-4">smlly, Nocm</h1>
                        <hr className="w-46 pb-3" ></hr>
                        <div className="flex gap-2">
                            <div className="text-1xl font-medium text-gray-300">
                                © 2021 – 2026</div>
                            <div className="text-gray-400 font-medium">by KiKa</div>
                    </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end gap-2">
                        {/* Верхний ряд: Телеграм и Дискорд */}
                        <div className="flex gap-2">
                            <a href="https://t.me/smaaaly" target="_blank" rel="noreferrer">
                                <Button variant="link" size="sm" className="rounded-full hover:scale-110 transition-transform hover:bg-blue-500 bg-[#0a0a0a] cursor-pointer">
                                    <TelegramIcon size={20} />
                                </Button>
                            </a>
                            <a href="https://discord.gg/3JSz5fEeee" target="_blank" rel="noreferrer">
                                <Button variant="link" size="sm" className="rounded-full hover:scale-110 transition-transform hover:bg-indigo-500 bg-[#0a0a0a] cursor-pointer">
                                    <DiscordIcon size={20}/>
                                </Button>
                            </a>
                        </div>

                        {/* Нижний ряд: Гитхаб */}
                        <a href="https://github.com/KiKaaad/smllysite" target="_blank" rel="noreferrer">
                            <Button variant="link" size="sm" className="rounded-full hover:scale-110 transition-transform hover:bg-teal-500 bg-[#0a0a0a] cursor-pointer gap-2">
                                <span className="text-xs opacity-70">smlly is open source</span>
                                <Github size={20} />
                            </Button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        </main>

    );
}