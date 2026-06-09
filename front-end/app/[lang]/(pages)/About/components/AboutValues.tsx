"use client";

import { Target, Heart, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutValues() {
    const { t } = useLanguage();

    const values = [
        { icon: <Target size={18} className="text-white" />, title: t("about.values.1.title"), desc: t("about.values.1.desc") },
        { icon: <Heart size={18} className="text-white" />, title: t("about.values.2.title"), desc: t("about.values.2.desc") },
        { icon: <Zap size={18} className="text-white" />, title: t("about.values.3.title"), desc: t("about.values.3.desc") },
        { icon: <ShieldCheck size={18} className="text-white" />, title: t("about.values.4.title"), desc: t("about.values.4.desc") },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{t("about.values.title")}</h2>
                    <p className="mt-2 text-slate-500 text-xs sm:text-sm">{t("about.values.subtitle")}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {values.map((v) => (
                        <div key={v.title} className="flex flex-col gap-3.5 p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-200">
                                {v.icon}
                            </div>
                            <p className="text-base font-bold text-slate-900 mt-1">{v.title}</p>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}