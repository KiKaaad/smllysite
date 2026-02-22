import type {Metadata} from "next";
import "./globals.css";
import {Montserrat} from "next/font/google";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Providers} from "@/components/providers";
import Navbar from "@/components/navbar";
import {FooterBar} from "@/components/footerbar";
import {ConsoleWelcome} from "@/app/meow";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "smlly | Главная"
};

export default function RootLayout({
                                       children,
                                   }: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={montserrat.className}>

        <main className="container w-full bg-[#050505]">
            <Providers>
                {children}
                <ConsoleWelcome/>
            </Providers>

            <FooterBar/>

        </main>
        </body>
        </html>
    );
}
