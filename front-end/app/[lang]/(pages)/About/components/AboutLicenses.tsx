"use client";

import { FileText } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

function openModal() {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

const licenses = [
    { title: "Лицензия на образовательную деятельность", detail: "№ 240000733, от 01.01.2020" },
    { title: "Свидетельство об аккредитации",            detail: "№ 654321, от 15.03.2021" },
    { title: "Член ассоциации ICEF",                     detail: "ICEF Agency Status, с 2021 года" },
    { title: "Аккредитация NAFSA",                       detail: "NAFSA Member, с 2022 года" },
];

export default function AboutLicenses() {
    const { t } = useLanguage();

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            {/* Контейнер изменен на max-w-[1440px] px-4 sm:px-6 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{t("about.licenses.title")}</h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 mb-8 md:mb-10">{t("about.licenses.subtitle")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:mb-16">
                    {licenses.map((l) => (
                        <div key={l.title} className="flex items-center gap-4 p-4 sm:p-5 bg-white border border-[#EAECF0] rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-200">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-100">
                                <FileText size={18} className="text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-slate-900 truncate">{l.title}</p>
                                <p className="text-xs text-slate-500 mt-0.5 truncate">{l.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Нижний CTA Баннер */}
                <div className="bg-slate-50 rounded-2xl sm:rounded-[32px] py-10 sm:py-14 md:py-16 px-4 sm:px-8 flex flex-col items-center text-center gap-4 sm:gap-5 border border-slate-100">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight px-2">{t("about.licenses.cta.title")}</h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed px-4">{t("about.licenses.cta.desc")}</p>
                    <button
                        onClick={openModal}
                        className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-98 transition-all duration-200 shadow-sm mt-1"
                    >
                        {t("about.licenses.cta.btn")}
                    </button>
                </div>
            </div>
        </section>
    );
}