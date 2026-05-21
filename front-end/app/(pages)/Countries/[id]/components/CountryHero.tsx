import Image from "next/image";

interface CountryHeroProps {
  bannerImage: string;
  name: string;
  flagImage: string;
  description: string;
}

export default function CountryHero({ bannerImage, name, flagImage, description }: CountryHeroProps) {
  return (
    <section className="relative w-full h-[450px] overflow-hidden mb-16">
      <Image src={bannerImage} alt={name} fill className="w-full h-full object-cover object-center" priority />
      <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-md px-5 py-3 flex flex-row items-center gap-3 w-[480px]">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#EAECF0]">
          <Image src={flagImage} alt={`Флаг ${name}`} fill className="object-cover" sizes="40px" />
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] font-bold text-[#101828] leading-tight">{name}</p>
          <p className="text-[#667085] text-[13px] leading-snug">{description}</p>
        </div>
      </div>
    </section>
  );
}
