"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function OnlinePrepHeader() {
    const { t } = useLanguage();
    return (
        <div className="mb-6 md:mb-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl md:text-[26px] font-bold leading-snug text-[#101828]">
                {t("online.title")}
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#667085]">
                {t("online.subtitle")}
            </p>
        </div>
    );
}