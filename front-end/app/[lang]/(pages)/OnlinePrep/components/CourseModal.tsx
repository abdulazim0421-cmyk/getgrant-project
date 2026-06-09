"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Monitor, ChevronDown } from "lucide-react";
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

    // Состояния полей формы
    const [selectedTime, setSelectedTime] = useState("");
    const [englishLevel, setEnglishLevel] = useState("B1-B2");
    const [agreed, setAgreed] = useState(false);

    const { t } = useLanguage();

    // Слушаем вызов именно этой модалки и принимаем данные курса
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

    // Высчитываем финансовые показатели на лету
    const basePrice = course.price;
    const discount = Math.round(basePrice * 0.1); // 10% скидка со скриншота
    const totalPrice = basePrice - discount;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика перехода к платежному шлюзу
        handleClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm fixed"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative z-10 w-full max-w-[580px] bg-white rounded-[24px] shadow-2xl p-6 sm:p-8 flex flex-col gap-5 my-auto"
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {/* Хедер модалки */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                    {t("modal.course.enroll") || "Записаться на курс"}
                                </span>
                                <h2 className="text-lg sm:text-xl font-bold text-[#101828] leading-tight">
                                    {course.title}
                                </h2>
                                <p className="text-xs text-gray-500">{course.description}</p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-2 rounded-full text-[#667085] bg-gray-50 border border-gray-100 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Информационные плашки */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-3 p-3 bg-blue-50/40 rounded-xl border border-blue-50">
                                <div className="p-2 bg-white text-blue-600 rounded-lg shadow-sm">
                                    <Calendar size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-medium">Длительность</span>
                                    <span className="text-xs sm:text-sm font-bold text-blue-700">{course.duration}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-blue-50/40 rounded-xl border border-blue-50">
                                <div className="p-2 bg-white text-blue-600 rounded-lg shadow-sm">
                                    <Monitor size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-medium">Формат обучения</span>
                                    <span className="text-xs sm:text-sm font-bold text-blue-700">Онлайн</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Выбор времени */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm font-bold text-[#101828]">Выберите удобное время</label>
                                <div className="relative">
                                    <select
                                        required
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full h-11 pl-3.5 pr-10 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled hidden>Выберите группу или время начала</option>
                                        <option value="morning">Утренняя группа (09:00 - 11:00)</option>
                                        <option value="day">Дневная группа (14:00 - 16:00)</option>
                                        <option value="evening">Вечерняя группа (19:00 - 21:00)</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Уровень английского */}
                            <div className="flex flex-col gap-2.5">
                                <label className="text-xs sm:text-sm font-bold text-[#101828]">Ваш уровень английского</label>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { key: "A1-A2", label: "Начальный (A1–A2)" },
                                        { key: "B1-B2", label: "Средний (B1–B2)" },
                                        { key: "C1-C2", label: "Продвинутый (C1–C2)" }
                                    ].map((level) => (
                                        <label key={level.key} className="flex items-center gap-3 cursor-pointer select-none">
                                            <input
                                                type="radio"
                                                name="englishLevel"
                                                checked={englishLevel === level.key}
                                                onChange={() => setEnglishLevel(level.key)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-600"
                                            />
                                            <span className="text-xs sm:text-sm text-gray-700 font-medium">{level.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Финансовый блок */}
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col gap-2.5 text-xs sm:text-sm">
                                <div className="flex justify-between items-center text-gray-500">
                                    <span>Стоимость курса</span>
                                    <span className="font-semibold text-gray-800">${basePrice}</span>
                                </div>
                                <div className="flex justify-between items-center text-blue-600 font-medium">
                                    <span>Скидка</span>
                                    <span>-${discount} (10%)</span>
                                </div>
                                <div className="h-px bg-gray-200 my-0.5" />
                                <div className="flex justify-between items-center text-base font-bold text-[#101828]">
                                    <span>Итого к оплате</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </div>

                            {/* Чекбокс оферты */}
                            <label className="flex items-start gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 rounded border-[#D0D5DD] accent-blue-600 cursor-pointer flex-shrink-0"
                                />
                                <span className="text-[11px] sm:text-xs text-[#667085] leading-relaxed">
                                    Я согласен с условиями{" "}
                                    <a href="/terms" className="text-blue-600 underline hover:no-underline font-medium">оферты</a>
                                    {" "}и{" "}
                                    <a href="/refund" className="text-blue-600 underline hover:no-underline font-medium">политикой возврата</a>
                                </span>
                            </label>

                            {/* Кнопки действий */}
                            <div className="grid grid-cols-2 gap-3 pt-1">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="h-11 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm font-bold text-[#344054] bg-white hover:bg-[#F9FAFB] transition-colors active:scale-98"
                                >
                                    Отменить
                                </button>
                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className="h-11 rounded-xl bg-[#84a9ff] text-xs sm:text-sm font-bold text-white hover:bg-[#6c96f8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors active:scale-98 shadow-sm"
                                >
                                    Перейти к оплате
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}