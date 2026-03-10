'use client'
import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
            <div className="relative w-full p-20 px-20 flex justify-between">
                <div className="relative z-10 content-center    ">
                    <h1 className="text-[64px] font-bold leading-none mb-4">Вот сейчас, <span className="text-pink-300">скоро загрузимся...</span></h1>
                    <h2 className="text-2xl font-medium text-gray-300">
                        Да да, читая этот невероятный <br />текст вы можете скоротать свое невероятное время
                    </h2>
                </div>
                <Link href="/">
                    <div className="relative z-10 max-w-3xl">
                        <img
                            src="/furry404.png"
                            alt="furry 404"
                            className="z-0 relative"
                        />
                    </div>
                </Link>
            </div>

        </main>

    );
}