"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export interface Country {
    id: number;
    name: string;
    nameEn: string;
    flag: string;
    flagImage: string | null;
    description: string;
    image: string | null;
    href: string;
}

export default function CountryCard({ country }: { country: Country }) {
    const { t } = useLanguage();

    return (
        <div className="group flex flex-col w-full sm:max-w-[305px] mx-auto p-2.5 pb-5 gap-3 rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            {/* Контейнер изображения с фиксированным соотношением сторон на мобилках */}
            <div className="relative w-full h-[200px] sm:h-[180px] rounded-xl overflow-hidden bg-slate-100 shrink-0">
                {country.image ? (
                    <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 305px"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full bg-slate-200 animate-pulse" />
                )}
            </div>

            {/* Блок с названием и флагом */}
            <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl p-3 border border-[#F2F4F7]">
                {country.flagImage ? (
                    <div className="relative w-6 h-4 flex-shrink-0 rounded-[2px] overflow-hidden shadow-sm">
                        <Image src={country.flagImage} alt={`Флаг ${country.name}`} fill className="object-cover" sizes="24px" unoptimized />
                    </div>
                ) : (
                    <span className="text-xl leading-none shrink-0">{country.flag}</span>
                )}
                <div className="min-w-0">
                    <p className="text-sm font-bold text-[#101828] leading-tight truncate">{country.name}</p>
                    <p className="text-xs text-[#667085] leading-tight truncate mt-0.5">{country.nameEn}</p>
                </div>
            </div>

            {/* Описание страны */}
            <p className="text-xs text-[#344054] leading-relaxed px-1 flex-1 line-clamp-3 sm:line-clamp-4">
                {country.description}
            </p>

            {/* Кнопка перехода */}
            <Link
                href={country.href}
                className="mt-auto mx-1 flex items-center justify-center h-10 rounded-xl border border-[#1570EF] text-[#1570EF] text-xs font-semibold bg-transparent hover:bg-[#1570EF] hover:text-white transition-all duration-200 active:scale-[0.99]"
            >
                {t("countries.btn")}
            </Link>
        </div>
    );
}