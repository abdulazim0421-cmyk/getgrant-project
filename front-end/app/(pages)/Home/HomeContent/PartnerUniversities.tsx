"use client";

import { useState } from "react";
import { BookOpen, Users, MapPin } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";

// ─── Типы ────────────────────────────────────────────────────────────────────

interface University {
  id: number;
  name: string;
  programs: string;
  students: string;
  location: string;
  image: string;
  href: string;
}

// ─── Данные ──────────────────────────────────────────────────────────────────

const universities: University[] = [
  { id: 1,  name: "Harvard University",                 programs: "120 программ", students: "23 000", location: "Cambridge, MA, США",       image: "/image/HomeContent/PartnerUniversities/Frame 53 (3).png",            href: "https://ru.wikipedia.org/wiki/Гарвардский_университет" },
  { id: 2,  name: "Stanford University",                programs: "150 программ", students: "22 000", location: "Stanford, CA, США",         image: "/image/HomeContent/PartnerUniversities/Frame 53 (4).png",            href: "https://ru.wikipedia.org/wiki/Стэнфордский_университет" },
  { id: 3,  name: "MIT",                                programs: "120 программ", students: "11 000", location: "Cambridge, MA, США",       image: "/image/HomeContent/PartnerUniversities/Frame 53 (5).png",            href: "https://ru.wikipedia.org/wiki/Массачусетский_технологический_институт" },
  { id: 4,  name: "University of California, Berkeley", programs: "140 программ", students: "30 000", location: "Berkeley, CA, США",        image: "/image/HomeContent/PartnerUniversities/Frame 53 (6).png",            href: "https://ru.wikipedia.org/wiki/Калифорнийский_университет_в_Беркли" },
  { id: 5,  name: "Princeton University",               programs: "90 программ",  students: "8 000",  location: "Princeton, NJ, США",       image: "/image/HomeContent/PartnerUniversities/Princeton University.webp",   href: "https://ru.wikipedia.org/wiki/Принстонский_университет" },
  { id: 6,  name: "Oxford University",                  programs: "150 программ", students: "24 000", location: "Oxford, Великобритания",    image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",     href: "https://ru.wikipedia.org/wiki/Оксфордский_университет" },
  { id: 7,  name: "Cambridge University",               programs: "180 программ", students: "21 000", location: "Cambridge, Великобритания", image: "/image/HomeContent/PartnerUniversities/Cambridge University.jpg",   href: "https://ru.wikipedia.org/wiki/Кембриджский_университет" },
  { id: 8,  name: "ETH Zurich",                         programs: "95 программ",  students: "22 000", location: "Цюрих, Швейцария",          image: "/image/HomeContent/PartnerUniversities/ETH Zurich.jpg",             href: "https://ru.wikipedia.org/wiki/Швейцарская_высшая_техническая_школа_Цюриха" },
  { id: 9,  name: "University of Toronto",              programs: "130 программ", students: "97 000", location: "Торонто, Канада",           image: "/image/HomeContent/PartnerUniversities/University of Toronto.jpg",  href: "https://ru.wikipedia.org/wiki/Университет_Торонто" },
  { id: 10, name: "University of Melbourne",            programs: "100 программ", students: "52 000", location: "Мельбурн, Австралия",       image: "/image/HomeContent/PartnerUniversities/University of Melbourne.jpg", href: "https://ru.wikipedia.org/wiki/Мельбурнский_университет" },
];

// ─── Карточка ─────────────────────────────────────────────────────────────────

function UniversityCard({ university }: { university: University }) {
  return (
    <div
      className="group flex flex-col w-[300px] p-[10px] pb-[20px] gap-[10px] rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      onClick={() => window.open(university.href, '_blank')}
    >
      {/* Фото */}
      <div className="relative w-full h-[160px] rounded-xl overflow-hidden bg-slate-200">
        {university.image ? (
          <Image src={university.image} alt={university.name} fill className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-110" sizes="300px" />
        ) : (
          <div className="w-full h-full bg-slate-200" />
        )}
      </div>

      {/* Контент */}
      <div className="flex flex-col gap-y-[8px]">
        {/* Название */}
        <p className="text-sm font-bold text-[#101828] leading-tight line-clamp-2">{university.name}</p>

        {/* Программы и студенты */}
        <div className="flex items-center gap-3 text-xs text-[#344054]">
          <span className="flex items-center gap-1">
            <BookOpen size={13} className="text-[#1570EF]" />
            {university.programs}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} className="text-[#1570EF]" />
            {university.students}
          </span>
        </div>

        {/* Местоположение — кликабельная ссылка на Google Maps */}
        <div className="flex items-center gap-1 text-xs text-[#1D2939]">
          <MapPin size={12} className="text-[#1D2939] flex-shrink-0" />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(university.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:text-blue-500 transition-colors cursor-pointer"
          >
            {university.location}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Секция ───────────────────────────────────────────────────────────────────

export default function PartnerUniversities() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

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

      <Swiper
        modules={[Navigation, Mousewheel]}
        onSwiper={setSwiperInstance}
        loop={true}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        slidesPerView="auto"
        spaceBetween={20}
        grabCursor={true}
        className="!px-6 lg:!px-12 !pb-4"
      >
        {universities.map((u) => (
          <SwiperSlide key={u.id} style={{ width: "auto" }}>
            <UniversityCard university={u} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
