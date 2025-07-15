"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

export default function OurJourney() {
  return (
    <section className="w-full bg-white text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600">OUR JOURNEY</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            More innovation, more convenience
          </h2>
        </div>

        <img src="/about/roadmap.svg" alt="" />

        {/* Navigation Arrows */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="h-10 w-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50">
            <ArrowLeft className="mx-auto h-5 w-5" />
          </button>
          <button className="h-10 w-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50">
            <ArrowRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
