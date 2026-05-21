import Image from "next/image";
import Link from "next/link";

export interface Country {
  id: number;
  name: string;
  nameEn: string;
  flag: string;
  flagImage?: string;
  description: string;
  image: string | null;
  href: string;
}

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div className="group flex flex-col w-full max-w-[305px] p-[10px] pb-[20px] gap-[10px] rounded-[16px] border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-[180px] rounded-[8px] overflow-hidden bg-slate-200">
        {country.image ? (
          <Image src={country.image} alt={country.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="305px" />
        ) : (
          <div className="w-full h-full bg-slate-200 animate-pulse" />
        )}
      </div>

      <div className="flex items-center gap-3 bg-[#F9FAFB] rounded-[8px] p-3">
        {country.flagImage ? (
          <div className="relative w-6 h-4 flex-shrink-0 rounded-[2px] overflow-hidden">
            <Image src={country.flagImage} alt={`Флаг ${country.name}`} fill className="object-cover" sizes="24px" />
          </div>
        ) : (
          <span className="text-xl leading-none">{country.flag}</span>
        )}
        <div>
          <p className="text-sm font-bold text-[#101828] leading-tight">{country.name}</p>
          <p className="text-xs text-[#667085] leading-tight">{country.nameEn}</p>
        </div>
      </div>

      <p className="text-xs text-[#344054] leading-relaxed px-1 flex-1">{country.description}</p>

      <Link
        href={country.href}
        className="mt-auto mx-1 flex items-center justify-center h-9 rounded-[8px] border border-[#1570EF] text-[#1570EF] text-xs font-semibold bg-transparent hover:bg-[#1570EF] hover:text-white transition-colors duration-200"
      >
        Подробнее о стране
      </Link>
    </div>
  );
}
