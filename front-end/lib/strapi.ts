const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

// ─── Типы ────────────────────────────────────────────────

export interface StrapiImage {
    data: {
        attributes: {
            url: string;
        };
    } | null;
}

export interface University {
    id: number;
    attributes: {
        name: string;
        programsCount: number;
        studentsCount: number;
        city: string;
        state: string;
        country: string;
        cost: number;
        acceptanceRate: number;
        type: "Частный" | "Государственный";
        image: StrapiImage;
    };
}

export interface Program {
    id: number;
    attributes: {
        title: string;
        duration: string;
        universitiesCount: number;
        averageSalary: number;
        careerPaths: string[];
        direction: string;
        level: string;
        image: StrapiImage;
    };
}

// ─── Хелпер для получения URL картинки ───────────────────

export function getStrapiImageUrl(image: StrapiImage): string {
    const url = image?.data?.attributes?.url;
    if (!url) return "/image/student-grid1.png"; // fallback
    // Если url относительный — добавляем базовый адрес Strapi
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

// ─── Запросы ──────────────────────────────────────────────

export async function getUniversities(): Promise<University[]> {
    const res = await fetch(
        `${STRAPI_URL}/api/universities?populate=*&pagination[pageSize]=100`,
        { next: { revalidate: 60 } } // ISR — обновление каждые 60 сек
    );

    if (!res.ok) throw new Error("Ошибка загрузки университетов");

    const json = await res.json();
    return json.data as University[];
}

export async function getPrograms(): Promise<Program[]> {
    const res = await fetch(
        `${STRAPI_URL}/api/programs?populate=*&pagination[pageSize]=100`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Ошибка загрузки программ");

    const json = await res.json();
    return json.data as Program[];
}
