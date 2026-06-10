"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FileText, CheckCircle2, ArrowLeft, ShieldCheck, Award, Landmark } from "lucide-react";

const licenses = [
    {
        title: "Лицензия на образовательную деятельность",
        number: "№ 240000733",
        date: "от 01 января 2020 года",
        issuer: "Министерство образования и науки Кыргызской Республики",
        desc: "Подтверждает право GetGrant осуществлять образовательную деятельность на территории Кыргызской Республики, включая подготовительные курсы, консультирование и сопровождение поступления.",
        icon: Landmark,
    },
    {
        title: "Свидетельство об аккредитации",
        number: "№ 654321",
        date: "от 15 марта 2021 года",
        issuer: "Национальный аккредитационный орган КР",
        desc: "Подтверждает соответствие образовательных программ и методов обучения GetGrant установленным государственным стандартам качества образования.",
        icon: ShieldCheck,
    },
    {
        title: "Членство в ассоциации ICEF",
        number: "ICEF Agency Status",
        date: "с 2021 года",
        issuer: "International Consultants for Education and Fairs (ICEF)",
        desc: "ICEF — международная организация, объединяющая ведущих агентов в сфере международного образования. Членство подтверждает соответствие международным стандартам этики и профессионализма.",
        icon: Award,
    },
    {
        title: "Аккредитация NAFSA",
        number: "NAFSA Member",
        date: "с 2022 года",
        issuer: "NAFSA: Association of International Educators",
        desc: "NAFSA — крупнейшая в мире ассоциация специалистов в области международного образования. Членство открывает доступ к ресурсам и партнёрствам с ведущими университетами мира.",
        icon: FileText,
    },
];

export default function LicensePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#FCFCFD] text-[#101828] selection:bg-blue-50 selection:text-blue-700 antialiased flex flex-col justify-between">
            <Header />

            <main className="pt-32 pb-24 lg:pt-36 w-full px-4 sm:px-8 lg:px-16 xl:px-24">

                {/* Кнопка Назад */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#475467] hover:text-blue-600 transition-colors group"
                    >
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#EAECF0] shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all">
                            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform text-[#475467] group-hover:text-blue-600" />
                        </span>
                        Назад
                    </button>
                </div>

                {/* Шапка страницы */}
                <div className="border-b border-[#EAECF0] pb-8 mb-10 w-full">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                        Официальный статус
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-none">
                        Лицензии и аккредитации
                    </h1>
                    <p className="text-sm text-[#475467] mt-3 max-w-none leading-relaxed">
                        GetGrant осуществляет деятельность строго в рамках правового поля Кыргызской Республики. Мы гарантируем легитимность каждого этапа вашего поступления.
                    </p>
                </div>

                {/* Контентные карточки на всю ширину */}
                <div className="space-y-10 w-full">
                    {/* Сетка перестраивается на 3 колонки на больших экранах, чтобы карточки не были слишком растянутыми по горизонтали */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                        {licenses.map((l, i) => {
                            const IconComponent = l.icon;
                            return (
                                <div key={i} className="group relative flex flex-col sm:flex-row gap-5 p-6 bg-white border border-[#EAECF0] rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-blue-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <IconComponent size={22} />
                                    </div>
                                    <div className="flex flex-col gap-1.5 flex-1">
                                        <h3 className="text-lg font-bold text-[#101828] group-hover:text-blue-900 transition-colors">{l.title}</h3>
                                        <div className="flex items-center gap-x-2 text-xs font-semibold text-blue-600 bg-blue-50/50 border border-blue-100/60 w-fit px-2.5 py-0.5 rounded-md">
                                            <span>{l.number}</span>
                                            <span className="text-blue-300">·</span>
                                            <span>{l.date}</span>
                                        </div>
                                        <p className="text-xs font-medium text-[#667085] mt-1">Выдан: {l.issuer}</p>
                                        <p className="text-sm text-[#344054] leading-relaxed mt-2.5 font-normal">{l.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="border border-[#EAECF0] rounded-2xl bg-[#F9FAFB] p-8 shadow-inner w-full">
                        <h2 className="text-xl font-bold text-[#101828] mb-6">Гарантия юридической безопасности</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                "Официальный статус юридического лица",
                                "Международная сертификация экспертов",
                                "Прямые соглашения с топ-вузами мира",
                                "Защита платежей по стандартам КР",
                                "Юридическая ответственность по договору",
                                "Полная конфиденциальность досье"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white transition-colors">
                                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#344054] font-medium leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}