"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function WhyGetGrant() {
    const { t } = useLanguage();

    const BENEFITS = [
        {
            id: 1,
            title: t("bento.1.title"),
            description: t("bento.1.desc"),
            className: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#A16FD3] to-[#583177] text-white",
            image: "/image/student-grid1.png",
            imgClass: "absolute right-0 bottom-0 w-[50%] sm:w-[50%] md:w-[60%] h-auto",
            textClass: "max-w-[55%] sm:max-w-[60%] md:max-w-[280px] lg:max-w-[320px]"
        },
        {
            id: 2,
            title: t("bento.2.title"),
            description: t("bento.2.desc"),
            className: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#F5F8FE] to-[#D0EFE9] text-slate-900",
            image: "/image/student-grid2.png",
            imgClass: "absolute right-0 bottom-0 w-[45%] sm:w-[50%] md:w-[65%] h-auto",
            textClass: "max-w-[55%] sm:max-w-[60%] md:max-w-[240px] lg:max-w-[280px]"
        },
        {
            id: 3,
            title: t("bento.3.title"),
            description: t("bento.3.desc"),
            className: "col-span-1 sm:col-span-2 md:col-span-2 bg-gradient-to-r from-[#F5F8FE] to-[#E9EFFD] text-slate-900",
            image: "/image/student-grid5.png",
            imgClass: "absolute max-md:w-[110px] max-sm:w-[200px] right-[-4px] top-[-2px] md:top-[-8px] md:right-2 w-[48%] lg:w-[44%] h-auto",
            textClass: "max-w-[62%] sm:max-w-[65%] md:max-w-[200px] lg:max-w-[260px]"
        },
        {
            id: 4,
            title: t("bento.4.title"),
            description: t("bento.4.desc"),
            className: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#FEF9E8] to-[#FDE1A7] text-slate-900",
            image: "/image/student-grid3.png",
            imgClass: "absolute right-0 bottom-0 w-[45%] sm:w-[65%] md:w-[95%] h-auto",
            textClass: "max-w-[55%] sm:max-w-[100%] w-full"
        },
        {
            id: 5,
            title: t("bento.5.title"),
            description: t("bento.5.desc"),
            className: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2 bg-[#EAECF0] text-slate-900",
            image: "/image/student-grid4.png",
            imgClass: "absolute right-0 bottom-0 w-[100%] h-auto opacity-40 sm:opacity-80 md:absolute",
            textClass: "relative z-10 w-full"
        },
        {
            id: 6,
            title: t("bento.6.title"),
            description: t("bento.6.desc"),
            className: "col-span-1 sm:col-span-2 md:col-span-2 bg-gradient-to-r from-[#F5F8FE] to-[#E9EFFD] text-slate-900",
            image: "/image/student-grid6.png",
            imgClass: "absolute right-0 bottom-0 w-[45%] sm:w-[35%] md:w-[38%] h-auto",
            textClass: "max-w-[55%] sm:max-w-[65%] md:max-w-[200px] lg:max-w-[260px]"
        },
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-4 py-12 md:py-20 font-sans antialiased">
            <div className="flex flex-col items-center text-center mb-10 md:mb-14 px-4">
                <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold mb-3 text-[#1D2939] tracking-tight leading-[1.2]">
                    {t("bento.title")}
                </h2>
                <p className="text-[#667085] text-[15px] sm:text-[16px] md:text-[17px] max-w-[640px] mx-auto font-medium leading-relaxed opacity-90">
                    {t("bento.desc")}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 lg:gap-5 auto-rows-auto md:auto-rows-[170px]">
                {BENEFITS.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative overflow-hidden rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-7 min-h-[155px] sm:min-h-auto flex flex-col justify-between cursor-default transition-all duration-500 ease-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-1 ${item.className}`}
                    >
                        <div className={`relative z-10 w-full ${item.textClass}`}>
                            <h3 className="text-[18px] sm:text-[22px] md:text-[25px] font-bold mb-1.5 md:mb-2 leading-[1.1] tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-[12.5px] md:text-[14px] leading-relaxed font-medium opacity-80">
                                {item.description}
                            </p>
                        </div>

                        {item.image && (
                            <div className={`pointer-events-none transition-all duration-700 ease-out md:group-hover:scale-105 ${item.imgClass}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-contain object-center ${
                                        item.id === 3 ? "object-right-top" : "object-right-bottom"
                                    }`}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[#667085] text-[13px] md:text-[14px] pt-8 border-t border-slate-100 text-center">
                <span>{t("bento.footer.license")}</span>
                <span className="hidden sm:inline text-[#667085] opacity-30">|</span>
                <span>{t("bento.footer.nafsa")}</span>
                <span className="hidden sm:inline text-[#667085] opacity-30">|</span>
                <span>{t("bento.footer.icef")}</span>
            </div>
        </section>
    );
}