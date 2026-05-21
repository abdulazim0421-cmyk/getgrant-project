import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgramsCatalogLayout from "./components/ProgramsCatalogLayout";

export default function ProgramsPage() {

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-20">
                <ProgramsCatalogLayout />
            </main>
            <Footer />
        </div>
    );
}
