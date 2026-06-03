import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CatalogLayout from "./components/CatalogLayout";

async function getUniversities() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    try {
        const res = await fetch(`${strapiUrl}/api/university-cards?populate=image`, { cache: "no-store" });
        if (!res.ok) return [];
        const json = await res.json();
        return (json.data || []).map((uni: any) => ({
            id: uni.id,
            name: uni.title || "Без названия",
            image: uni.image?.url ? `${strapiUrl}${uni.image.url}` : "",
            programsCount: Number(uni.programsCount) || 0,
            studentsCount: Number(uni.studentsCount) || 0,
            location: { city: uni.city || "", state: uni.state || "", country: uni.country || "" },
            cost: Number(uni.cost) || 0,
            acceptanceRate: Number(uni.acceptanceRate) || 0,
            type: uni.type === "private" ? "Частный" : "Государственный",
        }));
    } catch (error) {
        return [];
    }
}

export default async function UniversitiesPage() {
    const universitiesData = await getUniversities();
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-20">
                <CatalogLayout initialUniversities={universitiesData} />
            </main>
            <Footer />
        </div>
    );
}