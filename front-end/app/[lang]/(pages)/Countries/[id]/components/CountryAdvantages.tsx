"use client";

import { GraduationCap, Briefcase, Lightbulb, Star } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const ICON_MAP: Record<string, React.ReactNode> = {
    graduation: <GraduationCap size={20} className="text-white" />,
    briefcase:  <Briefcase     size={20} className="text-white" />,
    lightbulb:  <Lightbulb    size={20} className="text-white" />,
    star:       <Star          size={20} className="text-white" />,
};

interface Advantage {
    icon: any;
    title: string;
    desc: string;
}

export default function CountryAdvantages({ advantages }: { advantages: Advantage[] }) {
    const { t } = useLanguage();

    return (
        <section className="py-10 sm:py-16">
            {/* Ограничение ширины изменено на max-w-[1440px] */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828] mb-6 sm:mb-8 tracking-tight">
                    {t("country.advantages")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {advantages.map((a, i) => {
                        const iconKey = typeof a.icon === 'string' ? a.icon : 'star';
                        return (
                            <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl border border-[#EAECF0] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-xl bg-[#1570EF] flex items-center justify-center flex-shrink-0 shadow-sm">
                                    {ICON_MAP[iconKey] ?? a.icon ?? <Star size={20} className="text-white" />}
                                </div>
                                <p className="text-sm font-bold text-[#101828] mt-1">{a.title}</p>
                                <p className="text-xs text-[#667085] leading-relaxed">{a.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}