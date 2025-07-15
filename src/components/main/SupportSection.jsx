"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const SupportSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex md:flex-row flex-col justify-between gap-4 mb-12"
        >
          {/* Left Content */}
          <motion.div variants={leftVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#092256] leading-tight">
              Need Support to <br className="md:block hidden" /> get started?
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={rightVariants} className="space-y-6 lg:pt-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our support team is available to provide{" "}
              <br className="md:block hidden" /> assistance and ensure a smooth
              experience.
            </p>

            <motion.button
              className="inline-flex items-center gap-3 bg-[#0F8ECD] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5" />
              Contact us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Support Representative Image */}
    <motion.div
  variants={imageVariants}
  initial="hidden"
  animate="visible"
  className="relative rounded-2xl overflow-hidden shadow-2xl group"
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative w-full h-[full]" // Set dimensions here
  >
    <Image
      src="/support/support-img.png"
      alt="Friendly customer support representative"
      width={1200}
      height={600}
      className="w-full h-full object-cover" // Changed to object-cover and full dimensions
      priority
    />

    {/* Subtle overlay for better text readability if needed */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
</motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
