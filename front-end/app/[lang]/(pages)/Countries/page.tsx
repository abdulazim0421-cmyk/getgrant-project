import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CountriesGrid from "./components/CountriesGrid";
import CountriesHeader from "./components/CountriesHeader";

export default async function CountriesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow pt-20 sm:pt-24 pb-16">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CountriesHeader />
                    <CountriesGrid lang={lang} />
                </div>
            </main>
            <Footer />
        </div>
    );
}