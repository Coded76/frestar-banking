"use client";

import Image from "next/image";

const features = [
  {
    title: "Bank Free, Zero Hassle",
    description: "Open an account in minutes, no paperwork required.",
    image: "/images/woman-phone.jpg",
    bgColor: "bg-[#2B2BFF]",
    textColor: "text-white",
  },
  {
    title: "Easy Payment (Pay-In/Pay-Out)",
    description:
      "Send, receive, and manage payments instantly with frictionless systems.",
    image: "/images/card-hand.jpg",
    bgColor: "bg-[#FF6C00]",
    textColor: "text-white",
  },
  {
    title: "Pay Bills, Stress Less",
    description:
      "Pay bills like airtime, DStv, and more with one-tap payment system.",
    image: "/images/bill-pay.jpg",
    bgColor: "bg-[#00C2FF]",
    textColor: "text-white",
  },
  {
    title: "Safe & Secure",
    description:
      "Keep your funds safe with our secure account management.",
    image: "/images/card-swipe.jpg",
    bgColor: "bg-[#F0F0F0]",
    textColor: "text-black",
  },
];

export default function BankingFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          A Bank Built <span className="text-[#2B2BFF]">Around You</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Discover seamless digital banking tailored for you—fast payments, secure
          accounts, and tools to manage your money effortlessly.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`rounded-xl overflow-hidden shadow-md p-6 flex flex-col md:flex-row items-center gap-4 ${feature.bgColor} ${feature.textColor}`}
          >
            <div className="w-full md:w-1/3">
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
