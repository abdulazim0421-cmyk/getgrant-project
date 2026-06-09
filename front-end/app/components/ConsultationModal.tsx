"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ConsultationModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [phone, setPhone] = useState(""); // Состояние для безопасного ввода телефона
    const firstInputRef = useRef<HTMLInputElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-consultation-modal", handleOpen);
        return () => window.removeEventListener("open-consultation-modal", handleOpen);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
        if (isOpen) {
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
            setTimeout(() => firstInputRef.current?.focus(), 100);
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            if (typeof document !== "undefined") {
                document.body.style.overflow = "unset";
            }
        };
    }, [isOpen]);

    // Функция валидации телефона: разрешает ТОЛЬКО "+" на первой позиции и только цифры
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Разрешаем только "+" в начале и цифры дальше
        const cleanValue = inputValue.replace(/(?!^\+)[^\d]/g, "");

        // Если пользователь стёр всё, очищаем, иначе сохраняем чистые цифры
        if (inputValue === "" || cleanValue === "+" || /^\+?\d*$/.test(cleanValue)) {
            setPhone(cleanValue);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative z-10 w-full max-w-[520px] bg-white rounded-[24px] shadow-2xl p-6 sm:p-8 flex flex-col gap-6"
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-[#101828] tracking-tight">
                                {t("modal.title") || "Получить консультацию"}
                            </h2>
                            <button
                                onClick={handleClose}
                                className="p-2 rounded-full text-[#667085] bg-gray-50 border border-gray-100 hover:bg-red-50 hover:text-red-500 transition-colors"
                                aria-label="Закрыть"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* Поле Имени (Защищено от автозаполнения почты) */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-[#344054]">{t("modal.name") || "Имя"}</label>
                                    <input
                                        ref={firstInputRef}
                                        type="text"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder={t("modal.name.placeholder") || "Как к вам обращаться?"}
                                        className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm"
                                    />
                                </div>

                                {/* Поле Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-[#344054]">{t("modal.email") || "Email"}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Поле Телефона (Защищено от ввода букв) */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-[#344054]">
                                    {t("modal.phone") || "Телефон"}{" "}
                                    <span className="text-[#98A2B3] font-normal text-[11px]">({t("modal.phone.optional") || "опционально"})</span>
                                </label>
                                <input
                                    type="text"
                                    inputMode="tel"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="+996 ..."
                                    className="h-11 px-3.5 rounded-xl border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-[#344054]">
                                    {t("modal.message") || "Сообщение"}{" "}
                                    <span className="text-[#98A2B3] font-normal text-[11px]">({t("modal.phone.optional") || "опционально"})</span>
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder={t("modal.message.placeholder") || "Например: интересуют страны/визы/пакет сопровождения..."}
                                    className="px-3.5 py-3 rounded-xl border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition shadow-sm resize-none"
                                />
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer select-none py-1">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 rounded border-[#D0D5DD] accent-blue-600 cursor-pointer flex-shrink-0"
                                />
                                <span className="text-[11px] sm:text-xs text-[#667085] leading-relaxed">
                                    {t("modal.agree") || "Я согласен на обработку"}{" "}
                                    <a href="/privacy" className="text-blue-600 underline hover:no-underline font-medium">
                                        {t("modal.agree.link") || "персональных данных"}
                                    </a>
                                </span>
                            </label>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="h-11 rounded-xl border border-[#D0D5DD] text-sm font-bold text-[#344054] bg-white hover:bg-[#F9FAFB] transition-colors active:scale-98"
                                >
                                    {t("modal.cancel") || "Отменить"}
                                </button>
                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className="h-11 rounded-xl bg-[#84a9ff] text-sm font-bold text-white hover:bg-[#6c96f8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors active:scale-98 shadow-sm"
                                >
                                    {t("modal.submit") || "Отправить"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}