// // import React from 'react'

// // function CompanyDetailsPage() {
// //   return (
// //     <div >
// //       <h1>Solo Business</h1>
// //     </div>
// //   )
// // }

// // export default CompanyDetailsPage


// "use client";
// import React,{ useEffect, useState } from "react";
// import Image from "next/image";

// export default function CompanyProfilePage({ params }) {
//   const { businessId } = React.use(params)
  
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchBusiness() {
//       try {
//         const res = await fetch(`/api/admin/business/${businessId}`);
//         const result = await res.json();
//         setData(result);
//       } catch (err) {
//         console.error("Error fetching business:", err);
//       }
//     }
//     fetchBusiness();
//   }, [params.id]);

//   if (!data) return <p className="text-center p-10">Loading...</p>;

//   const business = data.soloBusiness;

//   return (
//     <div className="p-6 space-y-6 bg-[#EAF9FF] min-h-screen">
//       {/* About Section */}
//       <section className="bg-white shadow-md rounded-xl p-6 border border-blue-200">
//         <div className="flex justify-between items-start">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700">About {business.name}</h2>
//             <h1 className="text-2xl font-bold text-blue-600">{business.name}</h1>
//             <div className="flex gap-2 mt-2">
//               <button className="btn btn-success btn-sm">Buy</button>
//               <button className="btn btn-error btn-sm">Sell</button>
//             </div>
//             <p className="mt-4 text-gray-600 leading-relaxed">{business.description}</p>

//             <div className="mt-4 space-y-1 text-sm text-gray-700">
//               <p>📧 {business.email}</p>
//               <p>📞 {business.phone}</p>
//               <p>🌍 <a href={business.website} target="_blank" className="text-blue-500">{business.website}</a></p>
//               <p>📍 {business.streetLine1}, {business.city}, {business.state}, {business.country}</p>
//             </div>
//           </div>
//           <div>
//             {business.logoUrl ? (
//               <Image
//                 src={business.logoUrl}
//                 alt={business.name}
//                 width={100}
//                 height={100}
//                 className="rounded-lg border"
//               />
//             ) : (
//               <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg text-xl font-bold">
//                 {business.name.charAt(0)}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

      // {/* Philosophy Section */}
      // <section className="grid md:grid-cols-3 gap-4">
      //   <div className="bg-white shadow-md rounded-xl p-4 border border-blue-200">
      //     <h3 className="font-bold text-gray-800 mb-2">Mission Statement</h3>
      //     <p className="text-gray-600">{business.mission}</p>
      //   </div>
      //   <div className="bg-white shadow-md rounded-xl p-4 border border-blue-200">
      //     <h3 className="font-bold text-gray-800 mb-2">Vision Statement</h3>
      //     <p className="text-gray-600">{business.vision}</p>
      //   </div>
      //   <div className="bg-white shadow-md rounded-xl p-4 border border-blue-200">
      //     <h3 className="font-bold text-gray-800 mb-2">Core Values</h3>
      //     <p className="text-gray-600">{business.coreValues}</p>
      //   </div>
      // </section>

      // {/* Products Section */}
      // <section>
      //   <h2 className="text-xl font-semibold mb-4">Our Products & Solutions</h2>
      //   <div className="grid md:grid-cols-3 gap-4">
      //     {business.products.map((product) => (
      //       <div key={product.id} className="bg-white p-4 shadow rounded-lg border border-blue-200">
      //         <h4 className="font-bold">{product.name}</h4>
      //         <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      //       </div>
      //     ))}
      //   </div>
      // </section>

//       {/* Management Section */}
      // <section>
      //   <h2 className="text-xl font-semibold mb-4">Leadership Team</h2>
      //   <div className="grid md:grid-cols-3 gap-4">
      //     {business.management.map((member) => (
      //       <div key={member.id} className="bg-white p-4 shadow rounded-lg border border-blue-200">
      //         <h4 className="font-bold">{member.name}</h4>
      //         <p className="text-sm text-gray-700">{member.title}</p>
      //         <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
      //       </div>
      //     ))}
      //   </div>
      // </section>

//       {/* Financial Section */}
      // <section>
      //   <h2 className="text-xl font-semibold mb-4">Financial Performance</h2>
      //   <div className="grid md:grid-cols-4 gap-4">
      //     <div className="bg-white p-4 shadow rounded-lg">Revenue: ₹{business.financials[0]?.revenue}M</div>
      //     <div className="bg-white p-4 shadow rounded-lg">Net Profit: ₹{business.financials[0]?.netProfit}M</div>
      //     <div className="bg-white p-4 shadow rounded-lg">Profit Margin: {business.financials[0]?.profitMargin}%</div>
      //     <div className="bg-white p-4 shadow rounded-lg">Operating Expenses: ₹{business.financials[0]?.operatingExpenses}M</div>
      //   </div>
      // </section>

//       {/* Achievements + Shares */}
      // <section className="grid md:grid-cols-2 gap-4">
      //   <div className="bg-white p-4 shadow rounded-lg border border-blue-200">
      //     <h3 className="font-bold mb-2">Key Achievements</h3>
      //     <p>{business.achievements}</p>
      //   </div>
      //   <div className="bg-white p-4 shadow rounded-lg border border-blue-200">
      //     <h3 className="font-bold mb-2">Shares & Market Data</h3>
      //     <p>Total Shares: {business.totalShares}</p>
      //     <p>Current Share Price: ₹{business.sharePrice}</p>
      //   </div>
      // </section>
//     </div>
//   );
// }



"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import AboutSection from "./_components/AboutCompany";
import PhilosophySection from "./_components/Philosophy";
import ProductsSection from "./_components/Products";
import ManagementSection from "./_components/Management";
import FinancialsSection from "./_components/Financials";
import AchievementsSection from "./_components/Achievements";
import Card from "./_components/Test";
import PlusIcon from "./_components/PlusIcon";
import SimpleBarChart from "./_components/DisplayCharts";



export default function CompanyProfilePage({ params }) {
  const { businessId } = React.use(params)
  
  const [business, setBusiness]=useState(null)

  useEffect(() => {
    async function fetchBusiness() {
      const res= await axios.get(`/api/admin/business/${businessId}`)
      // setData(result);
      setBusiness(res.data.soloBusiness)

    }
    fetchBusiness();
  }, [params.id]);

   if (!business)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );

  // const business = data.soloBusiness;

  return (
    <div className="p-6 space-y-6  min-h-screen">
      <AboutSection business={business} />
      <PhilosophySection business={business} />
      {/* <ProductsSection products={business?.products} /> */}
      <ManagementSection management={business?.management} />
      <FinancialsSection financials={business?.financials} />
      <AchievementsSection business={business} /> 
      <div className="fixed bottom-6 right-6 z-50">
        <PlusIcon />
      </div>
      <SimpleBarChart/>
      
    </div>
  );
}
