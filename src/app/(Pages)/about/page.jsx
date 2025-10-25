"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-blue-100/10 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Empowering Communities Through Local Investments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          We’re building a future where anyone can invest in local businesses they believe in —
          making ownership accessible, transparent, and community-driven.
        </motion.p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            We’re a team of passionate innovators, entrepreneurs, and investors on a mission to connect communities with opportunity. 
            Our platform allows everyday people to buy and sell shares of local businesses — giving them a real stake in their city’s growth.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Whether you’re a business owner looking to raise funds or an investor searching for the next local success story, 
            we make that connection simple, transparent, and secure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <Image
              src="https://res.cloudinary.com/dcvjva3oy/image/upload/v1761373345/79z_2204_w012_n001_50b_p12_50_lts29t.jpg"
              alt="Invest Illustration"
              width={450}
              height={450}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="bg-white rounded-3xl shadow-lg max-w-6xl mx-auto text-center px-6 md:px-16 py-20 mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
        >
          Our Vision
        </motion.h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
          We envision a future where investing is inclusive — 
          where everyone can participate in the growth of their local economy, 
          not just through consumption but through true ownership.
        </p>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          By creating a marketplace for local equity, we aim to drive economic empowerment, transparency, and sustainable growth in every community.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
        >
          Join the Movement — Own a Piece of Your Community
        </motion.h3>

        <Link href="/companies">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 
              bg-blue-600 text-white font-medium text-lg rounded-full
              shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started <ArrowRight size={20} />
          </motion.button>
        </Link>
      </section>
    </main>
  );
}
