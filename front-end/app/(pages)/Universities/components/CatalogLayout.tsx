"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import FilterSidebar, { type Filters } from "./FilterSidebar";
import UniversityGrid from "./UniversityGrid";

const DEFAULT_FILTERS: Filters = {
    search: "",
    countries: [],
    types: [],
    maxCost: 100000,
};

const PAGE_SIZE = 6;

// Принимаем реальные данные из Strapi через props
export default function CatalogLayout({ universities = [] }: { universities: any[] }) {
    const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const filtered = useMemo(() => {
        return universities.filter((u) => {
            // В Strapi все поля лежат внутри u.attributes
            const attr = u.attributes;
            if (!attr) return false;

            // Фильтр по названию
            if (
                filters.search &&
                !attr.name?.toLowerCase().includes(filters.search.toLowerCase())
            )
                return false;

            // Фильтр по странам
            if (
                filters.countries.length &&
                !filters.countries.includes(attr.country) // Используем прямое поле country из вашей структуры
            )
                return false;

            // Фильтр по типу (Частный / Государственный)
            if (filters.types.length && !filters.types.includes(attr.type))
                return false;

            // Фильтр по стоимости
            if (attr.cost > filters.maxCost) return false;

            return true;
        });
    }, [filters, universities]);

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
        filters.countries.length > 0 ||
        filters.types.length > 0 ||
        !!filters.search ||
        filters.maxCost < 100000;

    return (
        <div className="max-w-7xl mx-auto py-10">
            {/* Статистика поиска */}
            <div className="mb-6">
                <p className="text-sm text-gray-500">
                    Найдено {filtered.length} университетов
                </p>
            </div>

            {/* Кнопка фильтров на мобилках */}
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

            {/* Контентная сетка */}
            <div className="flex flex-col xl:flex-row gap-6 items-start">
                {/* Сайдбар */}
                <div
                    className={`w-full xl:w-80 shrink-0 xl:sticky xl:top-24 ${
                        mobileFilterOpen ? "block" : "hidden xl:block"
                    }`}
                >
                    <FilterSidebar
                        filters={filters}
                        onChange={(f) => {
                            setFilters(f);
                            setVisibleCount(PAGE_SIZE);
                        }}
                        onReset={handleReset}
                    />
                </div>

                {/* Сетка карточек — сюда передаем отфильтрованные реальные карточки */}
                <UniversityGrid
                    universities={visible}
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