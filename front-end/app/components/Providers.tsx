"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/app/context/LanguageContext";

interface ProvidersProps {
    children: ReactNode;
    initialLang?: "ru" | "kg"; // Вот здесь измени с "ky" на "kg"
}

export default function Providers({ children, initialLang = "ru" }: ProvidersProps) {
    return (
        <LanguageProvider initialLang={initialLang}>
            {children}
        </LanguageProvider>
    );
}