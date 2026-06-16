"use client";

import { useLanguage } from "@/app/context/LanguageContext";

function openModal() {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

interface CountryCtaProps {
    ctaTitle: string;
}

export default function CountryCta({ ctaTitle }: CountryCtaProps) {
    const { t } = useLanguage();

    return (
        <section className="py-10 sm:py-16">
            {/* Ограничение ширины изменено на max-w-[1440px] */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#F9FAFB] rounded-[24px] border border-[#EAECF0] py-10 px-5 sm:py-14 sm:px-8 flex flex-col items-center text-center gap-5 shadow-sm">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#101828] max-w-xl tracking-tight">{ctaTitle}</h2>
                    <p className="text-xs sm:text-sm text-[#667085] max-w-md leading-relaxed">
                        {t("nav.consultation")}
                    </p>
                    <button
                        onClick={openModal}
                        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1570EF] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D4ED8] transition-all duration-200 active:scale-98 shadow-sm"
                    >
                        {t("nav.consultation")}
                    </button>
                </div>
            </div>
        </section>
    );
}