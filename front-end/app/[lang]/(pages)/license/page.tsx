"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FileText, CheckCircle2, ArrowLeft } from "lucide-react";

const licenses = [
    {
        title: "Лицензия на образовательную деятельность",
        number: "№ 240000733",
        date: "от 01 января 2020 года",
        issuer: "Министерство образования и науки Кыргызской Республики",
        desc: "Подтверждает право GetGrant осуществлять образовательную деятельность на территории Кыргызской Республики, включая подготовительные курсы, консультирование и сопровождение поступления.",
    },
    {
        title: "Свидетельство об аккредитации",
        number: "№ 654321",
        date: "от 15 марта 2021 года",
        issuer: "Национальный аккредитационный орган КР",
        desc: "Подтверждает соответствие образовательных программ и методов обучения GetGrant установленным государственным стандартам качества образования.",
    },
    {
        title: "Членство в ассоциации ICEF",
        number: "ICEF Agency Status",
        date: "с 2021 года",
        issuer: "International Consultants for Education and Fairs (ICEF)",
        desc: "ICEF — международная организация, объединяющая ведущих агентов в сфере международного образования. Членство подтверждает соответствие международным стандартам этики и профессионализма.",
    },
    {
        title: "Аккредитация NAFSA",
        number: "NAFSA Member",
        date: "с 2022 года",
        issuer: "NAFSA: Association of International Educators",
        desc: "NAFSA — крупнейшая в мире ассоциация специалистов в области международного образования. Членство открывает доступ к ресурсам и партнёрствам с ведущими университетами мира.",
    },
];

export default function LicensePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-28 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">

                        {/* ЛЕВАЯ КОЛОНКА: Заголовок и кнопка назад */}
                        <div className="md:sticky md:top-28 space-y-5">
                            <button
                                onClick={() => router.back()}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Назад
                            </button>
                            <div>
                                <h1 className="text-3xl font-extrabold text-[#101828] tracking-tight leading-tight mb-3">
                                    Лицензии и аккредитации
                                </h1>
                                <p className="text-sm text-[#667085] leading-relaxed">
                                    GetGrant работает официально и прозрачно. Все наши лицензии и аккредитации действительны и подтверждают высокое качество оказываемых услуг.
                                </p>
                            </div>
                        </div>

                        {/* ПРАВАЯ КОЛОНКА: Основной контент */}
                        <div className="md:col-span-2 space-y-12">
                            {/* Карточки лицензий */}
                            <div className="flex flex-col gap-5">
                                {licenses.map((l, i) => (
                                    <div key={i} className="flex gap-5 p-6 bg-white border border-[#EAECF0] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <FileText size={22} className="text-white" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-bold text-[#101828]">{l.title}</p>
                                            <p className="text-sm font-semibold text-blue-600">{l.number} · {l.date}</p>
                                            <p className="text-xs text-[#667085] mt-0.5">Выдан: {l.issuer}</p>
                                            <p className="text-sm text-[#344054] leading-relaxed mt-2">{l.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Почему это важно */}
                            <div className="bg-[#F9FAFB] rounded-2xl p-8">
                                <h2 className="text-xl font-bold text-[#101828] mb-5">Почему это важно для вас</h2>
                                <div className="flex flex-col gap-4">
                                    {[
                                        "Вы работаете с официально зарегистрированной организацией",
                                        "Наши специалисты прошли международную сертификацию",
                                        "Университеты-партнёры доверяют нашим рекомендациям",
                                        "Ваши данные и оплата защищены законодательством",
                                        "Мы несём юридическую ответственность за качество услуг",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#344054] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Контакты */}
                            <div className="border-t border-[#EAECF0] pt-8">
                                <p className="text-sm text-[#667085]">
                                    Если у вас есть вопросы о наших лицензиях и аккредитациях, свяжитесь с нами:
                                </p>
                                <div className="mt-3 space-y-1 text-sm text-[#344054] font-medium">
                                    <p>Email: <a href="mailto:info@getgrant.kg" className="text-blue-600 hover:underline">info@getgrant.kg</a></p>
                                    <p>Телефон: <a href="tel:+996554123456" className="text-blue-600 hover:underline">+996 554 123 456</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}