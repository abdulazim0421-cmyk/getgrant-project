"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Clock, BookOpen, Crown } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface ProgramCardProps {
    program: any;
}

const VISIBLE_TAGS = 2;

export default function ProgramCard({ program }: ProgramCardProps) {
    const { t, lang } = useLanguage();

    if (!program) return null;

    const {
        name,
        duration,
        universitiesCount = 12,
        averageSalary = 75000,
        careerPaths = [],
    } = program;

    const finalImageUrl = useMemo(() => {
        if (!program.image) return null;
        if (typeof program.image === "string") return program.image;
        if (typeof program.image === "object" && program.image.url) return program.image.url;
        return null;
    }, [program.image]);

    const visiblePaths = careerPaths.slice(0, VISIBLE_TAGS);
    const hiddenCount = careerPaths.length - VISIBLE_TAGS;

    const getDurationLabel = (count: number) => {
        if (lang === "kg") return t("programCard.year1");
        const mod10 = count % 10;
        const mod100 = count % 100;
        if (mod10 === 1 && mod100 !== 11) return t("programCard.year1");
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return t("programCard.year2");
        return t("programCard.year5");
    };

    const getVuzLabel = (count: number) => {
        if (lang === "kg") return t("programCard.vuz1");
        const mod10 = count % 10;
        const mod100 = count % 100;
        if (mod10 === 1 && mod100 !== 11) return t("programCard.vuz1");
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return t("programCard.vuz2");
        return t("programCard.vuz5");
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
            {/* Изображение */}
            <div className="relative h-44 sm:h-48 w-full bg-slate-50 overflow-hidden shrink-0">
                {finalImageUrl && finalImageUrl.trim() !== "" ? (
                    <Image
                        src={finalImageUrl}
                        alt={name || "Program cover"}
                        fill
                        className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 font-medium bg-slate-50 p-4 text-center">
                        {t("programCard.noImage")}
                    </div>
                )}
                <div className="absolute top-3 left-3 bg-blue-600 text-white p-2 rounded-lg z-10 shadow-md">
                    <Crown size={14} />
                </div>
            </div>

            {/* Контентная часть */}
            <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug min-h-[40px] sm:min-h-[44px] line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>

                    {/* Метрики */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Clock size={13} className="text-gray-400 shrink-0" />
                            {duration} {getDurationLabel(duration)}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={13} className="text-gray-400 shrink-0" />
                            {universitiesCount} {getVuzLabel(universitiesCount)}
                        </span>
                    </div>
                </div>

                {/* Блок зарплаты */}
                <div className="bg-gray-50/70 rounded-xl p-3.5 border border-gray-50 mt-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{t("programCard.averageSalary")}</p>
                    <p className="text-sm sm:text-base font-bold text-gray-800">
                        {lang === "ru"
                            ? `$${averageSalary.toLocaleString("en-US")}/год`
                            : `$${averageSalary.toLocaleString("en-US")}/жыл`
                        }
                    </p>
                </div>

                {/* Теги карьерного пути */}
                {careerPaths.length > 0 && (
                    <div className="mt-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t("programCard.careerPaths")}</p>
                        <div className="flex flex-wrap gap-1.5">
                            {visiblePaths.map((path: string) => (
                                <span
                                    key={path}
                                    className="border border-gray-150 rounded-lg px-2.5 py-1 text-xs text-blue-600 bg-blue-50/30 font-medium whitespace-nowrap"
                                >
                                    {path}
                                </span>
                            ))}
                            {hiddenCount > 0 && (
                                <span className="border border-gray-150 rounded-lg px-2 py-1 text-xs text-gray-500 bg-gray-50 font-medium">
                                    +{hiddenCount}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}