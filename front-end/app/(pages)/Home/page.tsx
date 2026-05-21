import Header from "@/app/components/Header";
import GetGrantHero from "@/app/(pages)/Home/GetGrantHero";
import HomeContent from "@/app/(pages)/Home/HomeContent";
import GetGrantExamGrid from "./GetGrantExamGrid";
import BentoGrid from "@/app/(pages)/Home/BentoGrid";
import Footer from "@/app/components/Footer";


export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-10">
                <GetGrantHero />
                <GetGrantExamGrid/>
                <BentoGrid/>
                <HomeContent />
            </main>

            <Footer/>
        </div>
    );
}
