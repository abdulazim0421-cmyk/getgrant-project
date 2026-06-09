"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const courses = [
    { id: 1, title: "TOEFL Preparation, IELTS Mastery", description: "Комплексная подготовка к экзамену TOEFL", duration: "12 недель", lessons: 24, students: 45, price: 600 },
    { id: 2, title: "IELTS Mastery Intensive",       description: "Подготовка к экзамену IELTS с опытными преподавателями", duration: "10 недель", lessons: 20, students: 35, price: 550 },
    { id: 3, title: "Cambridge English Academic",    description: "Подготовка к экзаменам Cambridge English",               duration: "14 недель", lessons: 28, students: 30, price: 650 },
    { id: 4, title: "Business English Pro",          description: "Курс делового английского для профессионалов",           duration: "8 недель",  lessons: 16, students: 40, price: 400 },
];

function CourseCard({ course }: { course: typeof courses[0] }) {
    const { t } = useLanguage();

    // Функция открытия именно модалки курса с передачей данных
    const handleEnroll = () => {
        window.dispatchEvent(new CustomEvent("open-course-modal", { detail: course }));
    };

    return (
        <div className="w-full p-5 rounded-2xl border border-[#EAECF0] bg-white flex flex-col gap-3.5 shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="w-9 h-9 rounded-xl bg-[#0047FF] flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-white" />
            </div>
            <div className="min-h-[52px] flex flex-col gap-1">
                <p className="text-sm sm:text-base font-bold text-[#101828] leading-snug">{course.title}</p>
                <p className="text-xs text-[#667085] leading-relaxed line-clamp-2">{course.description}</p>
            </div>
            <div className="w-full rounded-xl bg-[#F2F4F7] px-3.5 py-2.5 flex flex-col gap-2 text-xs mt-auto">
                <div className="flex justify-between items-center">
                    <span className="text-[#667085]">{t("online.courses.duration")}</span>
                    <span className="font-semibold text-[#0047FF]">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[#667085]">{t("online.courses.lessons")}</span>
                    <span className="font-semibold text-[#101828]">{course.lessons}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[#667085]">{t("online.courses.students")}</span>
                    <span className="font-semibold text-[#101828]">{course.students}</span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full px-0.5 pt-1">
                <span className="text-xs sm:text-sm text-[#667085]">{t("online.courses.price")}</span>
                <span className="text-base font-bold text-[#101828]">${course.price}</span>
            </div>
            <button onClick={handleEnroll} className="w-full py-2.5 rounded-xl bg-[#0047FF] text-white text-xs font-semibold hover:bg-[#0035CC] transition-all active:scale-98">
                {t("online.courses.enroll")}
            </button>
        </div>
    );
}

export default function CoursesSection() {
    const { t } = useLanguage();
    return (
        <section className="mb-10 md:mb-14 px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#101828] mb-5">{t("online.courses.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {courses.map((c) => <CourseCard key={c.id} course={c} />)}
            </div>
        </section>
    );
}