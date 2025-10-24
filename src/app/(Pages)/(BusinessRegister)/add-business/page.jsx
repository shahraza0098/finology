"use client";

import React from "react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function AddBusiness() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 px-6 py-12">
      <div className="max-w-md w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-10 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-4 rounded-full shadow-md">
            <PlusCircle className="h-8 w-8 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Start Listing Your Business
        </h3>
        <p className="text-gray-600 mb-8 text-sm leading-relaxed">
          Create a business profile, showcase your services, and connect with investors.
        </p>

        <Link
          href="/add-business/business-info"
          className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
