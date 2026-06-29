import TeacherCard, { type Teacher } from "./TeacherCard";
import TeachersSwiper from "./TeachersSwiper";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const getImageUrl = (img: any): string | null => {
    if (!img) return null;
    if (typeof img.url === "string") {
        return img.url.startsWith("http") ? img.url : `${STRAPI_URL}${img.url}`;
    }
    if (Array.isArray(img) && img[0]?.url) {
        return img[0].url.startsWith("http") ? img[0].url : `${STRAPI_URL}${img[0].url}`;
    }
    return null;
};

async function getTeachers(): Promise<Teacher[]> {
    try {
        const res = await fetch(`${STRAPI_URL}/api/teacher-cards?populate=*`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) return [];

        const data = await res.json();
        const items = data.data ?? [];

        return items.map((item: any) => ({
            id: item.id,
            name: item.name ?? "",
            subject: item.subject ?? "",
            rate: `$${item.rate ?? 0}/час`,
            exp: `${item.experienceYears ?? 0} лет`,
            cert: item.certificate ?? "",
            avatar: getImageUrl(item.avatar) ?? "",
        }));
    } catch (error) {
        console.error("Strapi fetch error (teachers):", error);
        return [];
    }
}

export default async function TeachersSection() {
    const teachers = await getTeachers();

    if (!teachers.length) {
        return null;
    }

    return <TeachersSwiper teachers={teachers} />;
}