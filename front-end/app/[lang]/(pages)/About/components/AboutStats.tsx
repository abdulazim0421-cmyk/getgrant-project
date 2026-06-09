"use client";

import { GraduationCap, TrendingUp, Globe, Building2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface AboutStatsProps {
    strapiStats: { studentsCount?: string; universitiesCount?: string; countriesCount?: string; successRate?: string; } | null;
}

export default function AboutStats({ strapiStats }: AboutStatsProps) {
    const { t } = useLanguage();

    const stats = [
        { icon: <GraduationCap size={20} className="text-white" />, value: strapiStats?.studentsCount    || "500+", label: t("about.stats.students")     },
        { icon: <Building2     size={20} className="text-white" />, value: strapiStats?.universitiesCount || "50+",  label: t("about.stats.universities") },
        { icon: <Globe         size={20} className="text-white" />, value: strapiStats?.countriesCount    || "15+",  label: t("about.stats.countries")    },
        { icon: <TrendingUp    size={20} className="text-white" />, value: strapiStats?.successRate       || "95%",  label: t("about.stats.success")      },
    ];

    return (
        <section className="bg-slate-900 py-10 sm:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-2 sm:gap-3">
                            <div className="bg-white/10 p-2.5 sm:p-3 rounded-xl shrink-0">{s.icon}</div>
                            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{s.value}</p>
                            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}