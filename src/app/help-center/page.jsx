import Footer from "@/components/footer/Footer";
import CTA from "@/components/help-center/CTA";
import FAQ from "@/components/help-center/FAQ";
import HelpCenter from "@/components/help-center/HelpCenter";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <HelpCenter />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;
