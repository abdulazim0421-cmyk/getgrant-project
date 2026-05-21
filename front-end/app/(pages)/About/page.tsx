import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutMission from "./components/AboutMission";
import AboutValues from "./components/AboutValues";
import AboutHistory from "./components/AboutHistory";
import AboutTeam from "./components/AboutTeam";
import AboutLicenses from "./components/AboutLicenses";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[72px]">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutValues />
        <AboutHistory />
        <AboutTeam />
        <AboutLicenses />
      </main>
      <Footer />
    </div>
  );
}
