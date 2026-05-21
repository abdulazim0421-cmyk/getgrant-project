"use client";

import { useState } from "react";
import TeacherCard, { type Teacher } from "./TeacherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";

const teachers: Teacher[] = [
  { id: 1, name: "Elena Smith",   subject: "TOEFL & IELTS",      rate: "$50/час", exp: "8 лет",  cert: "Cambridge CELTA", avatar: "/image/OnlinePrep/Elena Smith.png"},
  { id: 2, name: "John Doe",      subject: "Cambridge English",   rate: "$45/час", exp: "5 лет",  cert: "Cambridge CELTA", avatar: "/image/OnlinePrep/John Doe.png"},
  { id: 3, name: "Maria Johnson", subject: "SAT & ACT Prep",      rate: "$60/час", exp: "10 лет", cert: "Certified Tutor", avatar: "/image/OnlinePrep/Maria Johnson.png"},
  { id: 4, name: "Alex Brown",    subject: "GRE & GMAT Coaching", rate: "$55/час", exp: "7 лет",  cert: "MBA Graduate", avatar: "/image/OnlinePrep/Alex Brown.png"},
  { id: 5, name: "David Wilson",  subject: "Business English",    rate: "$52/час", exp: "9 лет",  cert: "Business English Cert", avatar: "/image/OnlinePrep/David.jpg"},
  { id: 6, name: "Sarah Miller",  subject: "General English",     rate: "$40/час", exp: "4 года", cert: "TEFL Certified", avatar: "/image/OnlinePrep/Sarash.jpg"},
  { id: 7, name: "Robert Taylor", subject: "PTE Academic",        rate: "$58/час", exp: "11 лет", cert: "PTE Specialist", avatar: "/image/OnlinePrep/Robert.jpg"},
  { id: 8, name: "Linda Davis",   subject: "Conversational English", rate: "$48/час", exp: "6 лет", cert: "CELTA", avatar: "/image/OnlinePrep/linda.jpg"},
];

export default function TeachersSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="mb-14">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Наши преподаватели"
          subtitle="Профессиональные преподаватели для успешного поступления"
          onPrev={() => swiperInstance?.slidePrev()}
          onNext={() => swiperInstance?.slideNext()}
        />
      </div>

      <Swiper
        modules={[Navigation, Mousewheel]}
        onSwiper={setSwiperInstance}
        loop={true}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        slidesPerView="auto"
        spaceBetween={20}
        grabCursor={true}
        className="!px-6 lg:!px-12 !pb-4"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {teachers.map((teacher) => (
          <SwiperSlide key={teacher.id} style={{ width: "auto" }}>
            <TeacherCard teacher={teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
