// CountryCosts.tsx
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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-2xl font-bold text-[#101828] mb-8">{t("country.costs")}</h2>
                <div className="rounded-[16px] border border-[#EAECF0] overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                        <tr className="border-b border-[#EAECF0]">
                            {[t("country.costs.category"), t("country.costs.min"), t("country.costs.avg"), t("country.costs.max")].map((h) => (
                                <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#667085]">{h}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {costRows.map((row, i) => (
                            <tr key={i} className="border-b border-[#EAECF0]">
                                <td className="px-5 py-3 text-[#344054]">{row.category}</td>
                                <td className="px-5 py-3 text-[#344054]">{row.min}</td>
                                <td className="px-5 py-3 font-semibold text-[#101828]">{row.avg}</td>
                                <td className="px-5 py-3 text-[#344054]">{row.max}</td>
                            </tr>
                        ))}
                        <tr className="bg-[#F9FAFB]">
                            <td className="px-5 py-3 font-bold text-[#101828]">{t("country.costs.total")}</td>
                            <td className="px-5 py-3 font-bold text-[#101828]">{costTotal.min}</td>
                            <td className="px-5 py-3 font-bold text-[#101828]">{costTotal.avg}</td>
                            <td className="px-5 py-3 font-bold text-[#101828]">{costTotal.max}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}