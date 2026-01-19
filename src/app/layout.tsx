import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const inter = Inter({subsets: ['latin'], weight: "500"})

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
      <body className={inter.className}>
      <main className="container">{children}</main>
      </body>
    </html>
  );
}
