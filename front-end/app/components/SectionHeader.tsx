import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function SectionHeader({ title, subtitle, onPrev, onNext }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 font-segoe">{title}</h2>
        <p className="text-sm text-gray-500 mt-1 font-sans">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2 mt-1 hidden md:flex">
        <button
          onClick={onPrev}
          className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] border border-[#D0D5DD] bg-white hover:bg-gray-50 transition-colors text-[#1D2939]"
          aria-label="Назад"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={onNext}
          className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] border border-[#D0D5DD] bg-white hover:bg-gray-50 transition-colors text-[#1D2939]"
          aria-label="Вперёд"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
