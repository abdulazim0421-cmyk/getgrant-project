"use client";

import Image from "next/image";
import { Clock, BookOpen, Crown } from "lucide-react";
import type { Program } from "../data/mockPrograms";

interface ProgramCardProps {
    program: any; // Меняем на any, так как структура из Strapi шире, чем у mock-данных
}

const VISIBLE_TAGS = 2;

export default function ProgramCard({ program }: ProgramCardProps) {
    if (!program) return null;

    // Безопасно деструктуризируем основные свойства
    const {
        name,
        duration,
        universitiesCount = 12,
        averageSalary = 75000,
        careerPaths = ["Разработчик", "Аналитик", "Тестировщик"],
    } = program;

    // ИСПРАВЛЕНО: Универсальное извлечение чистой строки URL картинки
    const finalImageUrl = useMemo(() => {
        if (!program.image) return null;
        if (typeof program.image === "string") return program.image;
        if (typeof program.image === "object" && program.image.url) return program.image.url;
        return null;
    }, [program.image]);

    const visiblePaths = careerPaths.slice(0, VISIBLE_TAGS);
    const hiddenCount = careerPaths.length - VISIBLE_TAGS;

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Image */}
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                {/* ИСПРАВЛЕНО: Проверяем именно наличие строки URL, отсекая пустые строки */}
                {finalImageUrl && finalImageUrl.trim() !== "" ? (
                    <Image
                        src={finalImageUrl}
                        alt={name || "Program cover"}
                        fill
                        className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized // Убирает конфликты оптимизации на внешних доменах Strapi
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 bg-slate-100">
                        Нет изображения программы
                    </div>
                )}

                {/* ИСПРАВЛЕНО: Добавлен z-10, чтобы бейдж не перекрывался картинкой */}
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
                        {duration} {duration === 1 ? 'год' : duration > 1 && duration < 5 ? 'года' : 'лет'}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <BookOpen size={13} className="text-gray-400" />
                        {universitiesCount} ВУЗов
                    </span>
                </div>

                {/* Salary block */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-[11px] text-gray-400 mb-1">Средняя зарплата</p>
                    <p className="text-base font-bold text-gray-800">
                        ${averageSalary.toLocaleString("en-US")}/год
                    </p>
                </div>

                {/* Career paths */}
                <div className="mt-auto">
                    <p className="text-[11px] text-gray-400 mb-2">Карьерные пути:</p>
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
            </div>
        </div>
    );
}

// Вспомогательный хук useMemo, добавьте его импорт сверху, если React не импортирован целиком:
import { useMemo } from "react";