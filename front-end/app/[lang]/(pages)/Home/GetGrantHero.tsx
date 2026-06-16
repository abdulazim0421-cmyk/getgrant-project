"use client";

import Image from "next/image";
import { Star, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useLanguage } from "@/app/context/LanguageContext";

function openConsultationModal() {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

export default function GetGrantHero() {
    const { t } = useLanguage();

    const stats = [
        { value: "500+", label: t("hero.stat1") },
        { value: "50+", label: t("hero.stat2") },
        { value: "15+", label: t("hero.stat3") },
    ];

    return (
        <section className="relative w-full max-w-[1440px] mx-auto min-h-screen py-10 md:py-14 bg-white text-gray-900 overflow-hidden flex items-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,#eef2ff_0%,#fff_100%)]" />

            <div className="container mx-auto px-6 lg:px-12 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="flex flex-col space-y-8">
                        <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-[#D1E9FF] text-blue-700 border border-blue-100/50 shadow-sm">
                            <Star size={14} className="text-blue-600 fill-blue-600" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                                {t("hero.badge")}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-[40px] sm:text-[60px] md:text-[70px] uppercase font-semibold leading-[1.2] text-gray-950">
                                {t("hero.title1")} <br />
                                <span className="text-blue-600">
                                    {t("hero.title2")} <br />
                                    <span className="inline-block">{t("hero.title3")}</span>
                                </span>
                            </h1>
                            <p className="max-w-md text-lg text-gray-600 font-medium leading-relaxed">
                                {t("hero.desc")}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                onClick={openConsultationModal}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                            >
                                {t("hero.btn.consult")}
                            </Button>
                            <Button
                                variant="outline"
                                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-7 rounded-xl font-bold text-lg transition-all active:scale-95"
                            >
                                {t("hero.btn.start")}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="mt-6 py-8 px-2 md:py-10 md:px-10 bg-[#F8F9FB] rounded-[20px] flex flex-wrap gap-x-6 lg:gap-x-10 gap-y-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col space-y-1">
                                    <span className="text-4xl md:text-4xl font-semibold tracking-tighter text-[#101828]">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-medium text-[#667085] leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="relative w-full aspect-[4/4.5] rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10">
                            <Image
                                src="/image/hero-students.jpg"
                                alt="Students in University"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6
                                            p-4 md:p-6
                                            rounded-[20px] md:rounded-[32px]
                                            bg-[#F8F9FC] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                                            flex items-center gap-3.5 md:gap-5
                                            translate-y-0 group-hover:-translate-y-1 transition-transform duration-500"
                            >
                                <div className="w-11 h-11 md:w-14 md:h-14 bg-[#155EEF] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <GraduationCap className="w-5 h-5 md:w-7 md:h-7 stroke-[2.2]" />
                                </div>

                                {/* Текстовый блок подстраивает шрифты */}
                                <div className="flex flex-col min-w-0">
                                    <span className="text-base md:text-xl font-bold text-[#101828] leading-tight tracking-tight">
                                        {t("hero.manager")}
                                    </span>
                                    <span className="text-[12px] md:text-sm font-bold md:font-semibold text-[#667085] leading-snug mt-0.5 break-words">
                                        {t("hero.manager.desc")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}