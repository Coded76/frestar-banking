"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#F9FAFB] overflow-hidden pt-[100px]">
      {/* --- background banner image -------------------------------------- */}
      <div className="relative h-[420px] md:h-[500px] lg:h-[676px] w-full overflow-hidden">
        <Image
          src="/about/hero.jpg" /* put your screenshot here */
          alt="Smiling woman banking online"
          fill
          priority
          className="object-cover object-center"
        />
        {/* optional soft gradient so the card pops a bit more */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-black/30" />
      </div>

      {/* --- floating card ------------------------------------------------- */}
      <div className="absolute inset-x-0 bottom-0 translate-y-40 flex justify-center px-4">
        <div className="w-full max-w-[1200px] h-[675px] bg-[#08225A] text-white rounded-t-[32px] px-6 md:px-16 py-14">
          {/* pill label */}
          <div className="flex justify-center">
            <span className="inline-block px-4 py-1 rounded-full bg-[#3978F2] text-sm font-semibold text-blue-100">
              About&nbsp;Us
            </span>
          </div>

          {/* headline */}
          <h2 className="mt-6 text-center font-bold tracking-tight leading-tight text-3xl md:text-[72px]">
            We change the way you <br className="hidden md:block" />
            handle Money
          </h2>

          {/* sub‑copy */}
          <p className="mt-4 text-center text-lg text-blue-100/90">
            Explore our innovative approach to financial services.
          </p>

          {/* call‑to‑action */}
          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 transition hover:bg-white/10">
              <PlayCircle className="h-5 w-5 shrink-0 transition group-hover:scale-110" />
              <span className="font-medium">Watch&nbsp;Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
