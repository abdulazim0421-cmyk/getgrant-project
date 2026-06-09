"use client";

import { FileText } from "lucide-react";
import type { VisaType } from "./types";
import { useLanguage } from "@/app/context/LanguageContext";

interface CountryVisasProps {
    visaTypes: VisaType[];
}

export default function CountryVisas({ visaTypes }: CountryVisasProps) {
    const { t } = useLanguage();

    return (
        <section className="py-10 sm:py-16 bg-white">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828] mb-5 sm:mb-6 tracking-tight">{t("country.visas")}</h2>
                <div className="flex flex-col gap-3">
                    {visaTypes.map((v, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-[#EAECF0] bg-white shadow-sm">
                            <div className="w-9 h-9 rounded-xl bg-[#1570EF] flex items-center justify-center flex-shrink-0 shadow-sm">
                                <FileText size={16} className="text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-[#101828]">{v.title}</p>
                                <p className="text-xs text-[#667085] mt-1 leading-relaxed">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}