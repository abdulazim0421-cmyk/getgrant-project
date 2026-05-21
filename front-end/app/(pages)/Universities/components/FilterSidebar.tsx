"use client";

import { Search } from "lucide-react";

const COUNTRIES = [
    "США",
    "Великобритания",
    "Германия",
    "Франция",
    "Япония",
    "Австралия",
];
const TYPES = ["Частный", "Государственный"];

export interface Filters {
    search: string;
    countries: string[];
    types: string[];
    maxCost: number;
}

interface FilterSidebarProps {
    filters: Filters;
    onChange: (filters: Filters) => void;
    onReset: () => void;
}

export default function FilterSidebar({
                                          filters,
                                          onChange,
                                          onReset,
                                      }: FilterSidebarProps) {
    const toggleItem = (key: "countries" | "types", value: string) => {
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
                        placeholder="Название университета"
                        value={filters.search}
                        onChange={(e) => onChange({ ...filters, search: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Countries */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Страна</p>
                <div className="flex flex-col gap-2">
                    {COUNTRIES.map((country) => (
                        <label
                            key={country}
                            className="flex items-center gap-2.5 cursor-pointer group"
                        >
                            <input
                                type="checkbox"
                                checked={filters.countries.includes(country)}
                                onChange={() => toggleItem("countries", country)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {country}
              </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Type */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                    Тип университета
                </p>
                <div className="flex flex-col gap-2">
                    {TYPES.map((type) => (
                        <label
                            key={type}
                            className="flex items-center gap-2.5 cursor-pointer group"
                        >
                            <input
                                type="checkbox"
                                checked={filters.types.includes(type)}
                                onChange={() => toggleItem("types", type)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {type}
              </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Cost slider */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                    Стоимость обучения (в год)
                </p>
                <input
                    type="range"
                    min={0}
                    max={100000}
                    step={1000}
                    value={filters.maxCost}
                    onChange={(e) =>
                        onChange({ ...filters, maxCost: Number(e.target.value) })
                    }
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-600 bg-gray-200"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                    <span>$0</span>
                    <span>${filters.maxCost.toLocaleString("en-US")}</span>
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
