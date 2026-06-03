"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutHero() {
    const { t } = useLanguage();

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.p className="text-sm text-gray-400 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    {t("about.label")}
                </motion.p>
                <motion.h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                    <span className="text-slate-900">{t("about.hero.title1")}</span>
                    <br />
                    <span className="text-blue-600">{t("about.hero.title2")}</span>
                </motion.h1>
                <motion.p className="text-base text-slate-600 max-w-3xl mb-8 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                    {t("about.hero.desc")}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
                    <Link href="/Universities" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors group">
                        {t("about.hero.btn")}
                        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}