import Footer from "@/components/footer/Footer";
import GetSupport from "@/components/get-support/GetSupport";
import CTA from "@/components/help-center/CTA";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <GetSupport />
      <CTA />
      <Footer />
    </div>
  );
}

export default page;
