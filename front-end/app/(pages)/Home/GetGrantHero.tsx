"use client";

import Image from "next/image";
import { Star, Target, Zap, Clock3, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

// Открывает модалку консультации через кастомный событие
function openConsultationModal() {
  window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

export default function GetGrantHero() {
    const stats = [
        { value: "500+", label: "Поступивших студентов" },
        { value: "50+", label: "Университетов-партнёров" },
        { value: "15+", label: "Стран для обучения" },
    ];

    return (
        <section className="relative w-full min-h-screen py-10 md:py-14 bg-white text-gray-900 overflow-hidden flex items-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,#eef2ff_0%,#fff_100%)]"></div>

            <div className="container mx-auto px-6 lg:px-12 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="flex flex-col space-y-8">
                        {/* Бейдж */}
                        <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-[#D1E9FF] text-blue-700 border border-blue-100/50 shadow-sm">
                            <Star size={14} className="text-blue-600 fill-blue-600" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                                Лицензированный образовательный центр
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-[40px] sm:text-[70px] md:text-[82px] uppercase font-semibold leading-[1.2] text-gray-950">
                                поступи в <br />
                                <span className="text-blue-600">
                                    зарубежный <br />
                                    <span className="inline-block">университет</span>
                                </span>
                            </h1>
                            <p className="max-w-md text-lg text-gray-600 font-medium leading-relaxed">
                                Профессиональная подготовка и полное сопровождение для учеников 9–11 классов.
                                От выбора университета до успешного поступления.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                onClick={openConsultationModal}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                            >
                                Получить консультацию
                            </Button>
                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-7 rounded-xl font-bold text-lg transition-all active:scale-95">
                                Начать подготовку
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="mt-6 py-8 px-2 md:py-10 md:px-10 bg-[#F8F9FB] rounded-[20px] flex flex-wrap gap-x-6 lg:gap-x-10 gap-y-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col space-y-1">
                                    <span className="text-4xl md:text-4xl font-semibold tracking-tighter text-[#101828]">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-medium text-[#667085] leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="relative w-full aspect-[4/4.5] rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10">
                            <Image
                                src="/image/hero-students.jpg"
                                alt="Students in University"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[32px] bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl flex items-center gap-4 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                                    <Clock3 size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-black text-gray-950 leading-none">
                                        Индивидуальный менеджер
                                    </span>
                                    <span className="text-[13px] font-bold text-gray-500 mt-1">
                                        Персональное сопровождение 24/7
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}