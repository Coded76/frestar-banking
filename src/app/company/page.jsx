import AboutHero from "@/components/about-us/AboutHero";
import CareersSection from "@/components/about-us/CareerSection";
import OurJourney from "@/components/about-us/OurJourney";
import Support from "@/components/about-us/Support";
import WhatMakesDifferent from "@/components/about-us/WhatMakesDifferent";
import Footer from "@/components/footer/Footer";
import CTA from "@/components/help-center/CTA";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <OurJourney />
      <WhatMakesDifferent />
      <Support />
      <CareersSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;
