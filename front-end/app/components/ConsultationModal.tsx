"use client";

import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ConsultationModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [phone, setPhone] = useState("");
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

    // Валидация телефона: разрешает только "+" на первой позиции и цифры
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const cleanValue = inputValue.replace(/(?!^\+)[^\d]/g, "");

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
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm fixed"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative z-10 w-full max-w-[520px] bg-white rounded-[32px] shadow-2xl p-8 sm:p-10 flex flex-col gap-6 my-auto"
                        initial={{ opacity: 0, scale: 0.97, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {/* Шапка */}
                        <div className="flex items-center justify-between gap-4">
                            <h2 className="text-xl font-extrabold text-[#0b192c] tracking-tight">
                                {t("modal.consult.title")}
                            </h2>
                            <button
                                onClick={handleClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                                aria-label="Закрыть"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Форма */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* Поле Имени */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#0b192c]">{t("modal.consult.name")}</label>
                                    <input
                                        ref={firstInputRef}
                                        type="text"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder={t("modal.consult.name.placeholder")}
                                        className="h-12 px-4 rounded-xl border border-gray-200 text-sm text-[#0b192c] placeholder:text-gray-400 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition shadow-sm"
                                    />
                                </div>

                                {/* Поле Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#0b192c]">{t("modal.consult.email")}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className="h-12 px-4 rounded-xl border border-gray-200 text-sm text-[#0b192c] placeholder:text-gray-400 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Поле Телефона */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#0b192c]">
                                    {t("modal.consult.phone")}{" "}
                                    <span className="text-gray-400 font-normal text-xs">({t("modal.consult.phone.optional")})</span>
                                </label>
                                <input
                                    type="text"
                                    inputMode="tel"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="+996 ..."
                                    className="h-12 px-4 rounded-xl border border-gray-200 text-sm text-[#0b192c] placeholder:text-gray-400 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition shadow-sm"
                                />
                            </div>

                            {/* Поле Сообщения */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#0b192c]">
                                    {t("modal.consult.message")}{" "}
                                    <span className="text-gray-400 font-normal text-xs">({t("modal.consult.phone.optional")})</span>
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder={t("modal.consult.message.placeholder")}
                                    className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0b192c] placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition shadow-sm resize-none"
                                />
                            </div>

                            {/* Контролируемый Чекбокс */}
                            <label className="flex items-center gap-3 cursor-pointer select-none py-1">
                                <div className="relative flex items-center justify-center flex-shrink-0">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`w-6 h-6 rounded-lg border transition-colors flex items-center justify-center ${
                                        agreed ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                                    }`}>
                                        {agreed && <Check size={14} className="text-blue-600" strokeWidth={3} />}
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 font-medium">
                                    {t("modal.consult.agree")}{" "}
                                    <a href="/privacy" className="text-blue-600 font-semibold hover:underline">
                                        {t("modal.consult.agree.link")}
                                    </a>
                                </span>
                            </label>

                            {/* Кнопки */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="h-12 rounded-xl border border-blue-600 text-base font-bold text-blue-600 bg-white hover:bg-blue-50/30 transition shadow-sm active:scale-98"
                                >
                                    {t("modal.consult.cancel")}
                                </button>
                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className="h-12 rounded-xl bg-[#1a56db] hover:bg-[#1e429f] text-base font-bold text-white transition shadow-md shadow-blue-500/10 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1a56db] disabled:shadow-none"
                                >
                                    {t("modal.consult.submit")}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}