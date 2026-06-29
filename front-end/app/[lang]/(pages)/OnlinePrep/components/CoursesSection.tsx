import { GraduationCap } from "lucide-react";
import CourseCard, { type CourseData } from "./CourseCard";

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

async function getCourses(): Promise<CourseData[]> {
    try {
        const res = await fetch(`${STRAPI_URL}/api/course-cards?populate=*`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) return [];

        const data = await res.json();
        const items = data.data ?? [];

        return items.map((item: any) => ({
            id: item.id,
            title: item.title ?? "",
            description: item.description ?? "",
            icon: item.icon ?? "graduation",
            duration: `${item.durationWeeks ?? 0} недель`,
            durationWeeks: item.durationWeeks ?? 0,
            lessons: item.lessonsCount ?? 0,
            students: item.studentsCount ?? 0,
            price: item.price ?? 0,
            discountPercent: item.discountPercent ?? 0,
            format: item.format ?? "Онлайн",
            slug: item.slug ?? "",
            groups: (item.course_groups ?? []).map((g: any) => ({
                id: g.id,
                label: (g.label ?? "").trim(),
            })),
        }));
    } catch (error) {
        console.error("Strapi fetch error (courses):", error);
        return [];
    }
}

export default async function CoursesSection() {
    const courses = await getCourses();

    if (!courses.length) {
        return null;
    }

    return (
        <section className="mb-10 md:mb-14 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#101828] mb-5">
                Популярные курсы
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {courses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                ))}
            </div>
        </section>
    );
}