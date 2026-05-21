"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const checkItems = [
  "Персональный менеджер для каждого студента",
  "Полное сопровождение от выбора до вылета",
  "Прозрачный трекинг статуса поступления",
  "Поддержка родителей на всех этапах",
];

export default function AboutMission() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Левая колонка */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900">Наша миссия</h2>
            <p className="text-slate-600 leading-relaxed">
              Мы верим, что качественное зарубежное образование доступно каждому способному студенту из Центральной Азии — нужно только знать как.
            </p>
            <p className="text-slate-600 leading-relaxed">
              GetGrant убирает барьеры: языковой, информационный, бюрократический. Мы берём на себя всю сложность процесса — от выбора университета до получения визы — чтобы студент мог сосредоточиться на учёбе.
            </p>
            <div className="bg-blue-50/50 rounded-2xl p-6 flex flex-col gap-3">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Правая колонка — фото */}
          <motion.div
            className="relative w-full h-[400px] rounded-[40px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/image/hero-students.jpg"
              alt="Команда GetGrant"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
