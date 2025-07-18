"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function BankingFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="text-center flex justify-between w-full items-center mb-12">
        <h2 className="text-3xl md:text-[48px] font-semibold">
          A Bank Built <span className="text-[#2B2BFF]">Around You</span>
        </h2>
        <p className="text-gray-600 text-[18.59px] text-start">
          Discover seamless digital banking tailored for you—fast <br className="md:block hidden" /> payments,
          secure accounts, and tools to manage your <br className="md:block hidden" /> money effortlessly.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        {/* First row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          {/* Left card (smaller) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative rounded-2xl w-full md:w-[435px] h-[300px] md:h-[595px] overflow-hidden shadow-2xl group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/mission/C1.png"
                alt="Friendly customer support representative"
                fill
                className="object-cover"
                priority
              />

              {/* Text Overlay - Bottom Left */}
              <div className="absolute inset-0 flex z-[5000] flex-col justify-end p-6">
                <div className="flex flex-col gap-2 text-white max-w-[80%]">
                  <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                    Bank Free, Zero Hassle
                  </h2>
                  <p className="text-sm md:text-base">
                    Open an account in minutes, no paperwork required.
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </motion.div>
          </motion.div>

          {/* Right card (larger) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative rounded-2xl w-full md:w-[767px] h-[300px] md:h-[595px] overflow-hidden shadow-2xl group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/mission/C2.png"
                alt="Friendly customer support representative"
                fill
                className="object-cover"
                priority
              />

              {/* Text Overlay - Bottom Left */}
              <div className="absolute inset-0 flex z-[5000] flex-col justify-end p-6">
                <div className="flex flex-col gap-2 text-white max-w-[80%]">
                  <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                    Easy Payment (Pay-In/Pay-Out)
                  </h2>
                  <p className="text-sm md:text-base">
                    Send, receive, and manage payments instantly with
                    frictionless systems.
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 md:gap-6 w-full">
          {/* Right card (smaller) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative rounded-2xl w-full md:w-[435px] h-[300px] md:h-[595px] overflow-hidden shadow-2xl group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/mission/C4.png"
                alt="Friendly customer support representative"
                fill
                className="object-cover"
                priority
              />

              {/* Text Overlay - Bottom Left */}
              <div className="absolute inset-0 flex z-[5000] flex-col justify-end p-6">
                <div className="flex flex-col gap-2 text-white max-w-[80%]">
                  <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                    Pay Bills, Stress Less
                  </h2>
                  <p className="text-sm md:text-base">
                    Pay bills like airtime, DStv, and more with one-tap payment
                    system.
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </motion.div>
          </motion.div>

          {/* Left card (larger) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative rounded-2xl w-full md:w-[767px] h-[300px] md:h-[595px] overflow-hidden shadow-2xl group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/mission/C3.png"
                alt="Friendly customer support representative"
                fill
                className="object-cover"
                priority
              />

              {/* Text Overlay - Bottom Left */}
              <div className="absolute inset-0 flex z-[5000] flex-col justify-end p-6">
                <div className="flex flex-col gap-2 text-white max-w-[80%]">
                  <h2 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                    Safe & Secure
                  </h2>
                  <p className="text-sm md:text-base">
                    Keep your funds safe with our secure account management.
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
