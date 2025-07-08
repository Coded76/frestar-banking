import Footer from "@/components/footer/Footer";
import CTA from "@/components/help-center/CTA";
import BankingFeatures from "@/components/main/BankingFeatures";
import BankingMission from "@/components/main/BankingMission";
import HeroSection from "@/components/main/HeroSection";
import Partner from "@/components/main/Partner";
import SupportSection from "@/components/main/SupportSection";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partner />
      <BankingFeatures />
      <BankingMission />
      <SupportSection />
      <CTA /> 
      <Footer />
    </div>
  );
}
