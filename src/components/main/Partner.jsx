"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Partner() {
  //   const [isPaused, setIsPaused] = useState(false);
  const partners = [
    { name: "Partner 1", logo: "/partner/partner-1.png" },
    { name: "Partner 2", logo: "/partner/partner-2.png" },
    { name: "Partner 3", logo: "/partner/partner-3.png" },
    { name: "Partner 4", logo: "/partner/partner-4.png" },
    { name: "Partner 5", logo: "/partner/partner-5.png" },
    { name: "Partner 6", logo: "/partner/partner-6.png" },
  ];

  return (
    <div className="bg-[#E7F4FA] py-16 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Featured in</h2>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Marquee View */}
        <div className="md:hidden">
          <Marquee
            speed={40}
            // pauseOnHover={true}
            // pauseOnClick={true}
            gradient={true}
            gradientWidth={50}
            gradientColor={[231, 244, 250]}
            // play={!isPaused}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                // whileInView={{ scale: 1 }}
                // whileHover={{ scale: 1.1 }}
                // onHoverStart={() => setIsPaused(true)}
                // onHoverEnd={() => setIsPaused(false)}
                className="mx-4 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Partner;
