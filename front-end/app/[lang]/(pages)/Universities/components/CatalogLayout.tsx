"use client";

import { useState, useMemo } from "react";
import FilterSidebar, { type Filters } from "./FilterSidebar";
import UniversityGrid from "./UniversityGrid";
import { useLanguage } from "@/app/context/LanguageContext";

const DEFAULT_FILTERS: Filters = { search: "", countries: [], types: [], maxCost: 100000 };
const PAGE_SIZE = 6;

export default function CatalogLayout({ initialUniversities = [] }: { initialUniversities: any[] }) {
    const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
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

    const handleReset = () => { setFilters(DEFAULT_FILTERS); setVisibleCount(PAGE_SIZE); };
    const handleCollapse = () => { setVisibleCount(PAGE_SIZE); window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-6">
                <p className="text-sm font-medium text-gray-600">
                    {t("universities.found")} <span className="font-bold text-gray-900">{filtered.length}</span> {t("universities.found2")}
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 items-start">
                <div className="w-full xl:w-80 shrink-0 xl:sticky xl:top-24">
                    <FilterSidebar filters={filters} onChange={(f) => { setFilters(f); setVisibleCount(PAGE_SIZE); }} onReset={handleReset} />
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
        </div>
    );
}