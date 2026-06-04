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

    // Хелпер для правильного склонения слов (например: 1 год, 4 года, 5 лет)
    const getDurationLabel = (count: number) => {
        if (lang === "ky") return t("programCard.year1"); // В кыргызском всегда "жыл"

        // Русская логика склонения
        const mod10 = count % 10;
        const mod100 = count % 100;
        if (mod10 === 1 && mod100 !== 11) return t("programCard.year1");
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return t("programCard.year2");
        return t("programCard.year5");
    };

    const getVuzLabel = (count: number) => {
        if (lang === "ky") return t("programCard.vuz1"); // В кыргызском всегда "ЖОГ"

        // Русская логика склонения
        const mod10 = count % 10;
        const mod100 = count % 100;
        if (mod10 === 1 && mod100 !== 11) return t("programCard.vuz1");
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return t("programCard.vuz2");
        return t("programCard.vuz5");
    };

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Image */}
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                {finalImageUrl && finalImageUrl.trim() !== "" ? (
                    <Image
                        src={finalImageUrl}
                        alt={name || "Program cover"}
                        fill
                        className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 bg-slate-100 p-4 text-center">
                        {t("programCard.noImage")}
                    </div>
                )}

                <div className="absolute top-3 left-3 bg-blue-600 text-white p-1.5 rounded-md z-10 shadow-sm">
                    <Crown size={14} />
                </div>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base leading-tight min-h-[44px] line-clamp-2">
                    {name}
                </h3>

                {/* Stats row */}
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock size={13} className="text-gray-400" />
                        {duration} {getDurationLabel(duration)}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <BookOpen size={13} className="text-gray-400" />
                        {universitiesCount} {getVuzLabel(universitiesCount)}
                    </span>
                </div>

                {/* Salary block */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-[11px] text-gray-400 mb-1">{t("programCard.averageSalary")}</p>
                    <p className="text-base font-bold text-gray-800">
                        {lang === "ru"
                            ? `$${averageSalary.toLocaleString("en-US")}/год`
                            : `$${averageSalary.toLocaleString("en-US")}/жыл`
                        }
                    </p>
                </div>

                {/* Career paths */}
                {careerPaths.length > 0 && (
                    <div className="mt-auto">
                        <p className="text-[11px] text-gray-400 mb-2">{t("programCard.careerPaths")}</p>
                        <div className="flex flex-wrap gap-2">
                            {visiblePaths.map((path: string) => (
                                <span
                                    key={path}
                                    className="border border-gray-200 rounded-full px-3 py-1 text-xs text-blue-600 bg-white whitespace-nowrap"
                                >
                                    {path}
                                </span>
                            ))}
                            {hiddenCount > 0 && (
                                <span className="border border-gray-200 rounded-full px-3 py-1 text-xs text-blue-600 bg-white">
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