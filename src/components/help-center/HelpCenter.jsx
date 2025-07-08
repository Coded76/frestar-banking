"use client";

import Image from "next/image";
import Link from "next/link";
import { HelpCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HelpCenter() {
  return (
    <motion.section
      className="relative bg-[#F9FAFB] pt-[100px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background image + overlay */}
      <div className="relative h-64 md:h-[507px] overflow-hidden">
        <Image
          src="/help/bg.jpg"
          alt="Help center background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.span
            className="inline-block bg-black/60 text-white text-sm uppercase py-1 px-3 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Help Center
          </motion.span>
          <motion.h2
            className="text-2xl md:text-[56px] font-[500] text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We’re always available to answer your questions
          </motion.h2>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl relative mx-auto -mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 px-4">
        {[
          {
            icon: <HelpCircle className="w-6 h-6" />,
            title: "Get support",
            desc: "Need assistance? We’re here to help. Share your concerns, and we’ll get started on a solution.",
            href: "/support",
            linkText: "Submit an Issue",
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Chat with us",
            desc: "Having trouble? Let’s chat about it. Our team is ready to help you resolve the issue.",
            href: "/chat",
            linkText: "Chat with us",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 flex -translate-y-10 flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={i}
          >
            <div className="inline-flex items-center justify-center w-[89px] h-[89px] bg-blue-600 text-blue-100 rounded-full mb-4">
              {card.icon}
            </div>
            <h3 className="text-[32px] font-[700] mb-2">{card.title}</h3>
            <p className="text-gray-600 text-[16px] font-[400] flex-1">
              {card.desc}
            </p>
            <Link
              href={card.href}
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              {card.linkText}&nbsp;&rarr;
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
