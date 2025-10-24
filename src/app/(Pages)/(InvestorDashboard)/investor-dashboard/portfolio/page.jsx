// import React from 'react'

// function Portfolio() {
//   return (
//     <div>
//       <h1>Portfolio</h1>
//     </div>
//   )
// }

// export default Portfolio




// "use client";
// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { useAuth } from "@/context/AuthContext";
// import axios from "axios";

// export default function PortfolioPage() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//    const {  dbUser } = useAuth();
//       const userId=dbUser?.id
//       console.log("db user ID", userId);
      
  
  
//       const { isSignedIn, user, isLoaded } = useUser();
//       console.log("inspect user object", user)

//   useEffect(() => {
    
//        const fetchUserInvestment = async () => {
//           try {
//             if (!dbUser?.id) return; // ✅ wait until dbUser is ready
      
//             const res = await axios.get(`/api/investor/dashboard/${dbUser.id}`);
//             setData(res.data);
//             setLoading(false);
            
//           } catch (err) {
//             console.error("Failed to fetch investments", err);
//           }
//         };
      
//         fetchUserInvestment();
//   }, [dbUser]);

//   if (loading) return <div className="text-center p-10 text-gray-400">Loading portfolio...</div>;

//   const { portfolio } = data;

//   // 🧮 Calculations
//   const totalInvested = portfolio.shares.reduce(
//     (acc, s) => acc + s.quantity * s.priceAtBuy,
//     0
//   );

//   const currentValue = portfolio.shares.reduce(
//     (acc, s) => acc + s.quantity * s.business.sharePrice,
//     0
//   );

//   const gainLoss = currentValue - totalInvested;
//   const gainPercent = ((gainLoss / totalInvested) * 100).toFixed(2);
//   const totalBusinesses = portfolio.shares.length;

//   return (
//     <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
//       <h1 className="text-3xl font-bold mb-8 text-center">My Portfolio</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
//         <SummaryCard title="Total Invested" value={`₹${totalInvested.toLocaleString()}`} />
//         <SummaryCard title="Current Value" value={`₹${currentValue.toLocaleString()}`} />
//         <SummaryCard
//           title="Gain/Loss"
//           value={`${gainPercent}%`}
//           valueClass={gainLoss >= 0 ? "text-green-400" : "text-red-400"}
//         />
//         <SummaryCard title="Businesses Invested" value={totalBusinesses} />
//       </div>

//       {/* Share List */}
//       <div className="bg-gray-800 rounded-2xl p-5 shadow-lg">
//         <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Your Holdings</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-gray-300">
//             <thead>
//               <tr className="border-b border-gray-700 text-gray-400 text-sm uppercase">
//                 <th className="py-3 px-4">Business</th>
//                 <th className="py-3 px-4">Quantity</th>
//                 <th className="py-3 px-4">Buy Price</th>
//                 <th className="py-3 px-4">Current Price</th>
//                 <th className="py-3 px-4">Current Value</th>
//                 <th className="py-3 px-4">Gain/Loss (%)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {portfolio.shares.map((share, i) => {
//                 const currentVal = share.quantity * share.business.sharePrice;
//                 const invested = share.quantity * share.priceAtBuy;
//                 const percent = (((currentVal - invested) / invested) * 100).toFixed(2);

//                 return (
//                   <tr
//                     key={i}
//                     className="border-b border-gray-700 hover:bg-gray-700/50 transition"
//                   >
//                     <td className="py-3 px-4 font-medium">{share.business.name}</td>
//                     <td className="py-3 px-4">{share.quantity}</td>
//                     <td className="py-3 px-4">₹{share.priceAtBuy}</td>
//                     <td className="py-3 px-4">₹{share.business.sharePrice}</td>
//                     <td className="py-3 px-4">₹{currentVal.toLocaleString()}</td>
//                     <td
//                       className={`py-3 px-4 font-semibold ${
//                         percent >= 0 ? "text-green-400" : "text-red-400"
//                       }`}
//                     >
//                       {percent}%
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SummaryCard({ title, value, valueClass }) {
//   return (
//     <div className="bg-gray-800 rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition">
//       <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
//       <p className={`text-2xl font-bold ${valueClass || ""}`}>{value}</p>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

export default function PortfolioPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dbUser } = useAuth();
  const userId = dbUser?.id;

  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const fetchUserInvestment = async () => {
      try {
        if (!dbUser?.id) return; // ✅ wait until dbUser is ready

        const res = await axios.get(`/api/investor/dashboard/${dbUser.id}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch investments", err);
      }
    };

    fetchUserInvestment();
  }, [dbUser]);

  if (loading)
    return (
      <div className="text-center p-10 text-gray-500">Loading portfolio...</div>
    );

  const { portfolio } = data;

  // 🧮 Calculations
  const totalInvested = portfolio.shares.reduce(
    (acc, s) => acc + s.quantity * s.priceAtBuy,
    0
  );

  const currentValue = portfolio.shares.reduce(
    (acc, s) => acc + s.quantity * s.business.sharePrice,
    0
  );

  const gainLoss = currentValue - totalInvested;
  const gainPercent = ((gainLoss / totalInvested) * 100).toFixed(2);
  const totalBusinesses = portfolio.shares.length;

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        My Portfolio
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <SummaryCard
          title="Total Invested"
          value={`₹${totalInvested.toLocaleString()}`}
        />
        <SummaryCard
          title="Current Value"
          value={`₹${currentValue.toLocaleString()}`}
        />
        <SummaryCard
          title="Gain/Loss"
          value={`${gainPercent}%`}
          valueClass={gainLoss >= 0 ? "text-green-600" : "text-red-500"}
        />
        <SummaryCard
          title="Businesses Invested"
          value={totalBusinesses}
        />
      </div>

      {/* Share List */}
      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2 text-gray-700">
          Your Holdings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm uppercase bg-gray-50">
                <th className="py-3 px-4">Business</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Buy Price</th>
                <th className="py-3 px-4">Current Price</th>
                <th className="py-3 px-4">Current Value</th>
                <th className="py-3 px-4">Gain/Loss (%)</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.shares.map((share, i) => {
                const currentVal = share.quantity * share.business.sharePrice;
                const invested = share.quantity * share.priceAtBuy;
                const percent = (((currentVal - invested) / invested) * 100).toFixed(2);

                return (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 font-medium">{share.business.name}</td>
                    <td className="py-3 px-4">{share.quantity}</td>
                    <td className="py-3 px-4">₹{share.priceAtBuy}</td>
                    <td className="py-3 px-4">₹{share.business.sharePrice}</td>
                    <td className="py-3 px-4">₹{currentVal.toLocaleString()}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        percent >= 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {percent}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, valueClass }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
      <p className={`text-2xl font-semibold ${valueClass || "text-gray-800"}`}>
        {value}
      </p>
    </div>
  );
}






