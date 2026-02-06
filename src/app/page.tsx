import Image from "next/image";

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
                    <div className="z-10 max-w-6xl">
                        <h1 className="text-[64px] font-bold leading-none mb-4">Общага - лучшее сообщество
                            для ваших лапок</h1>
                        <h2 className="text-2xl font-medium text-gray-300">
                            Самое адекватнейшее сообщество лапочек :З
                        </h2>
                    </div>
                </div>
            </div>

        <div className="relative w-full h-[50rem] mt-8 px-20 grid ">
                    <div className="relative z-10 max-w-4xl">
                        <h3 className="text-[50px] font-bold leading-none">Наши те самые тестовые сервера</h3>
                    </div>
            <div className="relative w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="relative z-10 w-full h-[24rem] rounded-[24px] duration-300 hover:shadow-[0_10px_20px_0px_rgba(0,0,0,0.38)] p-6 bg-[#141311]">
                    <h3 className="text-[24px] w-[24rem] font-bold leading-none pb-4">Карточка сервера</h3>
                        <div className="bg-amber-50 max-w-4xl h-12 rounded-[64px] mb-4"></div>
                    <p className="w-75 max-w-4xl ">tttttttttttttttteeeeeeeeeeeee<br></br>eeeeeeeeeeeeeeeexxxxxx<br></br>xxxxxxxxxxxxxxxxxxxxttttttttttttttt<br></br>tttttttttttttttttttttttttttttttt</p>
                </div>
            </div>
                </div>
        </main>

    );
}