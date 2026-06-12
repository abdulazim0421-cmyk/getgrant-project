"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Monitor, ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

interface CourseData {
    id: number;
    title: string;
    description: string;
    duration: string;
    lessons: number;
    students: number;
    price: number;
}

export default function CourseModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [course, setCourse] = useState<CourseData | null>(null);

    const [selectedTime, setSelectedTime] = useState("");
    const [englishLevel, setEnglishLevel] = useState("B1-B2");
    const [agreed, setAgreed] = useState(false);

    // Исправлено: берем lang вместо locale в соответствии с твоим LanguageContext
    const { t, lang } = useLanguage();

    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent<CourseData>;
            if (customEvent.detail) {
                setCourse(customEvent.detail);
                setIsOpen(true);
            }
        };
        window.addEventListener("open-course-modal", handleOpen);
        return () => window.removeEventListener("open-course-modal", handleOpen);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setSelectedTime("");
        setAgreed(false);
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
        if (isOpen) {
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            if (typeof document !== "undefined") {
                document.body.style.overflow = "unset";
            }
        };
    }, [isOpen]);

    if (!course) return null;

    const basePrice = course.price;
    const discount = Math.round(basePrice * 0.1);
    const totalPrice = basePrice - discount;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreed) return;

        console.log({
            courseId: course.id,
            selectedTime,
            englishLevel,
            totalPrice
        });
        handleClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Фон-бэкдроп */}
                    <motion.div
                        className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm fixed"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Контейнер модального окна */}
                    <motion.div
                        className="relative z-10 w-full max-w-[580px] bg-white rounded-[32px] shadow-2xl p-6 sm:p-10 flex flex-col gap-6 my-auto"
                        initial={{ opacity: 0, scale: 0.97, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {/* Хедер модалки */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                    {t("modal.course.enroll")}
                                </span>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-1">
                                    {course.title}
                                </h2>
                                <p className="text-sm font-medium text-gray-400 mt-0.5 leading-relaxed">
                                    {course.description}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shrink-0"
                            >
                                <X size={20} strokeWidth={2} />
                            </button>
                        </div>

                        {/* Информационные плашки */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50/60 rounded-2xl border border-gray-100/70">
                                <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100 shrink-0">
                                    <Calendar size={18} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{t("modal.course.duration")}</span>
                                    <span className="text-sm font-bold text-blue-600 truncate mt-0.5">{course.duration}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50/60 rounded-2xl border border-gray-100/70">
                                <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100 shrink-0">
                                    <Monitor size={18} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{t("modal.course.format")}</span>
                                    <span className="text-sm font-bold text-blue-600 truncate mt-0.5">{t("modal.course.online")}</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Выбор времени */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900">{t("modal.course.time")}</label>
                                <div className="relative">
                                    <select
                                        required

                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full h-12 pl-4 pr-10 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition shadow-sm appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled hidden>{t("modal.course.time.placeholder")}</option>
                                        <option value="morning">{t("modal.course.time.morning")}</option>
                                        <option value="day">{t("modal.course.time.day")}</option>
                                        <option value="evening">{t("modal.course.time.evening")}</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Уровень английского */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900">{t("modal.course.level")}</label>
                                <div className="flex flex-col gap-3 mt-1">
                                    {[
                                        { key: "A1-A2", label: t("modal.course.level.a") },
                                        { key: "B1-B2", label: t("modal.course.level.b") },
                                        { key: "C1-C2", label: t("modal.course.level.c") }
                                    ].map((level) => (
                                        <label key={level.key} className="flex items-center gap-3 cursor-pointer select-none group">
                                            <input
                                                type="radio"
                                                name="englishLevel"
                                                checked={englishLevel === level.key}
                                                onChange={() => setEnglishLevel(level.key)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500/20 accent-blue-600 cursor-pointer"
                                            />
                                            <span className="text-sm text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                                                {level.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Финансовый блок */}
                            <div className="p-5 bg-gray-50/70 rounded-2xl border border-gray-100 flex flex-col gap-3 text-sm">
                                <div className="flex justify-between items-center text-gray-400 font-medium">
                                    <span>{t("modal.course.price.base")}</span>
                                    <span className="font-bold text-gray-900">${basePrice}</span>
                                </div>
                                <div className="flex justify-between items-center text-blue-600 font-semibold">
                                    <span>{t("modal.course.price.discount")}</span>
                                    <span>-${discount} (10%)</span>
                                </div>
                                <div className="h-px bg-gray-200/60 my-0.5" />
                                <div className="flex justify-between items-center text-base font-extrabold text-gray-900">
                                    <span>{t("modal.course.price.total")}</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </div>

                            {/* Чекбокс оферты со сборкой строки под правила языка */}
                            <label className="flex items-start gap-3 cursor-pointer select-none py-1">
                                <div className="relative flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border transition-colors flex items-center justify-center ${
                                        agreed ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 bg-white"
                                    }`}>
                                        {agreed && <Check size={11} strokeWidth={3} />}
                                    </div>
                                </div>
                                <span className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                                    {lang === "kg" ? (
                                        <>
                                            <a href="/terms" className="text-blue-600 font-semibold hover:underline">{t("enroll.legal.agree2")}</a>
                                            {" "}{t("enroll.legal.agree3")}{" "}
                                            <a href="/refund" className="text-blue-600 font-semibold hover:underline">{t("enroll.legal.agree4")}</a>
                                            {" "}{t("enroll.legal.agree1")}
                                        </>
                                    ) : (
                                        <>
                                            {t("enroll.legal.agree1")}{" "}
                                            <a href="/terms" className="text-blue-600 font-semibold hover:underline">{t("enroll.legal.agree2")}</a>
                                            {" "}{t("enroll.legal.agree3")}{" "}
                                            <a href="/refund" className="text-blue-600 font-semibold hover:underline">{t("enroll.legal.agree4")}</a>
                                        </>
                                    )}
                                </span>
                            </label>

                            {/* Кнопки действий */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="h-12 rounded-xl border border-blue-600 text-sm sm:text-base font-bold text-blue-600 bg-white hover:bg-blue-50/40 transition shadow-sm active:scale-98"
                                >
                                    {t("modal.consult.cancel")}
                                </button>
                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className="h-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 text-sm sm:text-base font-bold text-white transition shadow-md shadow-blue-600/10 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                >
                                    {t("modal.course.submit")}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}