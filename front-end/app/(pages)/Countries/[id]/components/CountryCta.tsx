"use client";

function openModal() {
  window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

interface CountryCtaProps {
  ctaTitle: string;
}

export default function CountryCta({ ctaTitle }: CountryCtaProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-[#F9FAFB] rounded-[24px] py-14 px-6 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl font-bold text-[#101828]">{ctaTitle}</h2>
          <p className="text-sm text-[#667085] max-w-md leading-relaxed">
            Получите персональную консультацию по выбору университета и помощь в подготовке документов
          </p>
          <button
            onClick={openModal}
            className="px-8 py-3 rounded-[8px] bg-[#1570EF] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors"
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
}
