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

export default function GetSupport() {
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
        <div className="absolute inset-0 bg-[#0357EE94]" />
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
            Let’s hear from you
          </motion.h2>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl relative mx-auto -mt-16 px-4">
        {[
          {
            icon: <HelpCircle className="w-6 h-6" />,
            title: "Get support",
            desc: "Write a detailed description of the issue and attach a screenshot if necessary for easy reference. Send to any of the related email;",
            href: "/support",
            linkText: "Chat with us",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-10 flex -translate-y-10 flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={i}
          >
            <div className="inline-flex items-center justify-center w-[89px] h-[89px] bg-blue-600 text-blue-100 rounded-full mb-4">
              {card.icon}
            </div>
            <h3 className="text-[32px] font-[700] mb-4">{card.title}</h3>
            <p className="text-gray-600 text-[16px] border-t border-[#D9D9D9] pt-4 font-[400] flex-1">
              {card.desc}
            </p>

            <div className="mt-6 grid md:grid-cols-2 grid-cols-1 py-6 gap-6">
              <div className="md:border-r md:border-[#D9D9D9] ">
                <h1 className="text-[24px] font-[700]">Technical issue</h1>
                <p>itsupport@frestar.com</p>
              </div>
              <div className="md:pl-4">
                <h1 className="text-[24px] font-[700]">Customer Support</h1>
                <p>support@frestar.com</p>
              </div>
            </div>

            <div className="bg-[#F3F7FE] p-10 w-full flex flex-col justify-center items-center">
              <h1 className="md:text-[32px] text-[24px] font-[700]">Need a quick Support</h1>

              <Link
                href={card.href}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                {card.linkText}&nbsp;&rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
