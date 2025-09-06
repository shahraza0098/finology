// src/components/MarketTicker.jsx
import React from "react";

const stocks = [
  { name: "Local Brews", price: 25.1, change: +0.75 },
  { name: "Green Grocer", price: 18.45, change: -0.2 },
  { name: "Artisan Crafts", price: 32.8, change: +1.1 },
  { name: "Tech Hub Cafe", price: 45.0, change: +0.9 },
  { name: "Book Nook", price: 12.3, change: -0.5 },
  { name: "Fitness First", price: 50.9, change: +0.4 },
];

export default function MarketTicker() {
  return (
    <div className="w-full overflow-hidden border-b border-gray-200 bg-white">
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Duplicate the list twice for smooth infinite loop */}
        {[...stocks, ...stocks].map((stock, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 px-6 py-2 text-sm font-medium"
          >
            <span className="text-gray-700">{stock.name}:</span>
            <span className="text-gray-900">${stock.price.toFixed(2)}</span>
            <span
              className={`${
                stock.change >= 0 ? "text-green-600" : "text-red-600"
              } ml-1`}
            >
              {stock.change >= 0 ? `+${stock.change}%` : `${stock.change}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
