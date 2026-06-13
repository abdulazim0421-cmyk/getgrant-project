"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ArrowLeft, CalendarDays, Lock, Eye, CheckCircle } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PrivacyPage() {
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
                        {t("privacy.back")}
                    </button>
                </div>

                <div className="border-b border-[#EAECF0] pb-8 mb-10 w-full">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
                        {t("privacy.badge")}
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-none">
                        {t("privacy.title")}
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#667085] mt-4 bg-white border border-[#EAECF0] w-fit px-3 py-1.5 rounded-lg shadow-sm">
                        <CalendarDays size={14} className="text-indigo-500" />
                        <span>{t("privacy.date")}</span>
                    </div>
                </div>

                <div className="bg-white border border-[#EAECF0] rounded-2xl p-6 sm:p-10 xl:p-12 shadow-sm space-y-10 w-full">
                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s1.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("privacy.s1.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s2.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base mb-4">{t("privacy.s2.text")}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {["privacy.s2.1","privacy.s2.2","privacy.s2.3","privacy.s2.4","privacy.s2.5"].map((key, i) => (
                                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] text-sm text-[#344054] font-medium">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                                    {t(key)}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s3.title")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {["privacy.s3.1","privacy.s3.2","privacy.s3.3","privacy.s3.4","privacy.s3.5"].map((key, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-[#344054] bg-[#FAFAFA] p-4 rounded-xl border border-[#F2F7F7]">
                                    <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex-shrink-0">
                                        <Eye size={13} />
                                    </div>
                                    <span>{t(key)}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s4.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("privacy.s4.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s5.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("privacy.s5.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s6.title")}</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">{t("privacy.s6.text")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">{t("privacy.s7.title")}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {["privacy.s7.1","privacy.s7.2","privacy.s7.3","privacy.s7.4"].map((key, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-emerald-50/20 rounded-xl border border-emerald-100/60 text-sm text-[#344054] font-medium">
                                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                                    {t(key)}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pt-6 border-t border-[#EAECF0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Lock size={18} /></div>
                            <div>
                                <h4 className="text-sm font-bold text-[#101828]">{t("privacy.contact.title")}</h4>
                                <p className="text-xs text-[#667085] mt-0.5">{t("privacy.contact.desc")}</p>
                            </div>
                        </div>
                        <a href="mailto:info@getgrant.kg" className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 transition-colors rounded-xl border border-indigo-100 shadow-sm w-fit">
                            {t("privacy.contact.btn")}
                        </a>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}