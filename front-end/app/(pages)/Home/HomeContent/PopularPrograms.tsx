"use client";

import { useState } from "react";
import { Clock, TrendingUp, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "@/app/components/SectionHeader";

// ─── Типы ────────────────────────────────────────────────────────────────────

interface Program {
  id: number;
  tags: string[];
  title: string;
  duration: string;
  salary: string;
  image: string;
  href: string;
}

// ─── Данные ──────────────────────────────────────────────────────────────────

const programs: Program[] = [
  {
    id: 1,
    title: "Computer Science",
    tags: ["Software Engineer", "Data Scientist"],
    image: "/image/HomeContent/PopularPrograms/Rectangle 1.png",
    duration: "4 года", salary: "$85,000",
    href: "https://ru.wikipedia.org/wiki/Информатика",
  },
  {
    id: 2,
    title: "Web Developer",
    tags: ["Product Manager", "UX Designer"],
    image: "/image/HomeContent/PopularPrograms/Rectangle 1 (5).png",
    duration: "3 года", salary: "$90,000",
    href: "https://ru.wikipedia.org/wiki/Веб-разработка",
  },
  {
    id: 3,
    title: "System Administrator",
    tags: ["DevOps Engineer", "Business Analyst"],
    image: "/image/HomeContent/PopularPrograms/Rectangle 1 (6).png",
    duration: "5 лет", salary: "$95,000",
    href: "https://ru.wikipedia.org/wiki/Системный_администратор",
  },
  {
    id: 4,
    title: "Mobile Developer",
    tags: ["Frontend Developer", "Data Analyst"],
    image: "/image/HomeContent/PopularPrograms/Frame 53 (2).png",
    duration: "2 года", salary: "$75,000",
    href: "https://ru.wikipedia.org/wiki/Мобильная_разработка",
  },
  {
    id: 5,
    title: "Backend Developer",
    tags: ["Backend Architecture", "API Design"],
    image: "/image/HomeContent/PopularPrograms/Backend.jpg",
    duration: "4 года", salary: "$80,000",
    href: "https://ru.wikipedia.org/wiki/Бэкенд",
  },
  {
    id: 6,
    title: "Game Developer",
    tags: ["Game Design", "C++"],
    image: "/image/HomeContent/PopularPrograms/Robotics Engineer.webp",
    duration: "4 года", salary: "$90,000",
    href: "https://ru.wikipedia.org/wiki/Разработка_компьютерных_игр",
  },
  {
    id: 7,
    title: "Cybersecurity",
    tags: ["Network Security", "Ethical Hacking"],
    image: "/image/HomeContent/PopularPrograms/Cybersecurity.webp",
    duration: "4 года", salary: "$95,000",
    href: "https://ru.wikipedia.org/wiki/Информационная_безопасность",
  },
  {
    id: 8,
    title: "Artificial Intelligence",
    tags: ["Python", "Neural Networks"],
    image: "/image/HomeContent/PopularPrograms/AI.jpg",
    duration: "4 года", salary: "$105,000",
    href: "https://ru.wikipedia.org/wiki/Искусственный_интеллект",
  },
  {
    id: 9,
    title: "Data Engineer",
    tags: ["Big Data", "ETL Developer"],
    image: "/image/HomeContent/PopularPrograms/Data Engineer.png",
    duration: "3 года", salary: "$100,000",
    href: "https://ru.wikipedia.org/wiki/Инженерия_данных",
  },
  {
    id: 10,
    title: "Cloud Architect",
    tags: ["AWS", "Cloud Infrastructure"],
    image: "/image/HomeContent/PopularPrograms/Cloud Architect.webp",
    duration: "5 лет", salary: "$110,000",
    href: "https://ru.wikipedia.org/wiki/Облачные_вычисления",
  },
];

// ─── Карточка ─────────────────────────────────────────────────────────────────

function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={program.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col w-[300px] p-[10px] pb-[20px] gap-[10px] rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Изображение */}
      <div className="relative w-full h-[160px] rounded-xl overflow-hidden bg-slate-200">
        {program.image ? (
          <Image src={program.image} alt={program.title} fill className="object-cover scale-100 transition-transform duration-500 ease-out group-hover:scale-110" sizes="300px" />
        ) : (
          <div className="w-full h-full bg-slate-200" />
        )}
        {/* Бейдж с короной */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center z-10">
          <Crown size={18} stroke="white" strokeWidth={2} />
        </div>
      </div>

      {/* Теги */}
      <div className="flex flex-wrap gap-1">
        {program.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-medium text-blue-600 border border-slate-200 bg-transparent px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Название */}
      <p className="text-sm font-bold text-gray-900 leading-tight">{program.title}</p>

      {/* Срок и зарплата */}
      <div className="flex items-center gap-3 text-xs">
        <span className="flex items-center gap-1 text-slate-900">
          <Clock size={12} className="text-blue-600" />
          {program.duration}
        </span>
        <span className="flex items-center gap-1 font-bold text-slate-900">
          <TrendingUp size={12} className="text-blue-600" />
          {program.salary}
        </span>
      </div>
    </Link>
  );
}

// ─── Секция ───────────────────────────────────────────────────────────────────

export default function PopularPrograms() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Популярные программы"
          subtitle="Выбирайте из топовых образовательных программ мира"
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
        {programs.map((p) => (
          <SwiperSlide key={p.id} style={{ width: "auto" }}>
            <ProgramCard program={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
