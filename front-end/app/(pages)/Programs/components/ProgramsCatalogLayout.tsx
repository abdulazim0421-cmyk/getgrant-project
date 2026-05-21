"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProgramFilterSidebar, {
    type ProgramFilters,
} from "./ProgramFilterSidebar";
import ProgramsGrid from "./ProgramsGrid";
import { mockPrograms } from "../data/ mockPrograms";

const DEFAULT_FILTERS: ProgramFilters = {
    search: "",
    directions: [],
    levels: [],
};

const PAGE_SIZE = 6;

export default function ProgramsCatalogLayout() {
    const [filters, setFilters] = useState<ProgramFilters>(DEFAULT_FILTERS);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const filtered = useMemo(() => {
        return mockPrograms.filter((p) => {
            if (
                filters.search &&
                !p.title.toLowerCase().includes(filters.search.toLowerCase())
            )
                return false;
            if (
                filters.directions.length &&
                !filters.directions.includes(p.direction)
            )
                return false;
            if (filters.levels.length && !filters.levels.includes(p.level))
                return false;
            return true;
        });
    }, [filters]);

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

    const hasActiveFilters =
        filters.directions.length > 0 ||
        filters.levels.length > 0 ||
        !!filters.search;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
            {/* Page header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Каталог программ
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                    Найдено {filtered.length} программ обучения
                </p>
            </div>

            {/* Mobile filter toggle */}
            <div className="xl:hidden mb-4">
                <button
                    onClick={() => setMobileFilterOpen((v) => !v)}
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-200 bg-blue-50 px-4 py-2.5 rounded-lg hover:bg-blue-100 transition-colors"
                >
                    <SlidersHorizontal size={16} />
                    {mobileFilterOpen ? "Скрыть фильтры" : "Показать фильтры"}
                    {hasActiveFilters && (
                        <span className="ml-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              !
            </span>
                    )}
                </button>
            </div>

            {/* Layout */}
            <div className="flex flex-col xl:flex-row gap-6 items-start">
                {/* Sticky sidebar */}
                <div
                    className={`w-full xl:w-80 shrink-0 xl:sticky xl:top-24 ${
                        mobileFilterOpen ? "block" : "hidden xl:block"
                    }`}
                >
                    <ProgramFilterSidebar
                        filters={filters}
                        onChange={(f) => {
                            setFilters(f);
                            setVisibleCount(PAGE_SIZE);
                        }}
                        onReset={handleReset}
                    />
                </div>

                {/* Grid */}
                <ProgramsGrid
                    programs={visible}
                    total={filtered.length}
                    onShowMore={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    onCollapse={handleCollapse}
                    hasMore={hasMore}
                    canCollapse={canCollapse}
                />
            </div>
        </div>
    );
}
