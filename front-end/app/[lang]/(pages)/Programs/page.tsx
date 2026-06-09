"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgramsCatalogLayout from "./components/ProgramsCatalogLayout";
import { useLanguage } from "@/app/context/LanguageContext";

// Вынесли функцию за пределы компонента, добавив адаптер локали Strapi
async function fetchProgramsFromStrapi(frontendLang: string) {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    // Адаптер: если на фронтенде 'kg', для Strapi преобразуем в официальный 'ky'
    const strapiLocale = frontendLang === "kg" ? "ky" : frontendLang;

    try {
        const queryParams = new URLSearchParams({
            "populate": "image",
            "locale": strapiLocale,
            "timestamp": Date.now().toString()
        });

        const res = await fetch(`${strapiUrl}/api/programs-cards?${queryParams.toString()}`, {
            cache: "no-store"
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

            // Более гибкий парсинг картинок для мультиязычных коллекций
            if (item.image) {
                if (item.image.data) {
                    const data = item.image.data;
                    imgUrl = data.attributes?.url || data.url;
                } else if (Array.isArray(item.image)) {
                    imgUrl = item.image[0]?.url || item.image[0]?.attributes?.url;
                } else {
                    imgUrl = item.image.url || item.image.attributes?.url;
                }
            }

            const imageUrl = imgUrl ? `${strapiUrl}${imgUrl}` : null;

            // Гибкий парсинг карьерных треков (разбиваем строку, если пришла строкой в переводах)
            let parsedCareerPaths = ["Разработчик", "Аналитик"];
            if (item.careerPaths) {
                if (Array.isArray(item.careerPaths)) {
                    parsedCareerPaths = item.careerPaths;
                } else if (typeof item.careerPaths === "string") {
                    parsedCareerPaths = item.careerPaths.split(",").map((p: string) => p.trim());
                } else {
                    parsedCareerPaths = [item.careerPaths];
                }
            }

            return {
                id: prog.id,
                name: item.NAME || item.name || "Без названия",
                image: imageUrl,
                duration: Number(item.DURATION) || Number(item.duration) || 0,
                universitiesCount: Number(item.universitiesCount) || 12,
                averageSalary: Number(item.averageSalary) || 75000,
                careerPaths: parsedCareerPaths,
                category: item.category || "IT",
                degree: item.degree || "Bachelor"
            };
        });

    } catch (error) {
        console.error("[Strapi Fetch Error] Ошибка запроса программ:", error);
        return [];
    }
}

export default function ProgramsPage() {
    const { lang } = useLanguage();
    const [programs, setPrograms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        // Передаем текущий lang фронтенда ("ru" или "kg")
        fetchProgramsFromStrapi(lang).then((data) => {
            if (isMounted) {
                setPrograms(data);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [lang]);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-20">
                {loading ? (
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <ProgramsCatalogLayout initialPrograms={programs} />
                )}
            </main>
            <Footer />
        </div>
    );
}