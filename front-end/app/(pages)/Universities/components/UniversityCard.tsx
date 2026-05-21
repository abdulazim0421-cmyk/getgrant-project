import Image from "next/image";
import { BookOpen, Users, MapPin, Crown } from "lucide-react";
import type { University } from "../data/mockUniversities";

interface UniversityCardProps {
    university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
    const {
        name,
        image,
        programsCount,
        studentsCount,
        location,
        cost,
        acceptanceRate,
        type,
    } = university;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={name}
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
                <h3 className="font-bold text-gray-900 text-base leading-tight">{name}</h3>

                {/* Stats */}
                <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <BookOpen size={13} className="text-gray-400" />
              {programsCount} программ
          </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Users size={13} className="text-gray-400" />
                        {studentsCount.toLocaleString("ru-RU")}
          </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin size={13} className="text-gray-400 shrink-0" />
                    <span>
            {location.city}, {location.state}, {location.country}
          </span>
                </div>

                {/* Info grid 2x2 */}
                <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
                    <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">Стоимость</p>
                        <p className="text-sm font-semibold text-gray-800">
                            ${cost.toLocaleString("en-US")}/год
                        </p>
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">Программы</p>
                        <p className="text-sm font-semibold text-gray-800">{programsCount}</p>
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">Процент поступления</p>
                        <p className="text-sm font-semibold text-gray-800">{acceptanceRate}%</p>
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">Тип</p>
                        <p className="text-sm font-semibold text-gray-800">{type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
