"use client";

import { Search } from "lucide-react";

const DIRECTIONS = [
    "Технологии",
    "Бизнес",
    "Медицина",
    "Инженерия",
    "Искусство",
] as const;

const LEVELS = ["Bachelor", "Master", "PhD", "Pre-Med"] as const;

export interface ProgramFilters {
    search: string;
    directions: string[];
    levels: string[];
}

interface ProgramFilterSidebarProps {
    filters: ProgramFilters;
    onChange: (filters: ProgramFilters) => void;
    onReset: () => void;
}

export default function ProgramFilterSidebar({
                                                 filters,
                                                 onChange,
                                                 onReset,
                                             }: ProgramFilterSidebarProps) {
    const toggleItem = (
        key: "directions" | "levels",
        value: string
    ) => {
        const current = filters[key];
        const updated = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        onChange({ ...filters, [key]: updated });
    };

    return (
        <aside className="w-full xl:w-80 shrink-0 bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-6 self-start">
            <p className="font-bold text-gray-900 text-base">Фильтр</p>

            {/* Search */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Поиск</p>
                <div className="relative">
                    <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Название программы"
                        value={filters.search}
                        onChange={(e) => onChange({ ...filters, search: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Direction */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Направление</p>
                <div className="flex flex-col gap-2">
                    {DIRECTIONS.map((dir) => (
                        <label
                            key={dir}
                            className="flex items-center gap-2.5 cursor-pointer group"
                        >
                            <input
                                type="checkbox"
                                checked={filters.directions.includes(dir)}
                                onChange={() => toggleItem("directions", dir)}
                                className="w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {dir}
              </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Level */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Уровень</p>
                <div className="flex flex-col gap-2">
                    {LEVELS.map((level) => (
                        <label
                            key={level}
                            className="flex items-center gap-2.5 cursor-pointer group"
                        >
                            <input
                                type="checkbox"
                                checked={filters.levels.includes(level)}
                                onChange={() => toggleItem("levels", level)}
                                className="w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {level}
              </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Reset */}
            <button
                onClick={onReset}
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium py-2.5 rounded-md transition-all"
            >
                Сбросить фильтр
            </button>
        </aside>
    );
}
