import Header from "@/app/components/Header";
import GetGrantHero from "@/app/[lang]/(pages)/Home/GetGrantHero";
import HomeContent from "@/app/[lang]/(pages)/Home/HomeContent";
import GetGrantExamGrid from "./GetGrantExamGrid";
import BentoGrid from "@/app/[lang]/(pages)/Home/BentoGrid";
import Footer from "@/app/components/Footer";

const langToLocale: Record<string, string> = {
    ru: "ru",
    kg: "ky",
};

async function fetchStrapiData(endpoint: string, locale: string) {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
    try {
        const res = await fetch(
            `${strapiUrl}/api/${endpoint}?populate=*&locale=${locale}`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            console.error(`Strapi error [${endpoint}]: ${res.status}`);
            return [];
        }

        const json = await res.json();
        return json.data || [];
    } catch (e) {
        console.error(`Strapi недоступен [${endpoint}]:`, e);
        return [];
    }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = langToLocale[lang] || "ru";

    const [countries, majors, partnerUniversities] = await Promise.all([
        fetchStrapiData("countries-homes", locale),
        fetchStrapiData("programs-homes", locale),
        fetchStrapiData("university-homes", locale),
    ]);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-10">
                <GetGrantHero />
                <GetGrantExamGrid />
                <BentoGrid />
                <HomeContent
                    countries={countries}
                    majors={majors}
                    partnerUniversities={partnerUniversities}
                />
            </main>
            <Footer />
        </div>
    );
}