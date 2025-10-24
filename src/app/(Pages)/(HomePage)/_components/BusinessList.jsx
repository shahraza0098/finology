
// // src/components/FeaturedBusinesses.jsx
// import React from "react";




// const businesses = [
//   {
//     id: 1,
//     name: "Coffee Blossom",
//     logo: "☕",
//     price: 45.2,
//     change: +1.5,
//   },
//   {
//     id: 2,
//     name: "Green Grove Organics",
//     logo: "🌱",
//     price: 28.75,
//     change: -0.8,
//   },
//   {
//     id: 3,
//     name: "The Bakehouse",
//     logo: "🥖",
//     price: 19.5,
//     change: +0.2,
//   },
//   {
//     id: 4,
//     name: "Studio M",
//     logo: "🎨",
//     price: 62.1,
//     change: +2.1,
//   },
//   {
//     id: 5,
//     name: "Fashion Trends Boutique",
//     logo: "👗",
//     price: 37.0,
//     change: +0.9,
//   },
//   {
//     id: 6,
//     name: "Gaming Palace",
//     logo: "🎮",
//     price: 88.9,
//     change: -1.2,
//   },
// ];

// export default function FeaturedBusinesses() {
//   return (
//     <section className="py-20 px-6 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 tracking-tight">
//         Featured Local Businesses
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {businesses.map((biz) => (
//           <div
//             key={biz.id}
//             className="group bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col"
//           >
//             {/* Header: Logo + Name */}
//             <div className="flex items-center justify-between mb-5">
//               <div className="flex items-center gap-3">
//                 <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-2xl">
//                   {biz.logo}
//                 </div>
//                 <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
//                   {biz.name}
//                 </h3>
//               </div>
//               <span
//                 className={`text-sm font-medium px-2.5 py-1 rounded-full ${
//                   biz.change >= 0
//                     ? "bg-green-50 text-green-600"
//                     : "bg-red-50 text-red-600"
//                 }`}
//               >
//                 {biz.change >= 0 ? `+${biz.change}%` : `${biz.change}%`}
//               </span>
//             </div>

//             {/* Price */}
//             <div className="flex items-baseline justify-between mb-6">
//               <p className="text-3xl font-bold text-gray-900">
//                 ${biz.price.toFixed(2)}
//               </p>
//               <p className="text-sm text-gray-500">per share</p>
//             </div>

//             {/* Mini chart placeholder */}
//             <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
//               <div
//                 className={`h-full rounded-full transition-all ${
//                   biz.change >= 0
//                     ? "bg-gradient-to-r from-green-300 to-green-500 w-2/3"
//                     : "bg-gradient-to-r from-red-300 to-red-500 w-1/2"
//                 }`}
//               ></div>
//             </div>

//             {/* CTA */}
//             <button className="mt-auto w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-xl hover:bg-blue-700 transition">
//               View & Invest
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// src/components/FeaturedBusinesses.jsx
// "use client";

// import React, { useEffect, useState } from "react";

// export default function FeaturedBusinesses() {
//   const [businesses, setBusinesses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchBusinesses() {
//       try {
//         const res = await fetch("http://localhost:3000/api/fetchbusiness");
//         const data = await res.json();
//         setBusinesses(data);
//       } catch (error) {
//         console.error("Error fetching businesses:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchBusinesses();
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-20 px-6 max-w-7xl mx-auto text-center">
//         <p className="text-gray-600 text-lg">Loading featured businesses...</p>
//       </section>
//     );
//   }

//   if (businesses.length === 0) {
//     return (
//       <section className="py-20 px-6 max-w-7xl mx-auto text-center">
//         <p className="text-gray-600 text-lg">No businesses available right now.</p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 px-6 max-w-7xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 tracking-tight">
//         Featured Local Businesses
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {businesses.map((biz) => (
//           <div
//             key={biz.id}
//             className="group bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between mb-5">
//               <div className="flex items-center gap-3">
//                 <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
//                   {biz.logoUrl ? (
//                     <img
//                       src={biz.logoUrl}
//                       alt={biz.name}
//                       className="h-10 w-10 object-contain"
//                     />
//                   ) : (
//                     <span className="text-2xl text-gray-600 font-semibold">
//                       {biz.name.charAt(0)}
//                     </span>
//                   )}
//                 </div>
//                 <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
//                   {biz.name}
//                 </h3>
//               </div>
//               <span className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
//                 {biz.sector || "General"}
//               </span>
//             </div>

//             {/* Share price */}
//             <div className="flex items-baseline justify-between mb-6">
//               <p className="text-3xl font-bold text-gray-900">
//                 ₹{biz.sharePrice ? biz.sharePrice.toFixed(2) : "—"}
//               </p>
//               <p className="text-sm text-gray-500">per share</p>
//             </div>

//             {/* Decorative progress bar */}
//             <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
//               <div className="h-full bg-gradient-to-r from-blue-300 to-blue-500 w-2/3"></div>
//             </div>

//             {/* CTA */}
//             <button className="mt-auto w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-xl hover:bg-blue-700 transition">
//               View & Invest
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FeaturedBusinesses() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const res = await fetch("/api/fetchbusiness");
        const data = await res.json();
        setBusinesses(data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBusinesses();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-lg">Loading featured businesses...</p>
      </section>
    );
  }

  if (businesses.length === 0) {
    return (
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-lg">No businesses available right now.</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 tracking-tight">
        Featured Local Businesses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {businesses.map((biz) => (
          <div
            key={biz.id}
            className="group bg-white border border-gray-400 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                  {biz.logoUrl ? (
                    <img
                      src={biz.logoUrl}
                      alt={biz.name}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span className="text-2xl text-gray-600 font-semibold">
                      {biz.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                  {biz.name}
                </h3>
              </div>
              <span className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                {biz.sector || "General"}
              </span>
            </div>

            {/* Share price */}
            <div className="flex items-baseline justify-between mb-6">
              <p className="text-3xl font-bold text-gray-900">
                ₹{biz.sharePrice ? biz.sharePrice.toFixed(2) : "—"}
              </p>
              <p className="text-sm text-gray-500">per share</p>
            </div>

            {/* Decorative progress bar */}
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-gradient-to-r from-blue-300 to-blue-500 w-2/3"></div>
            </div>

            {/* CTA */}
            <button
              onClick={() => router.push(`/companies/${biz.id}`)}
              className="mt-auto w-full bg-[#016B61] text-white text-sm font-medium py-3 rounded-xl hover:bg-blue-700 transition"
            >
              View & Invest
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

