"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function CountriesHeader() {
    const { t } = useLanguage();

    return (
        <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#101828]">{t("countries.title")}</h1>
            <p className="mt-2 text-sm text-[#667085]">{t("countries.subtitle")}</p>
        </div>
    );
}