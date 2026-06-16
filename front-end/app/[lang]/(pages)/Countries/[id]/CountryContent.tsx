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

async function getCountry(slug: string) {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/country-cards?filters[slug][$eq]=${slug}&populate=*`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) return null;

        const data = await res.json();
        if (!data.data?.length) return null;

        const item = data.data[0];

        return {
            name:        item.nameRu          ?? "",
            description: item.shortDescription ?? "",
            bannerImage: item.cardImage?.url   ?? null,
            flagImage:   item.flag?.url        ?? null,
            ctaTitle: `Готовы начать обучение в ${item.nameRu}?`,

            advantages: (item.advantages ?? []).map((a: any) => ({
                icon:  a.icon,
                title: a.title,
                desc:  a.description,
            })),

            costRows: (item.livingCosts ?? []).map((r: any) => ({
                category: r.category,
                min:      String(r.min),
                avg:      String(r.avg),
                max:      String(r.max),
            })),

            costTotal: (() => {
                const rows = item.livingCosts ?? [];
                const last = rows[rows.length - 1];
                return {
                    min: last?.min ?? "0",
                    avg: last?.avg ?? "0",
                    max: last?.max ?? "0",
                };
            })(),

            universities: (item.university ?? []).map((u: any, i: number) => ({
                id:       i + 1,
                name:     u.name,
                programs: `${u.programs} программ`,
                students: String(u.salary),
                location: u.location,
                image:    u.image?.url ?? null,
                href:     "#",
            })),

            visaTypes: (item.visa ?? []).map((v: any) => ({
                title: v.title,
                desc:  v.description ?? "",
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
            <main className="flex-grow pt-20 sm:pt-24 pb-16">
                <div className="w-full max-w-[1425px] mx-auto px-4 lg:px-6 mb-4 sm:mb-6">
                    <Link
                        href="/Countries"
                        className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-3.5 sm:py-2 rounded-xl border border-[#EAECF0] bg-white text-xs sm:text-sm font-semibold text-[#344054] shadow-sm transition-all duration-200 group active:scale-98 hover:border-blue-200 hover:bg-blue-50/40 hover:text-blue-600"
                    >
                        <ArrowLeft
                            size={16}
                            className="text-[#667085] transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-blue-600"
                        />
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