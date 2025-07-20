"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

export default function OurJourney() {
  const scrollContainer = useRef(null); // ✅ No TS typing here

  const handleScroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

        {/* Scrollable Image Container */}
        <div
          ref={scrollContainer}
          className="overflow-x-auto whitespace-nowrap hide-scrollbar"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="inline-block min-w-[150%]">
            <img
              src="/about/roadmap.svg"
              alt="Roadmap"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => handleScroll("left")}
            className="h-10 w-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <ArrowLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="h-10 w-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <ArrowRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
