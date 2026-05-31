import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgramsCatalogLayout from "./components/ProgramsCatalogLayout";

// ─── 1. ФУНКЦИЯ ЗАПРОСА К STRAPI ─────────────────────────────────────────────
async function getPrograms() {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    try {
        // Запрашиваем связь 'image' через правильный синтаксис Strapi v4/v5
        const queryParams = new URLSearchParams({
            "populate": "image",
            "timestamp": Date.now().toString() // Убивает любой жесткий кэш Next.js
        });

        const res = await fetch(`${strapiUrl}/api/programs-cards?${queryParams.toString()}`, {
            cache: "no-store",
            next: { revalidate: 0 }
        });

        if (!res.ok) {
            console.error(`[Strapi Error] Сервер вернул статус: ${res.status}`);
            return [];
        }

        const json = await res.json();
        const strapiData = json.data || [];

        return strapiData.map((prog: any) => {
            const item = prog.attributes ? prog.attributes : prog;

            let imgUrl = null;

            // Извлекаем URL картинки с учетом структуры v4 и v5
            if (item.image) {
                if (item.image.data) {
                    const data = item.image.data;
                    imgUrl = data.attributes?.url || data.url;
                } else {
                    imgUrl = item.image.url || item.image.attributes?.url;
                }
            }

            const imageUrl = imgUrl ? `${strapiUrl}${imgUrl}` : null;

            return {
                id: prog.id,
                name: item.NAME || item.name || "Без названия",
                image: imageUrl,
                duration: Number(item.DURATION) || Number(item.duration) || 0,
                universitiesCount: Number(item.universitiesCount) || 12,
                averageSalary: Number(item.averageSalary) || 75000,
                careerPaths: Array.isArray(item.careerPaths) ? item.careerPaths : ["Разработчик", "Аналитик", "Тестировщик"],
                category: item.category || "IT",
                degree: item.degree || "Bachelor"
            };
        });

    } catch (error) {
        console.error("[Strapi Fetch Error] Не удалось связаться со Strapi для программ:", error);
        return [];
    }
}

// ─── 2. СЛУЖЕБНЫЙ КОМПОНЕНТ СТРАНИЦЫ (ОБЯЗАТЕЛЬНО EXPORT DEFAULT) ──────────────
export default async function ProgramsPage() {
    const programsData = await getPrograms();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-20">
                <ProgramsCatalogLayout initialPrograms={programsData} />
            </main>
            <Footer />
        </div>
    );
}