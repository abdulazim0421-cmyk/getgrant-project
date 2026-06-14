import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutMission from "./components/AboutMission";
import AboutValues from "./components/AboutValues";
import AboutHistory from "./components/AboutHistory";
import AboutTeam from "./components/AboutTeam";
import AboutLicenses from "./components/AboutLicenses";

async function fetchAboutStats() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
    try {
        const res = await fetch(`${strapiUrl}/api/home-statistic?populate=*`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data || null;
    } catch (e) {
        console.error("Ошибка при загрузке статистики Strapi:", e);
        return null;
    }
}

export default async function AboutPage() {
    const statsData = await fetchAboutStats();
    const strapiStats = statsData?.attributes ? statsData.attributes : statsData;

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-[72px]">
                <AboutHero />
                <AboutStats strapiStats={strapiStats} />
                <AboutMission />
                <AboutValues />
                <AboutHistory />
                <AboutTeam />
                <AboutLicenses />
            </main>
            <Footer />
        </div>
    );
}