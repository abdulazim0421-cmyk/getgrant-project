"use client";

import { GraduationCap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: <GraduationCap size={20} className="text-white" />, value: "500+", label: "Поступивших студентов" },
  { icon: <GraduationCap size={20} className="text-white" />, value: "50+",  label: "Университетов-партнёров" },
  { icon: <GraduationCap size={20} className="text-white" />, value: "15+",  label: "Стран для обучения" },
  { icon: <TrendingUp    size={20} className="text-white" />, value: "95%",  label: "Уровень успеха" },
];

export default function AboutStats() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="bg-white/10 p-3 rounded-lg">{s.icon}</div>
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
