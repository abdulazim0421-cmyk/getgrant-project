import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "GetGrant",
    description: "Образование за рубежом и поиск грантов",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning className={cn("font-sans", inter.variable)}>
        <body className="antialiased bg-white" suppressHydrationWarning>
        {children}
        </body>
        </html>
    );
}