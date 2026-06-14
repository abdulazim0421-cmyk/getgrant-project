import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CatalogLayout from "./components/CatalogLayout";

async function getUniversities() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    try {
        const res = await fetch(`${strapiUrl}/api/university-cards?populate=image`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        const json = await res.json();

        return (json.data || []).map((uni: any) => {
            const attr = uni;

            const imageObj = Array.isArray(attr.image) ? attr.image[0] : attr.image;
            let imageUrl = "";
            if (imageObj?.url) {
                imageUrl = imageObj.url.startsWith("http")
                    ? imageObj.url
                    : `${strapiUrl}${imageObj.url}`;
            }

            let universityType = "Государственный";
            if (attr.type === "private" || attr.type === "Частный") {
                universityType = "Частный";
            }

            return {
                id: uni.id,
                name: attr.name || "Без названия",
                image: imageUrl,
                programsCount: attr.programsCount ?? 0,
                studentsCount: attr.studentsCount ?? 0,
                location: {
                    city: attr.city || "",
                    state: attr.state || "",
                    country: attr.country || ""
                },
                cost: attr.cost ?? 0,
                acceptanceRate: attr.acceptanceRate ?? 0,
                type: universityType,
            };
        });
    } catch (error) {
        console.error("Error fetching universities:", error);
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