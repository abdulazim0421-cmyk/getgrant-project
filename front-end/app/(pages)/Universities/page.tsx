import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CatalogLayout from "./components/CatalogLayout";

async function getUniversities() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    try {
        const res = await fetch(`${strapiUrl}/api/university-cards?populate=image`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`[Strapi Error] Статус: ${res.status}`);
            return [];
        }

        const json = await res.json();
        const strapiData = json.data || [];

        return strapiData.map((uni: any) => {
            // Strapi v5 — данные прямо в объекте
            const imageUrl = uni.image?.url
                ? `${strapiUrl}${uni.image.url}`
                : "";

            const rawType = uni.type || "public";
            const mappedType = rawType === "private" ? "Частный" : "Государственный";

            return {
                id: uni.id,
                name: uni.title || "Без названия",
                image: imageUrl,
                programsCount: Number(uni.programsCount) || 0,
                studentsCount: Number(uni.studentsCount) || 0,
                location: {
                    city: uni.city || "",
                    state: uni.state || "",
                    country: uni.country || "",
                },
                cost: Number(uni.cost) || 0,
                acceptanceRate: Number(uni.acceptanceRate) || 0,
                type: mappedType,
            };
        });

    } catch (error) {
        console.error("[Strapi Fetch Error]:", error);
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