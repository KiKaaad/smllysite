import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

            {/*Начальная страница*/}

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

            {/* Список недавних новостей */}

        <div className="relative w-full h-100 mt-8 px-20 grid ">
                    <div className="relative z-10 max-w-4xl">
                        <h3 className="text-[50px] font-bold leading-none">Недавние события</h3>
                    </div>
        </div>

            {/* Начало описаний Общаги */}

            <div className="relative w-full px-20 grid ">
                <div className="relative z-10 max-w-12xl max-h-140 bg-linear-to-r from-[#3CCD67] to-[#1D6B1A] rounded-[60px]">
                    <div className="relative z-10 h-140 ml-22 flex justify-between">
                        <h4 className="text-[100px] font-bold leading-none text-[#131313] content-center">Спавн
                            <p className="text-[40px] font-medium leading-none text-[#131313] max-w-160">Приятный, атмосферный,
                            детально красивый</p>
                        </h4>
                        <div className="relative z-10 flex justify-between ml-22">
                            <img
                                src="/spawn.png"
                                alt="Hero Background"
                                className="z-0 relative rounded-[60px]"
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full p-20 px-20 grid ">
                <div className="relative z-10 max-w-12xl max-h-140 bg-linear-to-r from-[#6B6B6B] to-[#C6D4CA] rounded-[60px]">
                    <div className="relative z-10 h-140 flex justify-between">
                        <div className="relative z-10 flex justify-between mr-22">
                            <img
                                src="/rooms.png"
                                alt="Hero Background"
                                className="z-0 relative rounded-[60px]"
                            />
                        </div>
                        <h4 className="text-[100px] font-bold leading-none text-[#131313] content-center mr-22 text-right">Комнаты
                            <p className="text-[40px] font-medium leading-none text-[#131313] max-w-160 text-right">Посмотрите на то, как мы
                                создаем уют для вас</p>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="relative w-full p-20 px-20 flex justify-between">
                <div className="relative z-10 max-w-3xl">
                    <img
                        src="/server.png"
                        alt="Hero Background"
                        className="z-0 relative"
                    />
                </div>
                <div className="relative z-10 content-center">
                    <div className="relative z-10 flex justify-end mb-3">
                        <Image src="/server.svg" alt="server" width={40} height={40} className="z-0" />
                    </div>
                    <h5 className="text-[64px] font-bold leading-none content-center text-right">
                        Собственный сервер
                        <p className="font-medium text-[40px] mt-6 ml-20 max-w-2xl text-right">С уникальным геймплеем
                            лобби и 10 оттенков ваниллы</p>
                    </h5>
                </div>
            </div>
            <div className="relative w-full p-20 px-20 flex justify-between">
                <div className="relative z-10 content-center    ">
                    <div className="relative z-10 flex justify-start mb-3">
                        <Image src="/mention.svg" alt="server" width={40} height={40} className="z-0" />
                    </div>
                    <h5 className="text-[64px] font-bold leading-none content-center">
                        Мы есть везде
                        <p className="font-medium text-[40px] mt-6 max-w-2xl">Точнее мы есть в телеграме, вконтакте,
                            дискорде, твиттере, реддите и ютубе</p>
                    </h5>
                </div>
                <div className="relative z-10 max-w-3xl">
                    <img
                        src="/resource.png"
                        alt="Hero Background"
                        className="z-0 relative"
                    />
                </div>
            </div>
            <div className="relative w-full p-20 px-20">
                <div className="relative z-10">
                    <h5 className="text-[64px] font-bold leading-none text-center">
                        И еще многое другое...
                        <p className="font-medium text-[40px] mt-6">Следите за нашими новостями
                            </p><p className="font-medium text-[40px] mt-2 ">в <a href="https://t.me/smaaaly" className="text-blue-500">телеграм</a> канале</p>
                    </h5>
                </div>
            </div>

            {/* Пул для команды */}

            <section>
                <div className="relative w-full p-20 px-20">
                    <div className="relative z-10">
                        <h5 className="text-[64px] font-bold leading-none text-center">
                            Наша прекрасная команда
                        </h5>
                    </div>
                </div>
            </section>

        </main>

    );
}