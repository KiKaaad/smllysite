import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {Github, Send} from "lucide-react"
import {Dialog} from "next/dist/next-devtools/dev-overlay/components/dialog/dialog";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#111010] text-white overflow-x-hidden">

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
                        <h1 className="text-[64px] font-bold leading-none mb-4">Лучшие тестировочные сервера</h1>
                        <h2 className="text-2xl font-medium text-gray-300">
                            Самое адекватнейшее сообщество лапочек :З
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
        </main>

    );
}