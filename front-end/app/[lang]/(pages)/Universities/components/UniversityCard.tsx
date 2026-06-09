"use client";

import Image from "next/image";
import { BookOpen, Users, MapPin, Crown } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function UniversityCard({ university }: { university: any }) {
    if (!university) return null;
    const { t } = useLanguage();

    const fullLocationString = [university.location?.city, university.location?.state, university.location?.country].filter(Boolean).join(", ");

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full">
            {/* Картинка / Превью */}
            <div className="relative h-44 sm:h-48 w-full bg-slate-50 overflow-hidden shrink-0">
                {university.image && university.image.trim() !== "" ? (
                    <Image
                        src={university.image}
                        alt={university.name}
                        fill
                        className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 font-medium px-4 text-center">
                        {t("uni.nophoto")}
                    </div>
                )}
                <div className="absolute top-3 left-3 bg-blue-600 text-white p-2 rounded-lg z-10 shadow-md">
                    <Crown size={14} />
                </div>
            </div>

            {/* Контент карточки */}
            <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-2.5">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug min-h-[40px] sm:min-h-[44px] line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {university.name}
                    </h3>

                    {/* Метрики */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={13} className="text-gray-400 shrink-0" />
                            {university.programsCount} {t("uni.programs")}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Users size={13} className="text-gray-400 shrink-0" />
                            {university.studentsCount} {t("uni.students")}
                        </span>
                    </div>

                    {/* Локация */}
                    {fullLocationString && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-0.5">
                            <MapPin size={13} className="text-gray-400 shrink-0" />
                            <span className="line-clamp-1">{fullLocationString}</span>
                        </div>
                    )}
                </div>

                {/* Сетка параметров (2х2) */}
                <div className="bg-gray-50/70 rounded-xl p-3 grid grid-cols-2 gap-x-3 gap-y-2.5 mt-2 border border-gray-50">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t("uni.cost")}</p>
                        <p className="text-xs font-bold text-gray-800 mt-0.5">${university.cost.toLocaleString("en-US")}/г</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t("uni.programs")}</p>
                        <p className="text-xs font-bold text-gray-800 mt-0.5">{university.programsCount}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t("uni.acceptance")}</p>
                        <p className="text-xs font-bold text-gray-800 mt-0.5">{university.acceptanceRate}%</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t("uni.type")}</p>
                        <p className="text-xs font-bold text-gray-800 mt-0.5 line-clamp-1">{university.type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}