"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgramsCatalogLayout from "./components/ProgramsCatalogLayout";
import { useLanguage } from "@/app/context/LanguageContext";

// Функция запроса теперь принимает параметр языка (locale)
async function fetchProgramsFromStrapi(locale: string) {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    try {
        const queryParams = new URLSearchParams({
            "populate": "image",
            "locale": locale, // Передаем 'ru' или 'ky' в Strapi
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
                // Если карьерные пути возвращаются строкой, делим её, если массивом — оставляем
                careerPaths: Array.isArray(item.careerPaths)
                    ? item.careerPaths
                    : item.careerPaths ? [item.careerPaths] : ["Разработчик", "Аналитик"],
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
    const { lang } = useLanguage(); // Следим за текущим языком (ru / ky)
    const [programs, setPrograms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Каждый раз, когда пользователь меняет язык в Header, этот useEffect делает новый запрос в Strapi
    useEffect(() => {
        let isMounted = true;
        setLoading(true);

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