"use client";

import { useState } from "react";
import TeacherCard, { type Teacher } from "./TeacherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TeachersSwiper({ teachers }: { teachers: Teacher[] }) {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const { t } = useLanguage();

    return (
        <section className="mb-10 md:mb-14 overflow-hidden max-w-[1440px] mx-auto">
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <SectionHeader
                    title={t("online.teachers.title")}
                    subtitle={t("online.teachers.subtitle")}
                    onPrev={() => swiperInstance?.slidePrev()}
                    onNext={() => swiperInstance?.slideNext()}
                />
            </div>

            <div className="mt-6">
                <Swiper
                    modules={[Navigation, Mousewheel]}
                    onSwiper={setSwiperInstance}
                    loop={true}
                    mousewheel={{ forceToAxis: true, sensitivity: 1 }}
                    grabCursor={true}
                    className="!px-4 sm:!px-6 lg:!px-12 !pb-4"
                    breakpoints={{
                        320: { slidesPerView: 1.2, spaceBetween: 16 },
                        480: { slidesPerView: 1.6, spaceBetween: 16 },
                        768: { slidesPerView: 2.3, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                >
                    {teachers.map((teacher) => (
                        <SwiperSlide key={teacher.id} className="h-auto">
                            <TeacherCard teacher={teacher} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}