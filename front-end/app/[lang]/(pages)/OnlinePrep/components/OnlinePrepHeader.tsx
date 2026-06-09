"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function OnlinePrepHeader() {
    const { t } = useLanguage();
    return (
        <div className="mb-10">
            <h1 className="text-[26px] font-bold leading-normal text-[#101828]">{t("online.title")}</h1>
            <p className="mt-2 text-sm text-[#667085]">{t("online.subtitle")}</p>
        </div>
    );
}