"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export interface CourseGroup {
    id: number;
    label: string;
}

export interface CourseData {
    id: number;
    title: string;
    description: string;
    icon: string;
    duration: string;
    durationWeeks: number;
    lessons: number;
    students: number;
    price: number;
    discountPercent: number;
    format: string;
    slug: string;
    groups: CourseGroup[];
}

export default function CourseCard({ course }: { course: CourseData }) {
    const { t } = useLanguage();

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
            <button
                onClick={handleEnroll}
                className="w-full py-2.5 rounded-xl bg-[#0047FF] text-white text-xs font-semibold hover:bg-[#0035CC] transition-all active:scale-98"
            >
                {t("online.courses.enroll")}
            </button>
        </div>
    );
}