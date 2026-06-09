// app/(pages)/Home/page.tsx

import Header from "@/app/components/Header";
import GetGrantHero from "@/app/[lang]/(pages)/Home/GetGrantHero";
import HomeContent from "@/app/[lang]/(pages)/Home/HomeContent";
import GetGrantExamGrid from "./GetGrantExamGrid";
import BentoGrid from "@/app/[lang]/(pages)/Home/BentoGrid";
import Footer from "@/app/components/Footer";

async function fetchStrapiData(endpoint: string) {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
    try {
        const res = await fetch(`${strapiUrl}/api/${endpoint}?populate=*`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`Strapi error [${endpoint}]: ${res.status}`);
            return [];
        }

        const json = await res.json();

        // ← Добавляем лог чтобы видеть что реально приходит
        console.log(`[${endpoint}] получено записей:`, json.data?.length ?? 0);

        return json.data || [];
    } catch (e) {
        console.error(`Strapi недоступен [${endpoint}]:`, e);
        return [];
    }
}

export default async function Home() {
    const [countries, majors, partnerUniversities] = await Promise.all([
        fetchStrapiData("country-cards"),
        fetchStrapiData("programs-card-heroes"),
        fetchStrapiData("university-card-heroes"),
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