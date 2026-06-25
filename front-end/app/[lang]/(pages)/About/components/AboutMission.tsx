"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutMission() {
    const { t } = useLanguage();

    const checkItems = [
        t("about.mission.check1"),
        t("about.mission.check2"),
        t("about.mission.check3"),
        t("about.mission.check4"),
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                            {t("about.mission.title")}
                        </h2>
                        <div className="text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
                            <p>{t("about.mission.p1")}</p>
                            <p>{t("about.mission.p2")}</p>
                        </div>
                        <div className="bg-blue-50/50 rounded-2xl p-4 sm:p-6 flex flex-col gap-3 mt-2">
                            {checkItems.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[420px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-sm">
                        <Image
                            src="/image/hero-students.jpg"
                            alt="Команда GetGrant"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}