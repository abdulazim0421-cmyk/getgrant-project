"use client";

import UniversityCard from "./UniversityCard";
import { useLanguage } from "@/app/context/LanguageContext";

interface UniversityGridProps {
    universities: any[];
    total: number;
    onShowMore: () => void;
    onCollapse: () => void;
    hasMore: boolean;
    canCollapse: boolean;
}

export default function UniversityGrid({ universities, total, onShowMore, onCollapse, hasMore, canCollapse }: UniversityGridProps) {
    const { t } = useLanguage();

    if (universities.length === 0) {
        return (
            <div className="flex-1 w-full flex items-center justify-center py-20 md:py-32 text-gray-400 text-sm font-medium bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 px-4 text-center">
                {t("universities.notfound")}
            </div>
        );
    }

    return (
        <div className="flex-1 w-full flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6">
                {universities.map((uni) => (
                    <UniversityCard key={uni.id} university={uni} />
                ))}
            </div>

            <div className="flex flex-col items-center gap-4 pt-4 pb-4">
                <div className="w-full max-w-xs bg-gray-100 rounded-full h-1 overflow-hidden">
                    <div
                        className="bg-blue-600 h-1 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${Math.round((universities.length / (total || 1)) * 100)}%` }}
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="hidden sm:block flex-1 h-px bg-gray-100" />

                    <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
                        <p className="text-xs text-gray-400 font-medium text-center">
                            {t("universities.shown")} <span className="font-semibold text-gray-600">{universities.length}</span> {t("universities.of")} <span className="font-semibold text-gray-600">{total}</span> {t("universities.found2")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto justify-center">
                            {hasMore && (
                                <button
                                    onClick={onShowMore}
                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:scale-97 text-white text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md shadow-blue-600/10 whitespace-nowrap"
                                >
                                    {t("universities.showmore")}
                                </button>
                            )}
                            {canCollapse && (
                                <button
                                    onClick={onCollapse}
                                    className="w-full sm:w-auto bg-white hover:bg-gray-50 active:scale-97 text-gray-600 hover:text-gray-900 text-sm font-semibold px-8 py-3 rounded-xl border border-gray-200 transition-all whitespace-nowrap"
                                >
                                    {t("universities.collapse")}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="hidden sm:block flex-1 h-px bg-gray-100" />
                </div>
            </div>
        </div>
    );
}