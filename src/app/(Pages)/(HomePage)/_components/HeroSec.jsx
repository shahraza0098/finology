


"use client";

import { BackgroundBeams } from "@/components/UI/BackgroundBeams";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden isolate flex items-center justify-center min-h-screen text-white">
      {/* Animated Beams Background */}
      <BackgroundBeams className="z-0" />

      {/* Hero Content */}
      <div className="z-10  max-w-7xl w-full px-6 flex flex-col-reverse md:flex-row items-center justify-between ">
        {/* Left - Text */}
        <div className="md:w-1/2 text-left space-y-6 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Invest in Local <br /> Businesses
          </h1>
          <p className="text-lg text-gray-300">
            Buy, sell, and track shares in local businesses. Support communities while growing your portfolio.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white hover:text-indigo-400 flex items-center gap-1"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/undraw_investing_kncz.svg" // Replace with your image path in public/
            alt="Hero Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

