import Link from "next/link";
import type { Metadata } from "next";
import { HeaderAuth } from "@/components/navbarauth";

export const metadata: Metadata = {
    title: "smlly | Smllygram"
};

export default function Femay() {
    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

            <HeaderAuth/>

            <div className="relative w-full p-20 px-20 flex justify-between h-123">
                <div className="relative z-10 content-center    ">
                    <h1 className="text-[64px] font-bold leading-none mb-4">Work in process... <br/><span className="text-pink-300">Эта страница находится в разработке</span></h1>
                    <h2 className="text-2xl font-medium text-gray-300">
                        Она может работать некорректно, но в целом <br />пользоваться ей можете
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

            <div>test div block</div>

        </main>

    );
}