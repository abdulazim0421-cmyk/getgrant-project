import { FileText } from "lucide-react";
import type { VisaType } from "./types";

interface CountryVisasProps {
  visaTypes: VisaType[];
}

export default function CountryVisas({ visaTypes }: CountryVisasProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold text-[#101828] mb-6">Визовая информация</h2>
        <div className="flex flex-col gap-3">
          {visaTypes.map((v, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-[12px] border border-[#EAECF0] bg-white">
              <div className="w-9 h-9 rounded-[8px] bg-[#1570EF] flex items-center justify-center flex-shrink-0">
                <FileText size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#101828]">{v.title}</p>
                <p className="text-xs text-[#667085] mt-0.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
