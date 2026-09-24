import { Suspense } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgramsCatalogLayout from "./components/ProgramsCatalogLayout";

const CATEGORY_MAP: Record<string, string> = {
    "инженерия": "Инженерия",
    "it": "IT",
    "информационные технологии": "IT",
    "технологии": "IT",
    "technology": "IT",
    "информатика": "IT",
    "business": "Бизнес",
    "бизнес": "Бизнес",
    "medicine": "Медицина",
    "медицина": "Медицина",
    "arts": "Искусство",
    "искусство": "Искусство",
};

const DEGREE_MAP: Record<string, string> = {
    "bachelor": "Bachelor",
    "бакалавр": "Bachelor",
    "бакалавриат": "Bachelor",
    "master": "Master",
    "магистр": "Master",
    "магистратура": "Master",
    "phd": "PhD",
    "ph.d": "PhD",
    "pre-med": "Pre-Med",
    "premedical": "Pre-Med",
};

async function fetchProgramsFromStrapi(frontendLang: string) {
    try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
        const strapiLocale = frontendLang === "kg" ? "ky" : "ru";

        console.log("📥 Загружаю программы...");

        const res = await fetch(
            `${strapiUrl}/api/programs-cards?populate=image&locale=${strapiLocale}`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            console.error("❌ Ошибка Strapi:", res.status);
            return [];
        }

        const json = await res.json();
        const strapiData = json.data || [];

        console.log("✅ Загружено программ:", strapiData.length);

        return strapiData.map((prog: any) => {
            const attr = prog;

            const imageObj = Array.isArray(attr.image) ? attr.image[0] : attr.image;
            let imageUrl = "";
            if (imageObj?.url) {
                imageUrl = imageObj.url.startsWith("http")
                    ? imageObj.url
                    : `${strapiUrl}${imageObj.url}`;
            }

            let parsedCareerPaths: string[] = [];
            if (attr.careerPaths) {
                if (Array.isArray(attr.careerPaths)) {
                    parsedCareerPaths = attr.careerPaths;
                } else if (typeof attr.careerPaths === "string") {
                    parsedCareerPaths = attr.careerPaths.split(",").map((p: string) => p.trim());
                }
            }

            let category = "IT"; // дефолт
            const nameToCheck = (attr.name || "").toLowerCase();
            if (nameToCheck.includes("инженер")) category = "Инженерия";
            else if (nameToCheck.includes("бизнес") || nameToCheck.includes("менеджмент")) category = "Бизнес";
            else if (nameToCheck.includes("медицин")) category = "Медицина";
            else if (nameToCheck.includes("искусство") || nameToCheck.includes("дизайн")) category = "Искусство";
            else if (nameToCheck.includes("технолог") || nameToCheck.includes("it")) category = "IT";

            if (attr.category) {
                const lowerCategory = String(attr.category).toLowerCase().trim();
                category = CATEGORY_MAP[lowerCategory] || attr.category;
            }

            let degree = "Bachelor";
            if (attr.degree) {
                const lowerDegree = String(attr.degree).toLowerCase().trim();
                degree = DEGREE_MAP[lowerDegree] || attr.degree;
            }

            return {
                id: prog.id,
                name: attr.name || "Без названия",
                image: imageUrl || null,
                duration: attr.duration || 4,
                universitiesCount: attr.universitiesCount || 0,
                averageSalary: attr.averageSalary || 0,
                careerPaths: parsedCareerPaths,
                category: category,
                degree: degree
            };
        });

    } catch (error) {
        console.error("❌ Ошибка загрузки:", error);
        return [];
    }
}

export default async function ProgramsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const programs = await fetchProgramsFromStrapi(lang);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-20">
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center min-h-[400px]">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                    }
                >
                    {programs.length === 0 ? (
                        <div className="flex items-center justify-center min-h-[400px] text-gray-600">
                            Программ не найдено
                        </div>
                    ) : (
                        <ProgramsCatalogLayout initialPrograms={programs} />
                    )}
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}