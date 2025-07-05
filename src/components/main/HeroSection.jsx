"use client";

import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/bg-img.png')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center pt-[140px] pb-0 px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <motion.div
          className="text-center w-full max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#00143F] font-bold leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Bank Smarter
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#00143F] mt-4 md:mt-6 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Frestar provides seamless digital banking tailored for you—fast
            payments, secure accounts
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#3978F2] hover:bg-transparent hover:text-[#3978F2] border border-transparent hover:border-[#3978F2] rounded-lg transition-all duration-300"
            >
              <img src="/home/apple.png" alt="Apple logo" className="h-5 w-5" />
              <span>Get on iPhone</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#3978F2] hover:bg-transparent hover:text-[#3978F2] border border-transparent hover:border-[#3978F2] rounded-lg transition-all duration-300"
            >
              <img
                src="/home/playstore.png"
                alt="Play Store logo"
                className="h-5 w-5"
              />
              <span>Get on Android</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ✅ Phone Image at Bottom */}
        <motion.div
          className="w-full flex justify-center translate-y-[84px] mt-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.img
            src="/home/phone.png"
            alt="Mobile phone"
            className="max-w-full h-auto md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
