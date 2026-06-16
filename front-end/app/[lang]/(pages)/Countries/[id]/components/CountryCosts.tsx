"use client";

import type { CostRow, CostTotal } from "./types";
import { useLanguage } from "@/app/context/LanguageContext";

interface CountryCostsProps {
    costRows: CostRow[];
    costTotal: CostTotal;
}

export default function CountryCosts({ costRows, costTotal }: CountryCostsProps) {
    const { t } = useLanguage();

    return (
        <section className="py-10 sm:py-16 bg-white">
            {/* Ограничение ширины изменено на max-w-[1440px] */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828] mb-5 sm:mb-8 tracking-tight">
                    {t("country.costs")}
                </h2>

                <div className="w-full overflow-x-auto rounded-2xl border border-[#EAECF0] shadow-sm bg-white">
                    <table className="w-full text-sm text-left border-collapse min-w-[540px]">
                        <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#EAECF0]">
                            {[t("country.costs.category"), t("country.costs.min"), t("country.costs.avg"), t("country.costs.max")].map((h) => (
                                <th key={h} className="px-5 py-3.5 text-xs font-semibold text-[#667085]">{h}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {costRows.map((row, i) => (
                            <tr key={i} className="border-b border-[#EAECF0] hover:bg-slate-50/50 transition-colors">
                                <td className="px-5 py-3.5 text-xs sm:text-sm text-[#344054]">{row.category}</td>
                                <td className="px-5 py-3.5 text-xs sm:text-sm text-[#344054]">{row.min} $</td>
                                <td className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#101828]">{row.avg} $</td>
                                <td className="px-5 py-3.5 text-xs sm:text-sm text-[#344054]">{row.max} $</td>
                            </tr>
                        ))}
                        <tr className="bg-[#F9FAFB] font-bold">
                            <td className="px-5 py-4 text-xs sm:text-sm text-[#101828]">{t("country.costs.total")}</td>
                            <td className="px-5 py-4 text-xs sm:text-sm text-[#101828]">{costTotal.min} $</td>
                            <td className="px-5 py-4 text-xs sm:text-sm text-blue-600">{costTotal.avg} $</td>
                            <td className="px-5 py-4 text-xs sm:text-sm text-[#101828]">{costTotal.max} $</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}