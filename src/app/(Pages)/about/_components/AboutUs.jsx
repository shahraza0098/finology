"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 px-6 md:px-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Empowering Local Businesses, One Share at a Time
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          Our mission is to revolutionize how people invest in their communities — 
          by making it easy to buy and sell shares of local businesses, startups, and ventures you believe in.
        </motion.p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-semibold text-gray-900">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We’re a team of entrepreneurs, developers, and investors passionate about
            bridging the gap between local businesses and community investors.
            Our platform allows anyone to own a piece of the businesses they love —
            empowering growth, trust, and shared success.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re a business owner looking to raise funds or an investor
            seeking the next local success story, we’re here to make that connection seamless, secure, and transparent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/about_invest.svg"
            alt="About Us Illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="bg-white rounded-3xl shadow-xl p-10 md:p-16 mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-900 mb-6"
        >
          Our Vision
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
          We believe the future of investing lies in **community-driven capitalism** — 
          where everyday investors can directly fuel the businesses that shape their neighborhoods.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          By making business equity accessible, transparent, and liquid, we aim to
          create a thriving ecosystem where innovation meets local growth.
        </p>
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Ready to be part of the future of local investing?
        </h3>
        <Link href="/signup">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 
            text-white font-medium rounded-full shadow-md hover:bg-blue-700 
            transition duration-300"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
