import Link from "next/link";
import Image from "next/image";


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
            <div className="bg-[#141311] relative w-full h-[30rem] px-20 pt-20 rounded-t-[60px] shadow-[inset_0_0_40px_20px_rgba(0,0,0,0.38)]">
                <div className="relative z-10">
                    <h1 className="text-[30px] font-black leading-none mb-4">smlly, Inc</h1>
                    <hr className="w-56 pb-3"></hr>
                    <div className="flex gap-2">
                        <div className="text-1xl font-medium text-gray-300">
                            © 2021 – 2026</div>
                        <div className="text-gray-400 font-medium">by KiKa</div>
                    </div>
                </div>
            </div>
        </div>
        </main>

    );
}