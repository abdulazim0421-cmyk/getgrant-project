"use client";

import { useEffect, useState } from "react";
import { X, Award, Briefcase, GraduationCap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { type Teacher } from "./TeacherCard";

export default function TeacherModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const { t } = useLanguage();

    // Состояния полей формы
    const [sessionFormat, setSessionFormat] = useState<"individual" | "trial">("individual");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent<Teacher>;
            if (customEvent.detail) {
                setTeacher(customEvent.detail);
                setIsOpen(true);
            }
        };
        window.addEventListener("open-teacher-modal", handleOpen);
        return () => window.removeEventListener("open-teacher-modal", handleOpen);
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

    if (!teacher) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика отправки заявки к учителю на бэкенд / Страпи
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
                        className="relative z-10 w-full max-w-[620px] bg-white rounded-[24px] shadow-2xl p-6 sm:p-8 flex flex-col gap-5 my-auto"
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {/* Верхняя карточка преподавателя */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                                <img
                                    src={teacher.avatar}
                                    alt={teacher.name}
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gray-50 object-cover shrink-0"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Записаться к преподавателю</span>
                                    <h2 className="text-base sm:text-lg font-bold text-[#101828] leading-tight mt-0.5">{teacher.name}</h2>
                                    <p className="text-xs text-gray-500 mt-0.5">{teacher.subject}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-2 rounded-full text-[#667085] bg-gray-50 border border-gray-100 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Краткие регалии */}
                        <div className="grid grid-cols-3 gap-2 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row items-center gap-2 p-2.5 bg-blue-50/30 border border-blue-50/50 rounded-xl">
                                <GraduationCap size={15} className="text-blue-600 shrink-0" />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[9px] text-gray-400 font-medium leading-none">Специализация</span>
                                    <span className="text-[11px] font-bold text-blue-800 truncate mt-0.5">{teacher.subject}</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2 p-2.5 bg-blue-50/30 border border-blue-50/50 rounded-xl">
                                <Briefcase size={14} className="text-blue-600 shrink-0" />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[9px] text-gray-400 font-medium leading-none">Опыт работы</span>
                                    <span className="text-[11px] font-bold text-blue-800 truncate mt-0.5">{teacher.exp}</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2 p-2.5 bg-blue-50/30 border border-blue-50/50 rounded-xl">
                                <Award size={15} className="text-blue-600 shrink-0" />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[9px] text-gray-400 font-medium leading-none">Сертификаты</span>
                                    <span className="text-[11px] font-bold text-blue-800 truncate mt-0.5">{teacher.cert}</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Выбор формата занятия */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm font-bold text-[#101828]">Выберите формат занятия</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {/* Индивидуальное */}
                                    <div
                                        onClick={() => setSessionFormat("individual")}
                                        className={`p-4 rounded-xl border-2 cursor-pointer flex items-start gap-3 select-none transition-all ${
                                            sessionFormat === "individual" ? "border-blue-500 bg-blue-50/10" : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            checked={sessionFormat === "individual"}
                                            onChange={() => {}}
                                            className="mt-0.5 accent-blue-600 pointer-events-none"
                                        />
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-xs sm:text-sm font-bold text-gray-900">Индивидуальное занятие</span>
                                            <span className="text-[11px] text-gray-400 leading-tight">Персональное занятие один на один с преподавателем</span>
                                            <span className="text-xs sm:text-sm font-bold text-blue-600 mt-1.5">{teacher.rate}</span>
                                        </div>
                                    </div>
                                    {/* Пробное */}
                                    <div
                                        onClick={() => setSessionFormat("trial")}
                                        className={`p-4 rounded-xl border-2 cursor-pointer flex items-start gap-3 select-none transition-all ${
                                            sessionFormat === "trial" ? "border-blue-500 bg-blue-50/10" : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            checked={sessionFormat === "trial"}
                                            onChange={() => {}}
                                            className="mt-0.5 accent-blue-600 pointer-events-none"
                                        />
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-xs sm:text-sm font-bold text-gray-900">Пробное занятие (30 мин)</span>
                                            <span className="text-[11px] text-gray-400 leading-tight">Короткое знакомство и точная оценка текущего уровня</span>
                                            <span className="text-xs sm:text-sm font-bold text-blue-600 mt-1.5">{teacher.rate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Дата и время */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm font-bold text-[#101828]">Выберите дату и время</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="date"
                                        required
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm cursor-pointer"
                                    />
                                    <input
                                        type="time"
                                        required
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Контакты */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs sm:text-sm font-bold text-[#101828]">Ваши контакты</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {/* Защищенное поле Имени от подтягивания почты браузером */}
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Как к вам обращаться?"
                                        className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email@example.com"
                                        className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Пожелания */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs sm:text-sm font-bold text-[#101828]">
                                    Дополнительные пожелания <span className="text-gray-400 font-normal text-[11px]">(необязательно)</span>
                                </label>
                                <textarea
                                    rows={3}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Расскажите о своих целях, уровне подготовки или особых пожеланиях..."
                                    className="px-3.5 py-2.5 rounded-xl border border-[#D0D5DD] text-xs sm:text-sm text-[#101828] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm resize-none"
                                />
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
                                    Я согласен с условиями <a href="/terms" className="text-blue-600 underline hover:no-underline font-medium">оферты</a> и <a href="/refund" className="text-blue-600 underline hover:no-underline font-medium">политикой возврата</a>
                                </span>
                            </label>

                            {/* Кнопки */}
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
                                    Подтвердить запись
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}