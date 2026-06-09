"use client";

import Image from "next/image";
import { BookOpen, Users, MapPin } from "lucide-react";
import type { University } from "./types";
import { useLanguage } from "@/app/context/LanguageContext";

interface CountryUniversitiesProps {
    universities: University[];
}

function UniversityCard({ u }: { u: University }) {
    const { t } = useLanguage();

    return (
        <div
            className="group flex flex-col w-full p-2.5 pb-5 gap-3 rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
            onClick={() => window.open(u.href, "_blank")}
        >
            <div className="relative w-full h-[180px] sm:h-[160px] rounded-xl overflow-hidden bg-slate-100 shrink-0">
                {u.image ? (
                    <Image src={u.image} alt={u.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 300px" unoptimized />
                ) : (
                    <div className="w-full h-full bg-slate-50 flex items-center justify-center text-[#667085] text-xs">
                        {t("uni.nophoto") || "Нет фото"}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2 px-1 flex-grow">
                <p className="text-sm font-bold text-[#101828] leading-snug line-clamp-2 min-h-[40px]">{u.name}</p>
                <div className="flex items-center gap-4 text-xs text-[#344054] mt-auto">
                    <span className="flex items-center gap-1.5"><BookOpen size={14} className="text-[#1570EF]" />{u.programs}</span>
                    <span className="flex items-center gap-1.5"><Users size={14} className="text-[#1570EF]" />{u.students}</span>
                </div>
                <div className="flex items-start gap-1 text-xs text-[#1D2939] border-t border-slate-100 pt-2 mt-1">
                    <MapPin size={14} className="text-[#475467] flex-shrink-0 mt-0.5" />
                    <span className="text-[#475467] truncate">{u.location}</span>
                </div>
            </div>
        </div>
    );
}

export default function CountryUniversities({ universities }: CountryUniversitiesProps) {
    const { t } = useLanguage();

    return (
        <section className="py-10 sm:py-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#101828] tracking-tight">{t("country.universities")}</h2>
                    <a href="/Universities" className="inline-flex justify-center items-center px-5 py-2.5 rounded-xl bg-[#1570EF] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D4ED8] transition-colors active:scale-98">
                        {t("country.universities.all")}
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {universities.map((u) => (<UniversityCard key={u.id} u={u} />))}
                </div>
            </div>
        </section>
    );
}