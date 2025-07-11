"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const timeline = [
  {
    year: "Today",
    desc: "We launched our mobile app MVP now available on both IOS and Playstore",
  },
  {
    year: "2025",
    desc: "CBN Licensed authorized for digital banking operation",
  },
  {
    year: "2024",
    desc: "Operates as a Multi purpose cooperative society",
  },
  {
    year: "2023",
    desc: "Frestar was officially registered under CAC",
    dark: true,
  },
];

export default function OurJourney() {
  const [index, setIndex] = useState(0);

  const scrollLeft = () =>
    setIndex((prev) => (prev > 0 ? prev - 1 : timeline.length - 1));
  const scrollRight = () => setIndex((prev) => (prev + 1) % timeline.length);

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

        {/* Timeline Steps */}
        <div className="relative flex flex-wrap md:flex-nowrap gap-6 items-stretch">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={clsx(
                "relative min-w-[250px] w-full max-w-sm rounded-xl p-5 border transition",
                i === 0
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white",
                item.dark && "bg-[#3C3C3C] text-white"
              )}
            >
              {/* Timeline connector dot */}
              {i > 0 && (
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-gray-400 rounded-br-full rotate-45"></div>
                </div>
              )}

              <h3 className="text-lg font-bold">
                {item.year}
                {i === 0 && (
                  <span className="ml-1 inline-block w-2 h-2 bg-blue-600 rounded-full" />
                )}
                {i > 0 && (
                  <span className="ml-1 inline-block w-2 h-2 bg-blue-600 rounded-sm" />
                )}
              </h3>
              <p className="mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={scrollLeft}
            className="h-10 w-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <ArrowLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="h-10 w-10 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <ArrowRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
