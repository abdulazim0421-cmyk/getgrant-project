"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  { year: "2018", text: "Основание GetGrant. Первые 5 студентов поступили в университеты Великобритании.", side: "left" },
  { year: "2019", text: "Расширение до 50 студентов. Открытие направлений США и Канады.", side: "right" },
  { year: "2020", text: "Переход в онлайн. Запуск курсов подготовки к IELTS и SAT.", side: "left" },
  { year: "2021", text: "Партнёрство с 30+ университетами. 200 успешных поступлений.", side: "right" },
  { year: "2022", text: "Получение лицензии на образовательную деятельность.", side: "left" },
  { year: "2023", text: "Запуск платформы. 500+ студентов. Выход на рынок Казахстана.", side: "right" },
  { year: "2024", text: "Запуск персонального сопровождения и трекинга поступления.", side: "left" },
];

function TimelineCard({ year, text, delay }: { year: string; text: string; delay: number }) {
  return (
    <motion.div
      className="flex items-start gap-3 p-5 bg-white border border-[#EAECF0] rounded-2xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
        <CheckCircle2 size={16} className="text-white" />
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 mb-1">{year}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

export default function AboutHistory() {
  const leftItems  = events.filter((e) => e.side === "left");
  const rightItems = events.filter((e) => e.side === "right");
  const rows = Math.max(leftItems.length, rightItems.length);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">История GetGrant</h2>

        {/* Desktop zigzag */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2" />
          <div className="flex flex-col gap-6">
            {Array.from({ length: rows }).map((_, i) => {
              const left  = leftItems[i];
              const right = rightItems[i];
              return (
                <div key={i} className="grid grid-cols-[1fr_40px_1fr] items-center gap-4">
                  <div className={left ? "" : "invisible"}>
                    {left && <TimelineCard year={left.year} text={left.text} delay={i * 0.1} />}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white z-10" />
                  </div>
                  <div className={right ? "" : "invisible"}>
                    {right && <TimelineCard year={right.year} text={right.text} delay={i * 0.1 + 0.05} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-4 md:hidden">
          {events.map((e, i) => (
            <TimelineCard key={e.year} year={e.year} text={e.text} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
