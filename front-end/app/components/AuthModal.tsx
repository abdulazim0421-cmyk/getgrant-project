"use client";

import { useEffect, useState } from "react";
import { X, Eye, EyeOff, Globe, BookOpen, GraduationCap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext"; // Импортируем контекст локализации

export default function AuthModal() {
    const { t } = useLanguage(); // Подключаем хук перевода текстов
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");
    const [showPassword, setShowPassword] = useState(false);

    // Состояния полей
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-auth-modal", handleOpen);
        return () => window.removeEventListener("open-auth-modal", handleOpen);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Сбрасываем поля при закрытии
        setEmail("");
        setPassword("");
        setName("");
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика авторизации бэкенда / Strapi / NextAuth
        console.log({ activeTab, email, password, name });
        handleClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-4 sm:py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Задний фон */}
                    <motion.div
                        className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm fixed"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Тело модального окна */}
                    <motion.div
                        className="relative z-10 w-full max-w-[940px] bg-white rounded-[28px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[560px] md:h-[620px] my-auto"
                        initial={{ opacity: 0, scale: 0.97, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full text-gray-400 bg-white/80 border border-gray-100 hover:bg-red-50 hover:text-red-500 md:hover:bg-gray-50 md:hover:text-gray-700 transition-colors"
                        >
                            <X size={18} />
                        </button>

                        {/* ЛЕВАЯ СТОРОНА: ФОРМА */}
                        {/* Скрываем дефолтный браузерный скроллбар, чтобы дизайн оставался монолитным при переключении табов */}
                        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center overflow-y-auto h-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                            {/* Переключение Вход / Регистрация */}
                            <div className="flex gap-6 border-b border-gray-100 mb-6 text-sm font-medium">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("login")}
                                    className={`pb-2.5 relative transition-colors ${activeTab === "login" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    {t("auth.btn.login")}
                                    {activeTab === "login" && (
                                        <motion.div layoutId="authTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("register")}
                                    className={`pb-2.5 relative transition-colors ${activeTab === "register" ? "text-blue-600 font-bold" : "text-gray-400 hover:text-gray-600"}`}
                                >
                                    {t("auth.btn.register")}
                                    {activeTab === "register" && (
                                        <motion.div layoutId="authTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                                    )}
                                </button>
                            </div>

                            {/* Приветствие */}
                            <div className="mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t("auth.greeting")}</h2>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                                    {activeTab === "login"
                                        ? t("auth.greeting.desc")
                                        : t("auth.greeting.desc.register")}
                                </p>
                            </div>

                            {/* Форма */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                {activeTab === "register" && (
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-gray-700">
                                            {t("booking.placeholder.name") === "How should we address you?" ? "Name" : t("booking.placeholder.name") === "Сизге кантип кайрылуу керек?" ? "Атыңыз" : "Имя"}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            autoComplete="name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder={t("booking.placeholder.name") === "Сизге кантип кайрылуу керек?" ? "Атыңызды киргизиңиз" : "Как вас зовут?"}
                                            className="h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-700">{t("auth.label.email")}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t("auth.placeholder.email")}
                                        className="h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition text-gray-900 placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5 relative">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold text-gray-700">{t("auth.label.password")}</label>
                                        {activeTab === "login" && (
                                            <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                                                {t("auth.forgot.link")}
                                            </a>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            autoComplete={activeTab === "login" ? "current-password" : "new-password"}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder={activeTab === "login" ? t("auth.reset.placeholder.password") : (t("auth.reset.placeholder.password") === "Сырсөздү киргизиңиз" ? "Сырсөз ойлоп табыңыз" : "Придумайте пароль")}
                                            className="w-full h-11 pl-3.5 pr-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition text-gray-900 placeholder:text-gray-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/10 transition active:scale-98 mt-2"
                                >
                                    {activeTab === "login" ? t("auth.btn.login") : t("auth.btn.register")}
                                </button>
                            </form>

                            {/* Разделитель "или" */}
                            <div className="relative flex py-4 items-center">
                                <div className="flex-grow border-t border-gray-100"></div>
                                <span className="flex-shrink mx-3 text-gray-400 text-[11px] font-medium uppercase tracking-wider">{t("auth.or")}</span>
                                <div className="flex-grow border-t border-gray-100"></div>
                            </div>

                            {/* Социальные кнопки */}
                            <div className="flex flex-col gap-2.5">
                                <button type="button" className="w-full h-11 border border-gray-200 rounded-xl flex items-center justify-center gap-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-98 transition shadow-sm">
                                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                                        <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.39 3.67 1.4 7.56l3.77 2.92c.9-2.7 3.42-4.44 6.83-4.44z"/>
                                        <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.65 2.83c2.14-1.97 3.36-4.87 3.36-8.2z"/>
                                        <path fill="#FBBC05" d="M5.17 14.71c-.23-.69-.36-1.43-.36-2.21s.13-1.52.36-2.21L1.4 7.37C.51 9.14 0 11.12 0 13.2s.51 4.06 1.4 5.83l3.77-2.92z"/>
                                        <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.92l-3.65-2.83c-1.1.74-2.51 1.18-4.31 1.18-3.41 0-5.93-1.74-6.83-4.44L1.4 16.92C3.39 20.81 7.35 23 12 23z"/>
                                    </svg>
                                    {t("auth.btn.google")}
                                </button>
                                <button type="button" className="w-full h-11 border border-gray-200 rounded-xl flex items-center justify-center gap-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:scale-98 transition shadow-sm">
                                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 3 .1.04 2.34.18 3-.44z"/>
                                    </svg>
                                    {t("auth.btn.apple")}
                                </button>
                            </div>
                        </div>

                        {/* ПРАВАЯ СТОРОНА: ПРОМО-БЛОК */}
                        <div className="hidden md:flex w-1/2 bg-gray-950 relative p-10 flex-col justify-between border-l border-gray-100 overflow-hidden">
                            {/* Фоновое изображение студентов из макета */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/image/auth-promo.jpg" // Путь к изображению из твоего проекта
                                    alt="Students GetGrant"
                                    fill
                                    className="object-cover opacity-25 brightness-[0.75]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                            </div>

                            {/* Контент поверх картинки */}
                            <div className="relative z-10 text-white mt-auto flex flex-col gap-5">
                                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                                    {t("auth.promo.title")}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                    {t("auth.promo.subtitle")}
                                </p>

                                {/* Список фич */}
                                <div className="flex flex-col gap-3.5 pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <span className="p-1.5 rounded-lg bg-white/10 text-white backdrop-blur-md shrink-0"><GraduationCap size={15} /></span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold">{t("auth.promo.benefit1.title")}</span>
                                            <span className="text-[11px] text-gray-400">{t("auth.promo.benefit1.desc")}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="p-1.5 rounded-lg bg-white/10 text-white backdrop-blur-md shrink-0"><BookOpen size={15} /></span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold">{t("auth.promo.benefit2.title")}</span>
                                            <span className="text-[11px] text-gray-400">{t("auth.promo.benefit2.desc")}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="p-1.5 rounded-lg bg-white/10 text-white backdrop-blur-md shrink-0"><Globe size={15} /></span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold">{t("auth.promo.benefit3.title")}</span>
                                            <span className="text-[11px] text-gray-400">{t("auth.promo.benefit3.desc")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}