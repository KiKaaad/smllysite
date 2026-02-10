import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "700", "900"],
    display: "swap",
});

// Иконка Discord
const DiscordIcon = (props: never) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
);

// Иконка Telegram
const TelegramIcon = (props: never) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>
);

export const metadata: Metadata = {
  title: "smllysite | Главная"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="ru">
      <body className={montserrat.className}>

        <main className="container w-full bg-[#050505]">
            <Providers>
                <Navbar/>
                {children}
            </Providers>

            {/*  Это так называемый футер (это пиздец) */}

            <div className="pr-20 pl-20">
                <div className="bg-[#080808] relative w-full px-20 py-16 rounded-t-[60px] shadow-[0_0_40px_20px_rgba(0,0,0,0.38)]">
                    <div className="relative z-10 flex justify-between items-start">

                        {/* Левая часть */}
                        <div className="flex gap-4">
                            <div className="content-center">
                                <img src="favicon.png" alt="logo" className="w-16 h-16" />
                            </div>
                            <div>
                                <h1 className="text-[36px] font-bold leading-none text-gray-300">smlly, Nocm</h1>
                                <div className="w-full max-w-[250px] my-4 bg-white/5 h-1 rounded-full"></div>
                                <div className="flex gap-2 text-sm">
                                    <span className="text-gray-500">© 2001 – 2026</span>
                                    <span className="text-gray-500">created by
                            <a href="https://t.me/kikaad" className="text-[#27A356] ml-1 hover:text-pink-300 transition-colors">KiKa</a>
                        </span>
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

                          <div className="flex gap-2">
                              <a href="https://t.me/smaaaly" target="_blank" rel="noreferrer">
                                  <Button variant="link" size="sm" className="text-gray-300 rounded-full hover:scale-110 transition-transform hover:bg-blue-500 bg-[#0a0a0a] cursor-pointer">
                                      <TelegramIcon size={20} />
                                  </Button>
                              </a>

                              <a href="https://discord.gg/3JSz5fEeee" target="_blank" rel="noreferrer">
                                  <Button variant="link" size="sm" className="text-gray-300 rounded-full hover:scale-110 transition-transform hover:bg-indigo-500 bg-[#0a0a0a] cursor-pointer">
                                      <DiscordIcon size={20}/>
                                  </Button>
                              </a>
                          </div>

                          <a href="https://github.com/KiKaaad/smllysite" target="_blank" rel="noreferrer">
                              <Button variant="link" size="sm" className="text-gray-300 rounded-full hover:scale-110 transition-transform hover:bg-teal-500 bg-[#0a0a0a] cursor-pointer gap-2">
                                  <span className="text-xs opacity-70">smlly is open source</span>
                                  <Github size={20} />
                              </Button>
                          </a>

                      </div>
                  </div>
              </div>
          </div>
      </main>
      </body>
    </html>
  );
}
