"use client";

import { useState, useEffect } from "react";
import { Clock, TrendingUp, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";
import { useLanguage } from "@/app/context/LanguageContext";

interface PopularProgramsProps {
    majors: any[];
}

function ProgramCard({ program }: { program: any }) {
    if (!program) return null;
    const attr = program.attributes ? program.attributes : program;
    if (!attr) return null;

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    const imageObj = attr.image?.data?.attributes || attr.image;
    let imageUrl = null;
    if (imageObj?.url) {
        imageUrl = imageObj.url.startsWith("http")
            ? imageObj.url
            : `${STRAPI_URL}${imageObj.url}`;
    }

    // В Strapi у вас массив careerPaths вместо строки tags
    const tagsArray = Array.isArray(attr.careerPaths)
        ? attr.careerPaths
        : [];

    return (
        <Link
            href={attr.href || "#/"}
            target={attr.href ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group flex flex-col w-[300px] p-[10px] pb-[20px] gap-[10px] rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
        >
            <div className="relative w-full h-[160px] rounded-xl overflow-hidden bg-slate-200">
                {imageUrl ? (
                    <Image src={imageUrl} alt={attr.name || "Program image"} fill className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-110" sizes="300px" unoptimized />
                ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-gray-400 text-xs">Нет изображения</div>
                )}
                {attr.isPremium && (
                    <div className="absolute top-3 left-3 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center z-10">
                        <Crown size={18} stroke="white" strokeWidth={2} />
                    </div>
                )}
            </div>
            {tagsArray.length > 0 && (
                <div className="flex flex-wrap gap-1">
                    {tagsArray.map((tag: string) => (
                        <span key={tag} className="text-[10px] font-medium text-blue-600 border border-slate-200 bg-transparent px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
            )}
            {/* Меняем attr.title на attr.name */}
            <p className="text-sm font-bold text-gray-900 leading-tight min-h-[40px] line-clamp-2">{attr.name || "Название программы"}</p>
            <div className="flex items-center gap-3 text-xs mt-auto">
                <span className="flex items-center gap-1 text-slate-900"><Clock size={12} className="text-blue-600" />{attr.duration || "—"}</span>
                {/* Меняем attr.salary на attr.averageSalary */}
                <span className="flex items-center gap-1 font-bold text-slate-900"><TrendingUp size={12} className="text-blue-600" />{attr.averageSalary || "—"}</span>
            </div>
        </Link>
    );
}

export function PopularProgramsRaw({ majors = [] }: PopularProgramsProps) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const { t } = useLanguage();

    useEffect(() => { setIsMounted(true); }, []);

    if (!majors || majors.length === 0) {
        return <div className="py-12 text-center text-gray-400">Загрузка программ...</div>;
    }

    return (
        // Добавлены классы max-w-[1440px] и mx-auto для ограничения ширины и центрирования
        <section className="py-12 max-w-[1440px] mx-auto">
            <div className="container mx-auto px-6 lg:px-12">
                <SectionHeader
                    title={t("section.programs")}
                    subtitle={t("section.programs.sub")}
                    onPrev={() => swiperInstance?.slidePrev()}
                    onNext={() => swiperInstance?.slideNext()}
                />

                {isMounted ? (
                    <Swiper
                        modules={[Navigation, Mousewheel]}
                        onSwiper={setSwiperInstance}
                        loop={majors.length > 3}
                        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
                        slidesPerView="auto"
                        spaceBetween={20}
                        grabCursor={true}
                        className="!pb-4"
                    >
                        {majors.map((p) => (
                            <SwiperSlide key={p.id} style={{ width: "auto" }}>
                                <ProgramCard program={p} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="flex gap-5 overflow-hidden !pb-4">
                        {majors.slice(0, 4).map((p) => (
                            <div key={p.id} style={{ width: "auto" }}>
                                <ProgramCard program={p} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}