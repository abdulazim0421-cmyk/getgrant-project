"use client";

import { useState, useMemo } from "react";
import FilterSidebar, { type Filters } from "./FilterSidebar";
import UniversityGrid from "./UniversityGrid";
import { useLanguage } from "@/app/context/LanguageContext";
import { SlidersHorizontal } from "lucide-react";

const DEFAULT_FILTERS: Filters = { search: "", countries: [], types: [], maxCost: 100000 };
const PAGE_SIZE = 6;

export default function CatalogLayout({ initialUniversities = [] }: { initialUniversities: any[] }) {
    const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const { t } = useLanguage();

    const filtered = useMemo(() => {
        return initialUniversities.filter((uni) => {
            if (filters.search && !uni.name?.toLowerCase().includes(filters.search.toLowerCase())) return false;
            if (filters.countries?.length > 0 && (!uni.location?.country || !filters.countries.includes(uni.location.country))) return false;
            if (filters.types?.length > 0 && !filters.types.includes(uni.type)) return false;
            if (filters.maxCost && uni.cost > filters.maxCost) return false;
            return true;
        });
    }, [filters, initialUniversities]);

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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 pb-24 md:pb-10">
            <div className="mb-6 flex flex-col gap-1">
                <h1 className="text-xl md:text-2xl font-bold text-[#1D2939]">
                    {t("catalog.title") === "catalog.title" ? "Каталог университетов" : (t("catalog.title") || "Каталог университетов")}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                    {t("universities.found")} <span className="font-bold text-gray-900">{filtered.length}</span> {t("universities.found2")}
                </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 items-start">
                <div className="hidden xl:block w-80 shrink-0 xl:sticky xl:top-24">
                    <FilterSidebar
                        filters={filters}
                        onChange={(f) => { setFilters(f); setVisibleCount(PAGE_SIZE); }}
                        onReset={handleReset}
                    />
                </div>

                <div className={`fixed inset-0 z-50 transition-opacity duration-300 xl:hidden ${isMobileFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
                    <div className={`absolute bottom-0 left-0 right-0 top-10 sm:left-auto sm:w-[400px] bg-white rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none flex flex-col shadow-2xl transition-transform duration-300 ease-out transform ${isMobileFilterOpen ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-full"}`}>
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
                            <p className="font-bold text-gray-900 text-lg">{t("filter.title")}</p>
                            <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-400 hover:text-gray-600 text-sm font-medium p-1">
                                {t("common.close") || "Закрыть"}
                            </button>
                        </div>
                        <div className="overflow-y-auto flex-1 p-5">
                            <FilterSidebar
                                filters={filters}
                                onChange={(f) => { setFilters(f); setVisibleCount(PAGE_SIZE); }}
                                onReset={handleReset}
                                isMobile
                                onClose={() => setIsMobileFilterOpen(false)}
                            />
                        </div>
                    </div>
                </div>

                <UniversityGrid
                    universities={visible}
                    total={filtered.length}
                    onShowMore={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    onCollapse={handleCollapse}
                    hasMore={hasMore}
                    canCollapse={canCollapse}
                />
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 flex gap-3 xl:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                <button
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all active:scale-98"
                >
                    <SlidersHorizontal size={16} />
                    {t("filter.title")}
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-white/20 rounded-full min-w-[20px] text-center">
                        {filtered.length}
                    </span>
                </button>
            </div>
        </div>
    );
}