import Image from "next/image";

interface CountryHeroProps {
    bannerImage: string;
    name: string;
    flagImage: string;
    description: string;
}

export default function CountryHero({ bannerImage, name, flagImage, description }: CountryHeroProps) {
    return (
        /* Ограничение ширины изменено на max-w-[1440px] */
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
            <div className="relative w-full rounded-2xl sm:rounded-[24px] lg:rounded-[32px] overflow-hidden border border-[#EAECF0] bg-white flex flex-col lg:block">

                <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[460px] bg-slate-100 shrink-0">
                    {bannerImage ? (
                        <Image
                            src={bannerImage}
                            alt={name}
                            fill
                            className="object-cover object-center"
                            priority
                            unoptimized
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-200 animate-pulse" />
                    )}
                </div>

                <div className="w-full lg:absolute lg:bottom-6 lg:left-6 lg:max-w-[480px] p-5 sm:p-6 bg-white lg:rounded-2xl lg:shadow-xl border-t border-[#EAECF0] lg:border-t-0 flex flex-row items-start gap-4">
                    {flagImage && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#EAECF0] bg-slate-50 mt-0.5 shadow-sm">
                            <Image src={flagImage} alt={`Флаг ${name}`} fill className="object-cover" sizes="40px" unoptimized />
                        </div>
                    )}
                    <div className="flex flex-col min-w-0">
                        <p className="text-lg sm:text-xl font-bold text-[#101828] leading-tight truncate">{name}</p>
                        <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mt-1">{description}</p>
                    </div>
                </div>

            </div>
        </section>
    );
}