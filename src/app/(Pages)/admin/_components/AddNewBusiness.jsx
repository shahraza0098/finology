"use client";

import React from "react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function AddNewBusiness() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 p-6">
      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg p-10 max-w-lg w-full text-center transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <PlusCircle className="h-10 w-10 text-blue-600" />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900">
            Add a New Business
          </h1>

          <p className="text-gray-600 max-w-sm">
            Register your new business on the platform to start managing
            listings, investors, and performance insights in one place.
          </p>

          <Link
            href="/add-business"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200"
          >
            <PlusCircle className="h-5 w-5" />
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
