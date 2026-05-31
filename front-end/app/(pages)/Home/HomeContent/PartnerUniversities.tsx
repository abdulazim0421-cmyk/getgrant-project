"use client";

import { useState, useEffect } from "react";
import { BookOpen, Users, MapPin } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";

interface PartnerUniversitiesProps {
    partnerUniversities: any[];
}

function UniversityCard({ university }: { university: any }) {
    if (!university) return null;

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    const imageUrl = university.image?.url
        ? `${STRAPI_URL}${university.image.url}`
        : null;

    return (
        <div className="group flex flex-col w-[300px] p-[10px] pb-[20px] gap-[10px] rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">

            {/* Фото */}
            <div className="relative w-full h-[160px] rounded-xl overflow-hidden bg-slate-200">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={university.name || "University image"}
                        fill
                        className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="300px"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-gray-400 text-xs">
                        Нет фото кампуса
                    </div>
                )}
            </div>

            {/* Контент */}
            <div className="flex flex-col gap-y-[8px]">
                <p className="text-sm font-bold text-[#101828] leading-tight line-clamp-2 min-h-[40px]">
                    {university.name}
                </p>

                <div className="flex items-center gap-3 text-xs text-[#344054]">
                    <span className="flex items-center gap-1">
                        <BookOpen size={13} className="text-[#1570EF]" />
                        {university.programsCount || "0 программ"}
                    </span>
                    <span className="flex items-center gap-1">
                        <Users size={13} className="text-[#1570EF]" />
                        {university.studentsCount || "0"}
                    </span>
                </div>

                {university.location && (
                    <div className="flex items-center gap-1 text-xs text-[#1D2939]">
                        <MapPin size={12} className="text-[#1D2939] flex-shrink-0" />
                        {/* ИСПРАВЛЕНО: Добавлен корректный тег <a> и шаблонная строка `` */}
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(university.location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors cursor-pointer line-clamp-1"
                        >
                            {university.location}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

// Экспортируем как именованную функцию для безопасного dynamic-импорта
export function PartnerUniversitiesRaw({ partnerUniversities = [] }: PartnerUniversitiesProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!partnerUniversities || partnerUniversities.length === 0) {
        return <div className="py-12 text-center text-gray-400">Загрузка университетов...</div>;
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <SectionHeader
                    title="Университеты-партнёры"
                    subtitle="Мы работаем с ведущими университетами мира"
                    onPrev={() => swiperInstance?.slidePrev()}
                    onNext={() => swiperInstance?.slideNext()}
                />
            </div>

            {isMounted ? (
                <Swiper
                    modules={[Navigation, Mousewheel]}
                    onSwiper={setSwiperInstance}
                    loop={partnerUniversities.length > 3}
                    mousewheel={{ forceToAxis: true, sensitivity: 1 }}
                    slidesPerView="auto"
                    spaceBetween={20}
                    grabCursor={true}
                    className="!px-6 lg:!px-12 !pb-4"
                >
                    {partnerUniversities.map((uni) => (
                        <SwiperSlide key={uni.id} style={{ width: "auto" }}>
                            <UniversityCard university={uni} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                // Статичная заглушка для SSR
                <div className="flex gap-5 overflow-hidden px-6 lg:px-12 !pb-4">
                    {partnerUniversities.slice(0, 4).map((uni) => (
                        <div key={uni.id} style={{ width: "auto" }}>
                            <UniversityCard university={uni} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}