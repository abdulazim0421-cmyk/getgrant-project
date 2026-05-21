import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CoursesSection from "./components/CoursesSection";
import TeachersSection from "./components/TeachersSection";
import CtaSection from "./components/CtaSection";

export default function OnlinePrepPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <h1 className="text-[26px] font-bold leading-normal text-[#101828]">Онлайн-подготовка</h1>
            <p className="mt-2 text-sm text-[#667085]">
              Занятия с профессиональными преподавателями для успешного поступления
            </p>
          </div>

          <CoursesSection />
          <TeachersSection />
        </div>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
