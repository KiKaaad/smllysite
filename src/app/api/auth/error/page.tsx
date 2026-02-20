'use client'
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

            {/* 500 */}

            {/* Динамический остров */}

            <nav className="fixed top-22 w-105 z-5550 right-40 bg-[#111010]/20 backdrop-blur-[16px] rounded-[100px] border border-white/10 h-12 flex items-center justify-center shadow-xl">
                <h6 className="text-center font-medium">CLIENT_FETCH_ERROR | Что-то пошло не так...</h6>
            </nav>

            <div className="relative w-full p-20 px-20 flex justify-between">
                <div className="relative z-10 content-center    ">
                    <h1 className="text-[64px] font-bold leading-none mb-4">CLIENT_FETCH_ERROR, <span className="text-pink-300">это наша проблема</span></h1>
                    <h2 className="text-2xl font-medium text-gray-300">
                        Не бойтесь, вы можете вернуться на главную, <br />тыкнув на фуренка справа
                    </h2>
                    <h2 className="text-2xl font-medium text-gray-300 mt-10">
                        Если такое повторится, пожалуйста, сообщите <a href="https://t.me/kikaaad" className="text-pink-300">t.me/kikaaad</a> <br />или в канал идей по тегу «баг»
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