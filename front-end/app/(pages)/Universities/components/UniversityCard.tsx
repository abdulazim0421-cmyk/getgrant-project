"use client";

import Image from "next/image";
import { BookOpen, Users, MapPin, Crown } from "lucide-react";

export default function UniversityCard({ university }: { university: any }) {
    if (!university) return null;

    // Собираем красивую строку адреса из твоего объекта location
    const fullLocationString = [
        university.location?.city,
        university.location?.state,
        university.location?.country
    ].filter(Boolean).join(", ");

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            {/* Картинка */}
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                {university.image && university.image.trim() !== "" ? (
                    <Image
                        src={university.image}
                        alt={university.name}
                        fill
                        className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 bg-slate-50">
                        Нет фото кампуса
                    </div>
                )}

                <div className="absolute top-3 left-3 bg-blue-600 text-white p-1.5 rounded-md z-10 shadow-sm">
                    <Crown size={14} />
                </div>
            </div>

            {/* Контент */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-tight min-h-[44px] line-clamp-2">
                    {university.name}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        <BookOpen size={13} className="text-gray-400" />
                        {university.programsCount} программ
                    </span>
                    <span className="flex items-center gap-1">
                        <Users size={13} className="text-gray-400" />
                        {university.studentsCount} студентов
                    </span>
                </div>

                {fullLocationString && (
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                        <MapPin size={13} className="text-gray-400 shrink-0" />
                        <span className="line-clamp-1">{fullLocationString}</span>
                    </div>
                )}

                {/* Параметры */}
                <div className="bg-gray-50 rounded-lg p-3 grid grid-cols-2 gap-2 mt-2">
                    <div>
                        <p className="text-[10px] text-gray-400">Стоимость</p>
                        <p className="text-xs font-bold text-gray-800">
                            ${university.cost.toLocaleString("en-US")}/год
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400">Программы</p>
                        <p className="text-xs font-bold text-gray-800">{university.programsCount}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400">Процент поступления</p>
                        <p className="text-xs font-bold text-gray-800">{university.acceptanceRate}%</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400">Тип</p>
                        <p className="text-xs font-bold text-gray-800">{university.type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}