"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <LanguageProvider>{children}</LanguageProvider>;
}