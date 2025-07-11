"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export default function WhatMakesDifferent() {
  // simple accordion state
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const accordion = [
    {
      title: "The Problem",
      body: "Traditional banks often leave customers with ... (add your copy here).",
    },
    {
      title: "Our business model",
      body: "We leverage technology and strategic partnerships to ...",
    },
    {
      title: "Driving Impact",
      body: "Our mission is rooted in financial inclusion ...",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#e8f2f9] py-24">
      {/* ⬇ decorative shapes — these sit bottom‑left & bottom‑right */}
      {/* <Image
                src="/images/triangle-orange.svg"
                alt=""
                width={260}
                height={260}
                className="pointer-events-none absolute bottom-0 left-0 z-0"
            />
            <Image
                src="/images/triangle-green.svg"
                alt=""
                width={420}
                height={420}
                className="pointer-events-none absolute bottom-0 right-0 z-0"
            /> */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* ---- left column ------------------------------------------------ */}
        <div>
          <p className="text-sm font-semibold text-blue-700">
            What makes Frestar different
          </p>

          <h2 className="mt-3 text-3xl font-[650] leading-tight text-[#092256] md:text-4xl">
            Redefining the banking <br />
            experience
          </h2>

          {/* phone mock‑up */}
          <div className="md:absolute mt-12 ">
            {/* the phone */}
            <img src="/phone.png" className="w-[600px]" alt="" />
            {/* <Image
              src="/phone.png"
              alt="Phone showing app"
              width={300}
              height={600}
              className="w-full object-contain"
            /> */}
          </div>
        </div>

        {/* ---- right column ----------------------------------------------- */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#00205b]">OUR STORY</h3>

          <p className="mt-4 max-w-prose text-[#00205b]/80">
            Founded in Lagos, Frestar Digital Ltd is Nigeria’s fastest‑growing
            digital bank. We combine cutting‑edge technology with a passion for
            financial inclusion to deliver a banking experience that’s seamless,
            secure, and rewarding. Whether you’re saving for a goal, running a
            business, or paying bills, Frestar is here to help you live freer.
          </p>

          {/* accordion ---------------------------------------------------- */}
          <ul className="mt-10 w-full divide-y divide-gray-300/40">
            {accordion.map(({ title, body }, i) => (
              <li key={title}>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="text-base font-semibold text-[#00205b]">
                    {title}
                  </span>
                  {openIndex === i ? (
                    <Minus className="h-5 w-5 text-[#00205b]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#00205b]" />
                  )}
                </button>

                {openIndex === i && (
                  <p className="-mt-2 pb-6 pr-10 text-sm text-[#00205b]/80">
                    {body}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
