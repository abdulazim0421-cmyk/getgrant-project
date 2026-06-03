"use client";

import { Target, Heart, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutValues() {
    const { t } = useLanguage();

    const values = [
        { icon: <Target size={18} className="text-white" />, title: t("about.values.1.title"), desc: t("about.values.1.desc") },
        { icon: <Heart size={18} className="text-white" />, title: t("about.values.2.title"), desc: t("about.values.2.desc") },
        { icon: <Zap size={18} className="text-white" />, title: t("about.values.3.title"), desc: t("about.values.3.desc") },
        { icon: <ShieldCheck size={18} className="text-white" />, title: t("about.values.4.title"), desc: t("about.values.4.desc") },
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">{t("about.values.title")}</h2>
                    <p className="mt-2 text-slate-500 text-sm">{t("about.values.subtitle")}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v, i) => (
                        <motion.div key={v.title} className="flex flex-col gap-4 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">{v.icon}</div>
                            <p className="text-base font-bold text-slate-900">{v.title}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}