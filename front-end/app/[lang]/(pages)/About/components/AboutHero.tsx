"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutHero() {
    const { t } = useLanguage();

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-b border-[#EAECF0]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-gray-400 uppercase mb-3">
                    {t("about.label")}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-5">
                    <span className="text-slate-900">{t("about.hero.title1")}</span>
                    <br className="hidden sm:inline" />
                    <span className="text-blue-600"> {t("about.hero.title2")}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mb-8 leading-relaxed">
                    {t("about.hero.desc")}
                </p>
                <div>
                    <Link href="/Universities" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-xl border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-all duration-200 group active:scale-98">
                        {t("about.hero.btn")}
                        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}