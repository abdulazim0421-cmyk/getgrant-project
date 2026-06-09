"use client";

import { useLanguage } from "@/app/context/LanguageContext";

// Добавь эту функцию обратно:
function openModal() {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

export default function CtaSection() {
    const { t } = useLanguage();
    return (
        <section className="bg-[#F0F5FF] py-10 md:py-14 px-4 sm:px-6 rounded-2xl mx-4 sm:mx-6 lg:mx-8 shadow-sm">
            <div className="container mx-auto flex flex-col items-center text-center gap-3.5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828] px-2">
                    {t("online.cta.title")}
                </h2>
                <p className="text-xs sm:text-sm text-[#667085] max-w-md leading-relaxed px-4">
                    {t("online.cta.desc")}
                </p>
                <button
                    onClick={openModal}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#0047FF] text-white text-sm font-semibold hover:bg-[#0035CC] transition-all active:scale-98 mt-1"
                >
                    {t("online.cta.btn")}
                </button>
            </div>
        </section>
    );
}