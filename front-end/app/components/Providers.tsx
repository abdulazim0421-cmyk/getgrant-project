"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";
import { ReactNode } from "react";

export default function Providers({
                                      children,
                                      initialLang,
                                  }: {
    children: ReactNode;
    initialLang?: "ru" | "ky";
}) {
    return (
        <LanguageProvider initialLang={initialLang}>
            {children}
        </LanguageProvider>
    );
}