import { GraduationCap, Briefcase, Lightbulb, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CountryHero from "./components/CountryHero";
import CountryAdvantages from "./components/CountryAdvantages";
import CountryCosts from "./components/CountryCosts";
import CountryUniversities from "./components/CountryUniversities";
import CountryVisas from "./components/CountryVisas";
import CountryCta from "./components/CountryCta";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const ICON_MAP: Record<string, React.ReactNode> = {
    graduation: <GraduationCap size={20} className="text-white" />,
    briefcase:  <Briefcase     size={20} className="text-white" />,
    lightbulb:  <Lightbulb    size={20} className="text-white" />,
    star:       <Star          size={20} className="text-white" />,
};

async function getCountry(slug: string) {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/sountry-pages?filters[slug][$eq]=${slug}&populate[cover_image]=true&populate[flag]=true&populate[advantages]=true&populate[living_cost_row]=true&populate[university][populate][image]=true&populate[visa_type]=true`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) return null;

        const data = await res.json();
        if (!data.data?.length) return null;

        const item = data.data[0];

        return {
            name:        item.name        ?? "",
            description: item.description ?? "",
            bannerImage: item.cover_image
                ? `${STRAPI_URL}${item.cover_image.url}`
                : null,
            flagImage: item.flag
                ? `${STRAPI_URL}${item.flag.url}`
                : null,
            ctaTitle: `Готовы начать обучение в ${item.name}?`,

            advantages: (item.advantages ?? []).map((a: any) => ({
                icon:  a.icon,
                title: a.title,
                desc:  a.text,
            })),

            costRows: (item.living_cost_row ?? []).map((r: any) => ({
                category: r.category,
                min:      String(r.min),
                avg:      String(r.average),
                max:      String(r.max),
            })),

            costTotal: (() => {
                const rows = item.living_cost_row ?? [];
                const sum = (key: string) =>
                    rows.reduce((acc: number, r: any) => acc + (r[key] ?? 0), 0);
                return {
                    min: String(sum("min")),
                    avg: String(sum("average")),
                    max: String(sum("max")),
                };
            })(),

            universities: (item.university ?? []).map((u: any, i: number) => ({
                id:       i + 1,
                name:     u.name,
                programs: `${u.programs} программ`,
                students: String(u.salary),
                location: u.location,
                image:    u.image
                    ? `${STRAPI_URL}${u.image.url}`
                    : null,
                href: "#",
            })),

            visaTypes: (item.visa_type ?? []).map((v: any) => ({
                title: v.name,
                desc:  v.description,
            })),
        };
    } catch (error) {
        console.error("Strapi fetch error:", error);
        return null;
    }
}

export default async function CountryContent({ id }: { id: string }) {
    const country = await getCountry(id.toLowerCase());

    if (!country) {
        return (
            <div className="min-h-screen flex items-center justify-center text-[#344054] px-4">
                Страница не найдена для ID: {id}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            {/* Сделали адаптивный верхний отступ под шапку */}
            <main className="flex-grow pt-20 sm:pt-24 pb-16">

                {/* КОНТЕЙНЕР ДЛЯ КНОПКИ НАЗАД */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
                    <Link
                        href="/Countries"
                        className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-3.5 sm:py-2 rounded-xl border border-[#EAECF0] bg-white text-xs sm:text-sm font-semibold text-[#344054] shadow-sm hover:bg-[#F9FAFB] hover:text-[#101828] transition-all duration-200 group active:scale-98"
                    >
                        <ArrowLeft size={16} className="text-[#667085] transition-transform duration-200 group-hover:-translate-x-0.5" />
                        <span>Назад к странам</span>
                    </Link>
                </div>

                <CountryHero
                    bannerImage={country.bannerImage ?? ""}
                    name={country.name}
                    flagImage={country.flagImage ?? ""}
                    description={country.description}
                />
                <CountryAdvantages advantages={country.advantages} />
                <CountryCosts costRows={country.costRows} costTotal={country.costTotal} />
                <CountryUniversities universities={country.universities} />
                <CountryVisas visaTypes={country.visaTypes} />
                <CountryCta ctaTitle={country.ctaTitle} />
            </main>
            <Footer />
        </div>
    );
}