import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CountriesGrid from "./components/CountriesGrid";

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#101828]">Выберите страну для обучения</h1>
            <p className="mt-2 text-sm text-[#667085]">
              Исследуйте образовательные возможности в ведущих странах мира
            </p>
          </div>

          <CountriesGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}
