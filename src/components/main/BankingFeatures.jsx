"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BankingFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Bank Free, Zero Hassle",
      description: "Open an account in minutes, no paperwork required.",
      image: "/images/woman-phone.jpg",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Easy Payment (Pay-In/Pay-Out)",
      description:
        "Send, receive, and manage payments instantly with Frestar's lightning-fast system.",
      image: "/images/hands-card.jpg",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Pay Bills, Stress Less",
      description:
        "Settle your bills in seconds with Frestar's one-tap payment system.",
      image: "/images/phone-apps.jpg",
      bgColor: "bg-gradient-to-br from-teal-500 to-cyan-500",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Safe & Secure",
      description:
        "Keep your savings safe with our secure account management.",
      image: "/images/secure-payment.jpg",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800",
      textColor: "text-white",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-12 max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          A Bank Built <span className="text-blue-600">Around You</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover seamless digital banking tailored for you—fast payments,
          secure accounts, and tools to manage your money effortlessly.
        </p>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative rounded-2xl overflow-hidden ${feature.bgColor} ${
              index < 2 ? "h-80" : "h-64"
            } group cursor-pointer`}
          >
            {/* Image with Zoom on Hover */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.15 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3
                className={`text-xl md:text-2xl font-bold mb-2 ${feature.textColor}`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm opacity-90 ${feature.textColor} leading-relaxed`}
              >
                {feature.description}
              </p>
            </div>

            {/* Hover Icon */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BankingFeatures;
