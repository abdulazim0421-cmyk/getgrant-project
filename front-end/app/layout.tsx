import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/app/components/Providers";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "GetGrant",
    description: "Образование за рубежом и поиск грантов",
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    // Читаем язык из cookie на сервере
    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value === "ky" ? "ky" : "ru";

    return (
        <html lang={lang} className={cn("font-sans", inter.variable)} suppressHydrationWarning>
        <body className="antialiased bg-white" suppressHydrationWarning>
        <Providers initialLang={lang}>
            {children}
        </Providers>
        </body>
        </html>
    );
}