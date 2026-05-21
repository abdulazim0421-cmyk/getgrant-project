import type { Advantage } from "./types";

interface CountryAdvantagesProps {
  advantages: Advantage[];
}

export default function CountryAdvantages({ advantages }: CountryAdvantagesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold text-[#101828] mb-8">Преимущества обучения</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((a, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 rounded-[16px] border border-[#EAECF0] bg-white">
              <div className="w-10 h-10 rounded-[10px] bg-[#1570EF] flex items-center justify-center flex-shrink-0">
                {a.icon}
              </div>
              <p className="text-sm font-bold text-[#101828]">{a.title}</p>
              <p className="text-xs text-[#667085] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
