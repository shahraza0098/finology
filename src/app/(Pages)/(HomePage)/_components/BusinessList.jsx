// src/components/FeaturedBusinesses.jsx
import React from "react";

// sample businesses (you can fetch from API later)
const businesses = [
  {
    id: 1,
    name: "Coffee Blossom",
    logo: "☕",
    price: 45.2,
    change: +1.5,
  },
  {
    id: 2,
    name: "Green Grove Organics",
    logo: "🌱",
    price: 28.75,
    change: -0.8,
  },
  {
    id: 3,
    name: "The Bakehouse",
    logo: "🥖",
    price: 19.5,
    change: +0.2,
  },
  {
    id: 4,
    name: "Studio M",
    logo: "🎨",
    price: 62.1,
    change: +2.1,
  },
  {
    id: 5,
    name: "Fashion Trends Boutique",
    logo: "👗",
    price: 37.0,
    change: +0.9,
  },
  {
    id: 6,
    name: "Gaming Palace",
    logo: "🎮",
    price: 88.9,
    change: -1.2,
  },
];

export default function FeaturedBusinesses() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Featured Local Businesses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((biz) => (
          <div
            key={biz.id}
            className="bg-[#8DD8FF] shadow-md rounded-lg p-5 border border-gray-200 flex flex-col justify-between"
          >
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-gray-100 text-xl">
                {biz.logo}
              </div>
              <h3 className="font-semibold text-[#4E71FF]">{biz.name}</h3>
            </div>

            {/* Price & Change */}
            <div className="mt-4">
              <p className="text-xl font-bold text-neutral-700">
                ${biz.price.toFixed(2)}
              </p>
              <p
                className={`text-sm font-medium ${
                  biz.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {biz.change >= 0 ? `+${biz.change}%` : `${biz.change}%`}
              </p>
            </div>

            {/* Fake mini chart (line placeholder) */}
            <div className="mt-4 h-6 w-full bg-gray-100 rounded">
              <div className="h-full w-2/3 bg-gradient-to-r from-blue-300 to-blue-500 rounded"></div>
            </div>

            {/* CTA */}
            <button className="mt-6 w-full bg-[#5409DA] text-white text-sm font-medium py-2 rounded hover:bg-[#4E71FF] transition">
              View & Invest
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
