"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

function TimelineCard({ year, text }: { year: string; text: string }) {
    return (
        <div className="flex items-start gap-3.5 p-4 sm:p-5 bg-white border border-[#EAECF0] rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-100">
                <CheckCircle2 size={16} className="text-white" />
            </div>
            <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 mb-0.5">{year}</p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

export default function AboutHistory() {
    const { t } = useLanguage();

    const events = [
        { year: "2018", text: t("about.history.2018"), side: "left" },
        { year: "2019", text: t("about.history.2019"), side: "right" },
        { year: "2020", text: t("about.history.2020"), side: "left" },
        { year: "2021", text: t("about.history.2021"), side: "right" },
        { year: "2022", text: t("about.history.2022"), side: "left" },
        { year: "2023", text: t("about.history.2023"), side: "right" },
        { year: "2024", text: t("about.history.2024"), side: "left" },
    ];

    const leftItems  = events.filter((e) => e.side === "left");
    const rightItems = events.filter((e) => e.side === "right");
    const rows = Math.max(leftItems.length, rightItems.length);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 md:mb-12 tracking-tight">
                    {t("about.history.title")}
                </h2>

                <div className="hidden md:block relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2" />
                    <div className="flex flex-col gap-6">
                        {Array.from({ length: rows }).map((_, i) => {
                            const left  = leftItems[i];
                            const right = rightItems[i];
                            return (
                                <div key={i} className="grid grid-cols-[1fr_40px_1fr] items-center gap-4">
                                    <div>{left ? <TimelineCard year={left.year} text={left.text} /> : <div className="w-full" />}</div>
                                    <div className="flex justify-center"><div className="w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white z-10" /></div>
                                    <div>{right ? <TimelineCard year={right.year} text={right.text} /> : <div className="w-full" />}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:hidden border-l-2 border-blue-100 pl-4 ml-2">
                    {events.map((e) => (
                        <div key={e.year} className="relative">
                            <div className="absolute -left-[23px] top-4 w-2.5 h-2.5 rounded-full border-2 border-blue-600 bg-white" />
                            <TimelineCard year={e.year} text={e.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}