"use client";

import { useLanguage } from "@/app/context/LanguageContext";

function openModal() {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

export default function CtaSection() {
    const { t } = useLanguage();
    return (
        <section className="bg-[#F0F5FF] py-14 px-6">
            <div className="container mx-auto flex flex-col items-center text-center gap-4">
                <h2 className="text-2xl font-bold text-[#101828]">{t("online.cta.title")}</h2>
                <p className="text-sm text-[#667085] max-w-md leading-relaxed">{t("online.cta.desc")}</p>
                <button onClick={openModal} className="px-8 py-3 rounded-lg bg-[#0047FF] text-white text-sm font-semibold hover:bg-[#0035CC] transition-colors">
                    {t("online.cta.btn")}
                </button>
            </div>
        </section>
    );
}