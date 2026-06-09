"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutMission() {
    const { t } = useLanguage();

    const checkItems = [
        t("about.mission.check1"),
        t("about.mission.check2"),
        t("about.mission.check3"),
        t("about.mission.check4"),
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <h2 className="text-3xl font-bold text-slate-900">{t("about.mission.title")}</h2>
                        <p className="text-slate-600 leading-relaxed">{t("about.mission.p1")}</p>
                        <p className="text-slate-600 leading-relaxed">{t("about.mission.p2")}</p>
                        <div className="bg-blue-50/50 rounded-2xl p-6 flex flex-col gap-3">
                            {checkItems.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                                    <span className="text-sm text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="relative w-full h-[400px] rounded-[40px] overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                        <Image src="/image/hero-students.jpg" alt="Команда GetGrant" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}