"use client";

import { useState } from "react";
import { Check, Building2, Users } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";
import { useLanguage } from "@/app/context/LanguageContext";

interface PopularCountriesProps {
    countries: any[];
}

function CountryCard({ country }: { country: any }) {
    if (!country) return null;

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    const bgImageUrl = country.image?.url ? `${STRAPI_URL}${country.image.url}` : null;
    const flagUrl = country.flag?.url ? `${STRAPI_URL}${country.flag.url}` : null;
    const benefits = country.advantages
        ? country.advantages.split("\n").map((b: string) => b.trim()).filter(Boolean)
        : [];

    return (
        <div className="group flex flex-col w-[300px] p-[10px] pb-[20px] gap-[10px] rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="relative w-full h-[160px] rounded-xl overflow-hidden bg-slate-200">
                {bgImageUrl ? (
                    <Image src={bgImageUrl} alt={country.nameRu || "Country"} fill className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-110" sizes="300px" unoptimized />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-gray-400 text-xs">Нет фото</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-[#101828]/90 rounded-lg px-3 py-2 z-10">
                    {flagUrl && (
                        <div className="relative w-5 h-3.5 flex-shrink-0 rounded-[2px] overflow-hidden">
                            <Image src={flagUrl} alt={`Флаг ${country.nameRu}`} fill className="object-cover" sizes="20px" unoptimized />
                        </div>
                    )}
                    <div>
                        <p className="text-white text-xs font-bold leading-tight">{country.nameRu || "Страна"}</p>
                        <p className="text-white/50 text-[10px] leading-tight">{country.nameEn || ""}</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-3 flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#101828]"><Building2 size={14} className="text-[#1570EF]" />{country.universitiesCount || "0+"}</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#101828]"><Users size={14} className="text-[#1570EF]" />{country.studentsCount || "0+"}</span>
            </div>
            {benefits.length > 0 && (
                <ul className="flex flex-col gap-y-[12px] mt-1">
                    {benefits.map((benefit: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#344054]">
                            <Check size={14} className="text-blue-500 mt-0.5 flex-shrink-0 w-4 h-4" />
                            <span className="leading-tight">{benefit}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export function PopularCountriesRaw({ countries = [] }: PopularCountriesProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const { t } = useLanguage();

    if (!countries || countries.length === 0) {
        return <div className="py-12 text-center text-gray-400">Загрузка стран...</div>;
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <SectionHeader
                    title={t("section.countries")}
                    subtitle={t("section.countries.sub")}
                    onPrev={() => swiperInstance?.slidePrev()}
                    onNext={() => swiperInstance?.slideNext()}
                />
            </div>
            <Swiper modules={[Navigation, Mousewheel]} onSwiper={setSwiperInstance} loop={countries.length > 3} mousewheel={{ forceToAxis: true, sensitivity: 1 }} slidesPerView="auto" spaceBetween={20} grabCursor={true} className="!px-6 lg:!px-12 !pb-4">
                {countries.map((country) => (<SwiperSlide key={country.id} style={{ width: "auto" }}><CountryCard country={country} /></SwiperSlide>))}
            </Swiper>
        </section>
    );
}