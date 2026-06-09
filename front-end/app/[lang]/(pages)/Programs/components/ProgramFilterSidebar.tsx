"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const DIRECTIONS = ["Технологии", "Бизнес", "Медицина", "Инженерия", "Искусство", "IT"] as const;
const LEVELS = ["Bachelor", "Master", "PhD", "Pre-Med", "Бакалавриат", "Магистратура"] as const;

export interface ProgramFilters {
    search: string;
    directions: string[];
    levels: string[];
}

interface ProgramFilterSidebarProps {
    filters: ProgramFilters;
    onChange: (filters: ProgramFilters) => void;
    onReset: () => void;
    isMobile?: boolean;
    onClose?: () => void;
}

export default function ProgramFilterSidebar({ filters, onChange, onReset, isMobile = false, onClose }: ProgramFilterSidebarProps) {
    const { t } = useLanguage();

    const toggleItem = (key: "directions" | "levels", value: string) => {
        const current = filters[key];
        const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
        onChange({ ...filters, [key]: updated });
    };

    return (
        <aside className={`w-full flex flex-col gap-6 self-start ${isMobile ? "" : "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"}`}>
            {!isMobile && (
                <p className="font-bold text-gray-900 text-base">
                    {t("programs.filter.title") === "programs.filter.title" ? "Фильтры" : (t("programs.filter.title") || "Фильтры")}
                </p>
            )}

            {/* Поиск */}
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{t("programs.filter.search")}</p>
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder={t("programs.filter.search.placeholder")}
                        value={filters.search}
                        onChange={(e) => onChange({ ...filters, search: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Направления */}
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{t("programs.filter.direction")}</p>
                <div className="flex flex-col gap-2.5 max-h-48 overflow-y-auto pr-1">
                    {DIRECTIONS.map((dir) => (
                        <label key={dir} className="flex items-center gap-3 cursor-pointer group select-none">
                            <input
                                type="checkbox"
                                checked={filters.directions.includes(dir)}
                                onChange={() => toggleItem("directions", dir)}
                                className="w-4.5 h-4.5 rounded-md border-gray-300 text-blue-600 accent-blue-600 cursor-pointer focus:ring-0"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{dir}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Уровни обучения */}
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{t("programs.filter.level")}</p>
                <div className="flex flex-col gap-2.5">
                    {LEVELS.map((level) => (
                        <label key={level} className="flex items-center gap-3 cursor-pointer group select-none">
                            <input
                                type="checkbox"
                                checked={filters.levels.includes(level)}
                                onChange={() => toggleItem("levels", level)}
                                className="w-4.5 h-4.5 rounded-md border-gray-300 text-blue-600 accent-blue-600 cursor-pointer focus:ring-0"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{level}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Кнопки действий с защитой i18n */}
            <div className="flex flex-col gap-2 mt-2 shrink-0">
                {isMobile && onClose && (
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold py-3 rounded-xl transition-all"
                    >
                        {t("filter.apply") === "filter.apply" ? "Применить фильтры" : (t("filter.apply") || "Применить фильтры")}
                    </button>
                )}
                <button
                    onClick={onReset}
                    className={`w-full text-sm font-semibold py-3 rounded-xl transition-all active:scale-95 ${isMobile ? "bg-gray-50 text-gray-600 hover:bg-gray-100" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}`}
                >
                    {t("programs.filter.reset")}
                </button>
            </div>
        </aside>
    );
}