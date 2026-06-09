"use client";

import { useEffect, useState } from "react";
import { X, Award, Briefcase, GraduationCap, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { type Teacher } from "./TeacherCard";

export default function TeacherModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [teacher, setTeacher] = useState<Teacher | null>(null);

    // Используем lang в соответствии с твоим LanguageContext
    const { t, lang } = useLanguage();

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

    if (!teacher) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreed) return;

        console.log({
            teacherId: teacher.id,
            sessionFormat,
            date,
            time,
            name,
            email,
            comment
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
                        className="relative z-10 w-full max-w-[640px] bg-white rounded-[32px] shadow-2xl p-6 sm:p-10 flex flex-col gap-6 my-auto"
                        initial={{ opacity: 0, scale: 0.97, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {/* Верхняя карточка преподавателя */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={teacher.avatar}
                                    alt={teacher.name}
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-50 object-cover shrink-0 shadow-sm"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{t("modal.teacher.sub")}</span>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight mt-0.5">{teacher.name}</h2>
                                    <p className="text-sm font-medium text-gray-400 mt-0.5">{teacher.subject}</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shrink-0"
                            >
                                <X size={20} strokeWidth={2} />
                            </button>
                        </div>

                        {/* Регалии преподавателя по макету image_2926b6.png */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50/60 rounded-2xl border border-gray-100/70">
                                <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100 shrink-0">
                                    <GraduationCap size={18} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Специализация</span>
                                    <span className="text-sm font-bold text-blue-600 truncate mt-0.5">{teacher.subject}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50/60 rounded-2xl border border-gray-100/70">
                                <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100 shrink-0">
                                    <Briefcase size={18} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Опыт работы</span>
                                    <span className="text-sm font-bold text-blue-600 truncate mt-0.5">{teacher.exp}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50/60 rounded-2xl border border-gray-100/70">
                                <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm border border-gray-100 shrink-0">
                                    <Award size={18} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Сертификаты</span>
                                    <span className="text-sm font-bold text-blue-600 truncate mt-0.5">{teacher.cert}</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Выбор формата занятия */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900">{t("modal.teacher.format")}</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    {/* Индивидуальное */}
                                    <div
                                        onClick={() => setSessionFormat("individual")}
                                        className={`p-5 rounded-2xl border-2 cursor-pointer flex items-start gap-3.5 select-none transition-all ${
                                            sessionFormat === "individual" ? "border-blue-600 bg-white" : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                    >
                                        <div className="relative flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                                sessionFormat === "individual" ? "border-blue-600" : "border-gray-300"
                                            }`}>
                                                {sessionFormat === "individual" && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 min-w-0">
                                            <span className="text-sm font-extrabold text-gray-900 leading-none">{t("modal.teacher.indiv.title")}</span>
                                            <span className="text-xs text-gray-400 font-medium leading-normal mt-0.5">{t("modal.teacher.indiv.desc")}</span>
                                            <span className="text-sm font-extrabold text-blue-600 mt-2">{teacher.rate}/час</span>
                                        </div>
                                    </div>

                                    {/* Пробное */}
                                    <div
                                        onClick={() => setSessionFormat("trial")}
                                        className={`p-5 rounded-2xl border-2 cursor-pointer flex items-start gap-3.5 select-none transition-all ${
                                            sessionFormat === "trial" ? "border-blue-600 bg-white" : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                    >
                                        <div className="relative flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                                sessionFormat === "trial" ? "border-blue-600" : "border-gray-300"
                                            }`}>
                                                {sessionFormat === "trial" && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 min-w-0">
                                            <span className="text-sm font-extrabold text-gray-900 leading-none">{t("modal.teacher.trial.title")}</span>
                                            <span className="text-xs text-gray-400 font-medium leading-normal mt-0.5">{t("modal.teacher.trial.desc")}</span>
                                            <span className="text-sm font-extrabold text-blue-600 mt-2">{teacher.rate}/час</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Дата и время */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900">{t("modal.teacher.datetime")}</label>
                                <div className="grid grid-cols-2 gap-3.5">
                                    <input
                                        type="date"
                                        required
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition shadow-sm cursor-pointer"
                                    />
                                    <input
                                        type="time"
                                        required
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition shadow-sm cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Контакты */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900">{t("modal.teacher.contacts")}</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Как к вам обращаться?"
                                        className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition shadow-sm"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email@example.com"
                                        className="h-12 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Пожелания */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900">
                                    {t("modal.teacher.wishes")}{" "}
                                    <span className="text-gray-400 font-normal text-xs">{t("modal.teacher.wishes.optional")}</span>
                                </label>
                                <textarea
                                    rows={3}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Расскажите о своих целях, уровне подготовки или особых пожеланиях..."
                                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition shadow-sm resize-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Идеально круглый чекбокс оферты с учетом правил языка */}
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

                            {/* Кнопки действий по макету */}
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