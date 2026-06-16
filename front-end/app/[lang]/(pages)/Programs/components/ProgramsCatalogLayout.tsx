"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProgramFilterSidebar, { type ProgramFilters } from "./ProgramFilterSidebar";
import ProgramsGrid from "./ProgramsGrid";
import { useLanguage } from "@/app/context/LanguageContext";

const DEFAULT_FILTERS: ProgramFilters = { search: "", directions: [], levels: [] };
const PAGE_SIZE = 6;

export default function ProgramsCatalogLayout({ initialPrograms = [] }: { initialPrograms: any[] }) {
    const [filters, setFilters] = useState<ProgramFilters>(DEFAULT_FILTERS);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const { t } = useLanguage();

    const normalizedPrograms = useMemo(() => {
        return initialPrograms.map((p) => {
            if (typeof p.image === "string" && p.image.trim() !== "") {
                return { ...p, image: { url: p.image } };
            }
            return { ...p, image: p.image || null };
        });
    }, [initialPrograms]);

    const filtered = useMemo(() => {
        return normalizedPrograms.filter((p) => {
            if (filters.search && !p.name?.toLowerCase().includes(filters.search.toLowerCase())) return false;
            if (filters.directions.length && !filters.directions.includes(p.category)) return false;
            if (filters.levels.length && !filters.levels.includes(p.degree)) return false;
            return true;
        });
    }, [filters, normalizedPrograms]);

    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;
    const canCollapse = visibleCount > PAGE_SIZE;

    const handleReset = () => {
        setFilters(DEFAULT_FILTERS);
        setVisibleCount(PAGE_SIZE);
    };

    const handleCollapse = () => {
        setVisibleCount(PAGE_SIZE);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        // Класс max-w-7xl заменен на max-w-[1440px] для соответствия сетке остальных секций
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 pb-24 md:pb-10">
            {/* Заголовок и счетчик в едином стиле без нижних бордеров */}
            <div className="mb-6 flex flex-col gap-1">
                <h1 className="text-xl md:text-2xl font-bold text-[#1D2939]">
                    {t("programs.catalog") === "programs.catalog" ? "Каталог программ" : (t("programs.catalog") || "Каталог программ")}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                    {t("programs.found")} <span className="font-bold text-gray-900">{filtered.length}</span> {t("programs.found2")}
                </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 items-start">
                {/* Десктопный сайдбар (скрыт на мобилках и планшетах) */}
                <div className="hidden xl:block w-80 shrink-0 xl:sticky xl:top-24">
                    <ProgramFilterSidebar
                        filters={filters}
                        onChange={(f) => { setFilters(f); setVisibleCount(PAGE_SIZE); }}
                        onReset={handleReset}
                    />
                </div>

                {/* Мобильная шторка фильтров (выезжает плавно) */}
                <div className={`fixed inset-0 z-50 transition-opacity duration-300 xl:hidden ${isMobileFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
                    <div className={`absolute bottom-0 left-0 right-0 top-10 sm:left-auto sm:w-[400px] bg-white rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none flex flex-col shadow-2xl transition-transform duration-300 ease-out transform ${isMobileFilterOpen ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-full"}`}>
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
                            <p className="font-bold text-gray-900 text-lg">
                                {t("programs.filter.title") === "programs.filter.title" ? "Фильтры" : (t("programs.filter.title") || "Фильтры")}
                            </p>
                            <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-400 hover:text-gray-600 text-sm font-medium p-1">
                                {t("common.close") || "Закрыть"}
                            </button>
                        </div>
                        <div className="overflow-y-auto flex-1 p-5">
                            <ProgramFilterSidebar
                                filters={filters}
                                onChange={(f) => { setFilters(f); setVisibleCount(PAGE_SIZE); }}
                                onReset={handleReset}
                                isMobile
                                onClose={() => setIsMobileFilterOpen(false)}
                            />
                        </div>
                    </div>
                </div>

                {/* Сетка результатов */}
                <ProgramsGrid
                    programs={visible}
                    total={filtered.length}
                    onShowMore={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    onCollapse={handleCollapse}
                    hasMore={hasMore}
                    canCollapse={canCollapse}
                />
            </div>

            {/* Фиксированная плашка снизу экрана для мобилок и планшетов */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 flex gap-3 xl:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all active:scale-98"
                >
                    <SlidersHorizontal size={16} />
                    {t("programs.filter.title") === "programs.filter.title" ? "Фильтры" : (t("programs.filter.title") || "Фильтры")}
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-white/20 rounded-full min-w-[20px] text-center">
                        {filtered.length}
                    </span>
                </button>
            </div>
        </div>
    );
}