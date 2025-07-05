"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Shield, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

const BankingMission = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: "/mission/hand.png",
      title: "For Everyone",
      description:
        "Easy & banking services tailored to your needs, with tools and services that make life easier.",
    },
    {
      icon: "/mission/arrow.png",
      title: "More Than Banking",
      description:
        "Experience the perks of banking with us, from rewards to seamless transactions.",
    },
    {
      icon: "/mission/shield.png",
      title: "Bank with Confidence",
      description:
        "Enjoy secure, convenient banking with advanced security measures and friendly features.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
    hover: {
      y: -8,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#08225A] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              All you need to know about Frestar Banking
            </motion.h2>
            <motion.p
              className="text-blue-200 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Watch how we're creating impact in the fintech space
            </motion.p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setIsVideoPlaying(true)}
              >
                <Image
                  src="/mission/video.png"
                  alt="Couple using banking app"
                  width={800}
                  height={450}
                  className="w-[1240px] md:h-[500px] h-[200px] object-cover"
                  priority
                />

                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300"
                  whileHover={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    variants={iconVariants}
                    whileHover="hover"
                    animate="visible"
                  >
                    <Play
                      className="w-8 h-8 text-blue-900 ml-1"
                      fill="currentColor"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Mission?
            </motion.h3>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              To make Banking effortless, accessible and transparent for
              everyone
            </motion.p>
          </motion.div>

          {/* What's More Section */}
          <motion.div
            variants={itemVariants}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="bg-[#F2F7F8] rounded-3xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col w-full gap-8">
                {/* Left Content */}
                <motion.div
                  className="md:flex text-start justify-between w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    What's More?
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-start">
                    Explore more ways to enjoy your banking{" "}
                    <br className="md:block hidden" /> experience and explore
                    more ways to enjoy your <br className="md:block hidden" />{" "}
                    banking experience.
                  </p>
                </motion.div>

                {/* Right Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="bg-[#FFFFFF] p-[20px] text-start rounded-[16px] shadow-lg hover:shadow-xl transition-all duration-300"
                      variants={featureCardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      custom={index}
                    >
                      <motion.div
                        className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <img src={feature.icon} alt="" />
                      </motion.div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h5>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Replace with actual video component */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <p>Video Player Would Go Here</p>
            </div>
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVideoPlaying(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default BankingMission;
