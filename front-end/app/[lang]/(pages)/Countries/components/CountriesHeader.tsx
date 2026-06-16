"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function CountriesHeader() {
    const { t } = useLanguage();

    return (
        <section className="max-w-[1440px] mx-auto mb-6 sm:mb-8 md:mb-10 text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight">
                {t("countries.title")}
            </h1>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#667085] max-w-2xl leading-relaxed">
                {t("countries.subtitle")}
            </p>
        </section>
    );
}