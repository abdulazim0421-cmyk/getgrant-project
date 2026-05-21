import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, MapPin } from "lucide-react";
import type { University } from "./types";

interface CountryUniversitiesProps {
  universities: University[];
}

function UniversityCard({ u }: { u: University }) {
  return (
    <div
      className="group flex flex-col w-full p-[10px] pb-[20px] gap-[10px] rounded-2xl border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      onClick={() => window.open(u.href, "_blank")}
    >
      <div className="relative w-full h-[160px] rounded-xl overflow-hidden bg-slate-200">
        <Image
          src={u.image}
          alt={u.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <p className="text-sm font-bold text-[#101828] leading-tight line-clamp-2">{u.name}</p>
        <div className="flex items-center gap-3 text-xs text-[#344054]">
          <span className="flex items-center gap-1">
            <BookOpen size={13} className="text-[#1570EF]" />
            {u.programs}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} className="text-[#1570EF]" />
            {u.students}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#1D2939]">
          <MapPin size={12} className="text-[#1D2939] flex-shrink-0" />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover:text-blue-500 transition-colors"
          >
            {u.location}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CountryUniversities({ universities }: CountryUniversitiesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#101828]">Топ университеты</h2>
          <Link href="/Universities" className="px-5 py-2 rounded-[8px] bg-[#1570EF] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors">
            Показать все
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {universities.map((u) => (
            <UniversityCard key={u.id} u={u} />
          ))}
        </div>
      </div>
    </section>
  );
}
