import Image from "next/image";
import { Clock, BookOpen, Crown } from "lucide-react";
import type { Program } from "../data/ mockPrograms";

interface ProgramCardProps {
    program: Program;
}

// Сколько тегов показываем до счётчика
const VISIBLE_TAGS = 2;

export default function ProgramCard({ program }: ProgramCardProps) {
    const {
        title,
        image,
        duration,
        universitiesCount,
        averageSalary,
        careerPaths,
    } = program;

    const visiblePaths = careerPaths.slice(0, VISIBLE_TAGS);
    const hiddenCount = careerPaths.length - VISIBLE_TAGS;

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white p-1.5 rounded-md">
                    <Crown size={14} />
                </div>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base leading-tight">
                    {title}
                </h3>

                {/* Stats row */}
                <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock size={13} className="text-gray-400" />
              {duration}
          </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <BookOpen size={13} className="text-gray-400" />
                        {universitiesCount} ВУЗов
          </span>
                </div>

                {/* Salary block */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-[11px] text-gray-400 mb-1">Средняя зарплата</p>
                    <p className="text-base font-bold text-gray-800">
                        ${averageSalary.toLocaleString("en-US")}/год
                    </p>
                </div>

                {/* Career paths */}
                <div className="mt-auto">
                    <p className="text-[11px] text-gray-400 mb-2">Карьерные пути:</p>
                    <div className="flex flex-wrap gap-2">
                        {visiblePaths.map((path) => (
                            <span
                                key={path}
                                className="border border-gray-200 rounded-full px-3 py-1 text-xs text-blue-600 bg-white whitespace-nowrap"
                            >
                {path}
              </span>
                        ))}
                        {hiddenCount > 0 && (
                            <span className="border border-gray-200 rounded-full px-3 py-1 text-xs text-blue-600 bg-white">
                +{hiddenCount}
              </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
