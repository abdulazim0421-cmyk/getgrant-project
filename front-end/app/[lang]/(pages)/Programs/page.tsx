"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgramsCatalogLayout from "./components/ProgramsCatalogLayout";
import { useLanguage } from "@/app/context/LanguageContext";

async function fetchProgramsFromStrapi(frontendLang: string) {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    // Корректируем локаль для Киргизии (kg -> ky)
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
            // Для Strapi v5 работаем напрямую с объектом prog, убирая прослойку attributes
            const attr = prog;

            // Обработка картинки в стиле Strapi v5 (проверяем массив или одиночный объект)
            const imageObj = Array.isArray(attr.image) ? attr.image[0] : attr.image;
            let imageUrl = "";
            if (imageObj?.url) {
                imageUrl = imageObj.url.startsWith("http")
                    ? imageObj.url
                    : `${strapiUrl}${imageObj.url}`;
            }

            // Безопасный парсинг карьерных треков (карьерные пути в Strapi у тебя лежат как JSON/Array)
            let parsedCareerPaths: string[] = [];
            if (attr.careerPaths) {
                if (Array.isArray(attr.careerPaths)) {
                    parsedCareerPaths = attr.careerPaths;
                } else if (typeof attr.careerPaths === "string") {
                    // На случай, если в базу забили строкой через запятую
                    parsedCareerPaths = attr.careerPaths.split(",").map((p: string) => p.trim());
                } else {
                    parsedCareerPaths = [attr.careerPaths];
                }
            } else {
                parsedCareerPaths = ["Разработчик", "Аналитик"]; // дефолт, если пусто
            }

            // Возвращаем плоский объект, готовый для фронтенда
            return {
                id: prog.id,
                name: attr.name || "Без названия",
                image: imageUrl,
                duration: attr.duration !== undefined && attr.duration !== null ? Number(attr.duration) : 4,
                universitiesCount: attr.universitiesCount !== undefined && attr.universitiesCount !== null ? Number(attr.universitiesCount) : 0,
                averageSalary: attr.averageSalary !== undefined && attr.averageSalary !== null ? Number(attr.averageSalary) : 0,
                careerPaths: parsedCareerPaths,
                category: attr.category || "IT",
                degree: attr.degree || "Bachelor"
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