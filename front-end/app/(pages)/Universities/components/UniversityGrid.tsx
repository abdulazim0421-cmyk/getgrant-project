import type { University } from "../data/mockUniversities";
import UniversityCard from "./UniversityCard";

interface UniversityGridProps {
    universities: University[];
    total: number;
    onShowMore: () => void;
    onCollapse: () => void;
    hasMore: boolean;
    canCollapse: boolean;
}

export default function UniversityGrid({
                                           universities,
                                           total,
                                           onShowMore,
                                           onCollapse,
                                           hasMore,
                                           canCollapse,
                                       }: UniversityGridProps) {
    if (universities.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center py-24 text-gray-400 text-sm">
                Университеты не найдены. Попробуйте изменить фильтры.
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col gap-8">
            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {universities.map((uni) => (
                    <UniversityCard key={uni.id} university={uni} />
                ))}
            </div>

            {/* Bottom section */}
            <div className="flex flex-col items-center gap-4 pt-2 pb-6">
                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-1">
                    <div
                        className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                        style={{
                            width: `${Math.round((universities.length / total) * 100)}%`,
                        }}
                    />
                </div>

                {/* Dividers + counter + buttons */}
                <div className="flex items-center gap-4 w-full">
                    <div className="flex-1 h-px bg-gray-100" />

                    <div className="flex flex-col items-center gap-3">
                        <p className="text-xs text-gray-400">
                            Показано{" "}
                            <span className="font-semibold text-gray-600">
                {universities.length}
              </span>{" "}
                            из{" "}
                            <span className="font-semibold text-gray-600">{total}</span>{" "}
                            университетов
                        </p>

                        <div className="flex items-center gap-3">
                            {/* Show more */}
                            {hasMore && (
                                <button
                                    onClick={onShowMore}
                                    className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium px-8 py-2.5 rounded-lg transition-all shadow-md shadow-blue-600/20 whitespace-nowrap"
                                >
                                    Показать еще
                                </button>
                            )}

                            {/* Collapse */}
                            {canCollapse && (
                                <button
                                    onClick={onCollapse}
                                    className="bg-white hover:bg-gray-50 active:scale-95 text-gray-600 hover:text-gray-900 text-sm font-medium px-8 py-2.5 rounded-lg border border-gray-200 transition-all whitespace-nowrap"
                                >
                                    Свернуть
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
