"use client";

import { Target, Heart, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: <Target    size={18} className="text-white" />, title: "Результат",    desc: "Мы фокусируемся на реальном поступлении, а не просто на консультациях. Каждый студент получает персональный план." },
  { icon: <Heart     size={18} className="text-white" />, title: "Забота",        desc: "Понимаем, что поступление за рубеж — стресс для всей семьи. Поддерживаем на каждом шаге 24/7." },
  { icon: <Zap       size={18} className="text-white" />, title: "Эффективность", desc: "Никакой воды — только конкретные шаги, дедлайны и чёткий план подготовки." },
  { icon: <ShieldCheck size={18} className="text-white" />, title: "Честность",  desc: "Говорим правду о шансах поступления, стоимости и сложностях. Никаких пустых обещаний." },
];

export default function AboutValues() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Наши ценности</h2>
          <p className="mt-2 text-slate-500 text-sm">Принципы, которые лежат в основе всего что мы делаем</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="flex flex-col gap-4 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                {v.icon}
              </div>
              <p className="text-base font-bold text-slate-900">{v.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
