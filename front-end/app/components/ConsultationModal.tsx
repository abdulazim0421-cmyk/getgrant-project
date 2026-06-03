"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [agreed, setAgreed] = useState(false);
    const firstInputRef = useRef<HTMLInputElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (isOpen) {
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
            setTimeout(() => firstInputRef.current?.focus(), 100);
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative z-10 w-full max-w-[480px] bg-white rounded-[16px] shadow-2xl p-6 flex flex-col gap-5"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-[#101828]">{t("modal.title")}</h2>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg text-[#667085] hover:bg-[#F2F4F7] transition-colors"
                                aria-label={t("modal.close")}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-[#344054]">{t("modal.name")}</label>
                                    <input
                                        ref={firstInputRef}
                                        type="text"
                                        required
                                        placeholder={t("modal.name.placeholder")}
                                        className="h-10 px-3 rounded-[8px] border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-[#344054]">{t("modal.email")}</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@example.com"
                                        className="h-10 px-3 rounded-[8px] border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-[#344054]">
                                    {t("modal.phone")} <span className="text-[#98A2B3] font-normal">{t("modal.phone.optional")}</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+996 ..."
                                    className="h-10 px-3 rounded-[8px] border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-[#344054]">
                                    {t("modal.message")} <span className="text-[#98A2B3] font-normal">{t("modal.phone.optional")}</span>
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder={t("modal.message.placeholder")}
                                    className="px-3 py-2.5 rounded-[8px] border border-[#D0D5DD] text-sm text-[#101828] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition resize-none"
                                />
                            </div>

                            <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 rounded border-[#D0D5DD] accent-[#2563EB] cursor-pointer flex-shrink-0"
                                />
                                <span className="text-xs text-[#667085] leading-relaxed">
                  {t("modal.agree")}{" "}
                                    <a href="/privacy" className="text-[#2563EB] underline hover:no-underline">
                    {t("modal.agree.link")}
                  </a>
                </span>
                            </label>

                            <div className="grid grid-cols-2 gap-3 pt-1">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="h-10 rounded-[8px] border border-[#D0D5DD] text-sm font-semibold text-[#344054] bg-white hover:bg-[#F9FAFB] transition-colors"
                                >
                                    {t("modal.cancel")}
                                </button>
                                <button
                                    type="submit"
                                    disabled={!agreed}
                                    className="h-10 rounded-[8px] bg-[#2563EB] text-sm font-semibold text-white hover:bg-[#1D4ED8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {t("modal.submit")}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}