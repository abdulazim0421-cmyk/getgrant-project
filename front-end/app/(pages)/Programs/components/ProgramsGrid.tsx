"use client";

import ProgramCard from "./ProgramCard";
import type { Program } from "../data/mockPrograms";
import { useLanguage } from "@/app/context/LanguageContext";

interface ProgramsGridProps {
    programs: Program[];
    total: number;
    onShowMore: () => void;
    onCollapse: () => void;
    hasMore: boolean;
    canCollapse: boolean;
}

export default function ProgramsGrid({ programs, total, onShowMore, onCollapse, hasMore, canCollapse }: ProgramsGridProps) {
    const { t } = useLanguage();

    if (programs.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center py-24 text-gray-400 text-sm">
                {t("programs.grid.notfound")}
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program) => (<ProgramCard key={program.id} program={program} />))}
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 pb-6">
                <div className="w-full bg-gray-100 rounded-full h-1">
                    <div className="bg-blue-600 h-1 rounded-full transition-all duration-500" style={{ width: `${Math.round((programs.length / (total || 1)) * 100)}%` }} />
                </div>

                <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 h-px bg-gray-100" />
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-xs text-gray-400">
                            {t("programs.grid.shown")}{" "}
                            <span className="font-semibold text-gray-600">{programs.length}</span>{" "}
                            {t("programs.grid.of")}{" "}
                            <span className="font-semibold text-gray-600">{total}</span>{" "}
                            {t("programs.grid.label")}
                        </p>
                        <div className="flex items-center gap-3">
                            {hasMore && (
                                <button onClick={onShowMore} className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium px-8 py-2.5 rounded-lg transition-all shadow-md shadow-blue-600/20 whitespace-nowrap">
                                    {t("programs.grid.showmore")}
                                </button>
                            )}
                            {canCollapse && (
                                <button onClick={onCollapse} className="bg-white hover:bg-gray-50 active:scale-95 text-gray-600 hover:text-gray-900 text-sm font-medium px-8 py-2.5 rounded-lg border border-gray-200 transition-all whitespace-nowrap">
                                    {t("programs.grid.collapse")}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex-1 h-px bg-gray-100" />
                </div>
            </div>
        </div>
    );
}