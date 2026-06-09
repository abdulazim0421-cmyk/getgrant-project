"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

function openModal() {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

const licenses = [
    { title: "Лицензия на образовательную деятельность", detail: "№ 240000733, от 01.01.2020" },
    { title: "Свидетельство об аккредитации",            detail: "№ 654321, от 15.03.2021" },
    { title: "Член ассоциации ICEF",                     detail: "ICEF Agency Status, с 2021 года" },
    { title: "Аккредитация NAFSA",                       detail: "NAFSA Member, с 2022 года" },
];

export default function AboutLicenses() {
    const { t } = useLanguage();

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold text-slate-900">{t("about.licenses.title")}</h2>
                <p className="mt-2 text-sm text-slate-500 mb-10">{t("about.licenses.subtitle")}</p>
                <div className="flex flex-col gap-4 mb-16">
                    {licenses.map((l, i) => (
                        <motion.div key={l.title} className="flex items-center gap-4 p-5 bg-white border border-[#EAECF0] rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:bg-slate-50" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.08 }}>
                            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0"><FileText size={18} className="text-white" /></div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">{l.title}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{l.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div className="bg-slate-50 rounded-[40px] py-16 px-8 flex flex-col items-center text-center gap-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <h2 className="text-2xl font-bold text-slate-900">{t("about.licenses.cta.title")}</h2>
                    <p className="text-sm text-slate-500 max-w-md leading-relaxed">{t("about.licenses.cta.desc")}</p>
                    <button onClick={openModal} className="px-8 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200">
                        {t("about.licenses.cta.btn")}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}