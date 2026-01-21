import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "700", "900"],
    display: "swap",
});

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
      <main className="container w-full">{children}</main>
      </body>
    </html>
  );
}
