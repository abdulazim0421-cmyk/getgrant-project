"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ArrowLeft, Check, CalendarDays, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TermsPage() {
    const router = useRouter();
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#FCFCFD] text-[#101828] selection:bg-blue-50 selection:text-blue-700 antialiased flex flex-col justify-between">
            <Header />
            <main className="pt-32 pb-24 lg:pt-36 w-full px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="mb-8">
                    <button onClick={() => router.back()} className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#475467] hover:text-blue-600 transition-colors group">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#EAECF0] shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all">
                            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform text-[#475467] group-hover:text-blue-600" />
                        </span>
                        {t("terms.back")}
                    </button>
                </div>

                <div className="border-b border-[#EAECF0] pb-8 mb-10 w-full">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                        {t("terms.badge")}
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-none">
                        {t("terms.title")}
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#667085] mt-4 bg-white border border-[#EAECF0] w-fit px-3 py-1.5 rounded-lg shadow-sm">
                        <CalendarDays size={14} className="text-blue-500" />
                        <span>{t("terms.date")}</span>
                    </div>
                </div>

                <div className="bg-white border border-[#EAECF0] rounded-2xl p-6 sm:p-10 xl:p-12 shadow-sm space-y-10 w-full">
                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s1.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s1.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s2.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base mb-4">{t("terms.s2.text")}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#F9FAFB] p-6 rounded-xl border border-[#EAECF0]">
                            {["terms.s2.1","terms.s2.2","terms.s2.3","terms.s2.4","terms.s2.5","terms.s2.6"].map((key, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-sm text-[#344054] font-medium">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex-shrink-0">
                                        <Check size={13} strokeWidth={3} />
                                    </span>
                                    {t(key)}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s3.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s3.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s4.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s4.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s5.title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {["terms.s5.1","terms.s5.2","terms.s5.3","terms.s5.4","terms.s5.5"].map((key, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-[#344054] bg-[#FAFAFA] p-3 rounded-xl border border-[#F2F4F7]">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                    <span>{t(key)}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s6.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s6.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s7.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s7.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s8.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s8.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("terms.s9.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("terms.s9.text")}</p>
                    </section>

                    <section className="pt-4">
                        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/50 border border-blue-100/70 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><Mail size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">Email</p>
                                    <a href="mailto:info@getgrant.kg" className="text-sm font-semibold text-blue-600 hover:underline">info@getgrant.kg</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><Phone size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">Телефон</p>
                                    <a href="tel:+996554123456" className="text-sm font-semibold text-blue-600 hover:underline">+996 554 123 456</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><MapPin size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">Адрес</p>
                                    <p className="text-sm font-semibold text-[#344054]">г. Бишкек, ул. Тыныстанова, 197/1</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}