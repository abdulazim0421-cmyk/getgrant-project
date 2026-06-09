import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CountriesGrid from "./components/CountriesGrid";
import CountriesHeader from "./components/CountriesHeader";

export default function CountriesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <CountriesHeader />
                    <CountriesGrid />
                </div>
            </main>
            <Footer />
        </div>
    );
}