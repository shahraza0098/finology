// import React from 'react'

// function Transaction() {
//   return (
//     <div>
//       <h1>Transaaction</h1>
//     </div>
//   )
// }

// export default Transaction


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "@/context/AuthContext";
// import { Card } from "@/components/ui/card";

// import { Loader2 } from "lucide-react";

// export default function TransactionsPage() {


//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { dbUser } = useAuth();

//   console.log("DB USER IN TRANSACTION PAGE", dbUser);

//    useEffect(() => {
//      const fetchUserInvestment = async () => {
//        try {
//          if (!dbUser?.id) return; // ✅ wait until dbUser is ready
 
//          const res = await axios.get(`/api/investor/dashboard/${dbUser.id}`);
//          setData(res.data.transaction);
//          setLoading(false);
//        } catch (err) {
//          console.error("Failed to fetch investments", err);
//        }
//      };
 
//      fetchUserInvestment();
//    }, [dbUser]);

//   console.log("Transactions Data:", data);
  

//   if (loading && !data)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="animate-spin h-6 w-6 text-indigo-600" />
//       </div>
//     );

//   // if (!data?.transaction?.length)
//   //   return (
//   //     <div className="flex justify-center items-center h-screen text-gray-500">
//   //       No transactions found.
//   //     </div>
//   //   );

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         Transaction History
//       </h1>

//       <div className="overflow-x-auto shadow-md rounded-xl bg-white">
//         <table className="min-w-full text-sm text-gray-700">
//           <thead className="bg-indigo-600 text-white text-left">
//             <tr>
//               <th className="px-6 py-3">Business</th>
//               <th className="px-6 py-3">Type</th>
//               <th className="px-6 py-3">Quantity</th>
//               <th className="px-6 py-3">Price</th>
//               <th className="px-6 py-3">Status</th>
//               <th className="px-6 py-3">Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((txn, i) => (
//               <tr
//                 key={i}
//                 className={`border-b hover:bg-gray-100 transition ${
//                   txn.type === "BUY"
//                     ? "text-green-700"
//                     : "text-red-600"
//                 }`}
//               >
//                 <td className="px-6 py-4 font-medium">
//                   {txn.business?.name || "-"}
//                 </td>
//                 <td className="px-6 py-4">{txn.type}</td>
//                 <td className="px-6 py-4">{txn.quantity}</td>
//                 <td className="px-6 py-4">₹{txn.price}</td>
//                 <td className="px-6 py-4">{txn.status}</td>
//                 <td className="px-6 py-4 text-gray-500">
//                   {new Date(txn.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

export default function TransactionsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dbUser } = useAuth();

  useEffect(() => {
    const fetchUserInvestment = async () => {
      try {
        if (!dbUser?.id) return;
        const res = await axios.get(`/api/investor/dashboard/${dbUser.id}`);
        setData(res.data.transaction);
      } catch (err) {
        console.error("Failed to fetch investments", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInvestment();
  }, [dbUser]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Loader2 className="animate-spin h-8 w-8 text-indigo-600" />
      </div>
    );

  if (!data || data.length === 0)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-500">
        <h2 className="text-lg font-medium">No transactions found</h2>
        <p className="text-sm mt-2 text-gray-400">
          Your recent activity will appear here once you start investing.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/70 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 tracking-tight">
          Transaction History
        </h1>

        <div className="overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-blue-100/50 
          backdrop-blur-md bg-white/70">
          <table className="w-full text-sm text-gray-700">
            {/* Header */}
            <thead className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Business</th>
                <th className="px-6 py-3 text-left font-medium">Type</th>
                <th className="px-6 py-3 text-left font-medium">Quantity</th>
                <th className="px-6 py-3 text-left font-medium">Price</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="backdrop-blur-xl">
              {data.map((txn, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-blue-50/40 transition-all duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {txn.business?.name || "-"}
                  </td>

                  {/* Type with pill color */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        txn.type === "BUY"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {txn.type}
                    </span>
                  </td>

                  <td className="px-6 py-4">{txn.quantity}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    ₹{txn.price.toLocaleString()}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        txn.status === "COMPLETED"
                          ? "bg-blue-100 text-blue-700"
                          : txn.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {new Date(txn.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subtle Info */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Your latest investment transactions appear here in real time.
        </p>
      </div>
    </div>
  );
}

