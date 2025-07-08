import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#090909] w-full  flex flex-col justify-between">
      {/* Top Section */}
      <section className="w-full mx-auto container px-4 py-16">
        <div className="flex md:flex-row flex-col md:gap-0 gap-[2rem] justify-between">
          <div className="flex flex-col gap-[20px]">
            {" "}
            <div className="flex items-center mb-4">
              <span className="text-2xl">
                <img
                  src="/star-logo.png"
                  className="h-[28px] w-[33px]"
                  alt=""
                />
              </span>
              <span className="ml-2 text-xl text-white font-semibold">Frestar</span>
              <span className="ml-2 bg-[#43ba7f] text-white px-2 py-1 rounded text-xs">
                Banking
              </span>
            </div>
            <p className="text-white lg:w-[496px] w-full">
              Frestar Digital is authorised and regulated by the Central Bank{" "}
              <br className="md:hidden block" /> of Nigeria to offer banking
              services. Deposits are insured by the{" "}
              <br className="md:hidden block" /> Nigerian Deposit Insurance
              Corporation (NDIC).
            </p>
          </div>
          <div className="flex flex-row items-start gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold text-[16px] text-white">Quick Links</p>
              <div className="flex flex-col gap-[8px] text-[#9E9FA4]">
                <Link href="/">Home</Link>
                <Link href="/">Buy</Link>
                <Link href="/">Sell</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold text-[16px] text-white">Solution</p>
              <div className="flex flex-col gap-[8px] text-[#9E9FA4]">
                <Link href="/">Digital</Link>
                <Link href="/">Electronics</Link>
                <Link href="/">Saloon</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold text-[16px] text-white">Company</p>
              <div className="flex flex-col gap-[8px] text-[#9E9FA4]">
                <Link href="/">About</Link>
                <Link href="/">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full mx-auto container px-4 pb-16">
        <div className="flex md:flex-row flex-col md:items-start justify-between gap-8">
          <p className="text-white lg:w-[496px]">Frestar BN 12345, Nigeria</p>
          <div className="flex flex-col items-center gap-[16px]">
            <p className="font-bold text-[16px] text-white">Connect with US</p>
            <div className="flex flex-row gap-[8px] text-[#9E9FA4]">
              <Link href="/">
                <Image
                  src="/linkedIn.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                />
              </Link>
              <Link href="/">
                <Image src="/x.svg" width={24} height={24} alt="X" />
              </Link>
              <Link href="/">
                <Image
                  src="/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/youtube.svg"
                  width={24}
                  height={24}
                  alt="YouTube"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between mt-6 pt-6 border-t-[2px] border-white gap-4">
          <p className="text-[#9E9FA4] lg:w-[496px]">
            Copyright © 2025, Frestar Inc
          </p>
          <div className="flex flex-wrap gap-[16px] text-[#9E9FA4]">
            <Link href="/">Terms of Use</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
