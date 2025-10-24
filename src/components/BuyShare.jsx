// import React from 'react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import axios from 'axios'
// export default function BuyShare({business}) {
//     const businessId=business?.id

//     const handleChange=()=>{

//     }
//     const handleClick=async()=>{
//         const res=await axios.post(`api/investor/${businessId}/buyshare`)
//     }
//   return (
//     <div>
//         <Input type="number" placeholder="Quantity" onChange={handleChange} /> 
//         <Button variant="outline" onClick={handleClick}>Confirm Buy</Button>
//     </div>
//   )
// }



// "use client"
// import React, { useState } from "react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import axios from "axios"

// export default function BuyShare({ business, onClose }) {
//   const businessId = business?.id
//   const [quantity, setQuantity] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e) => {
//     setQuantity(e.target.value)
//   }

//   const handleClick = async () => {
//     const qty = Number(quantity); 
//     if (!qty || qty <= 0) return alert("Please enter a valid quantity")
//     try {
//       setLoading(true)
//       const res = await axios.post(`/api/investor/${businessId}/buyshare`, {
//         quantity:qty,
//       })
//       console.log("Buy success:", res.data)
//       alert("Shares purchased successfully!")
//       onClose?.()
//     } catch (err) {
//       console.error(err)
//       alert("Failed to buy shares")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="space-y-4 p-2">
//       <h3 className="text-gray-700">Remaining Shares: {business.totalShares}</h3>
//       <Input
//         type="number"
//         placeholder="Enter quantity"
//         value={quantity}
//         onChange={handleChange}
//       />
//       <Button
//         variant="outline"
//         onClick={handleClick}
//         disabled={loading}
//         className="w-full"
//       >
//         {loading ? "Processing..." : "Confirm Buy"}
//       </Button>
//     </div>
//   )
// }

"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2 } from "lucide-react";

export default function BuyShare({ business, onClose }) {
  const businessId = business?.id;
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setQuantity(e.target.value);

  const handleClick = async () => {
    const qty = Number(quantity);
    if (!qty || qty <= 0) return alert("Please enter a valid quantity");

    try {
      setLoading(true);
      const res = await axios.post(`/api/investor/${businessId}/buyshare`, {
        quantity: qty,
      });
      alert("✅ Shares purchased successfully!");
      onClose?.();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to buy shares");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-6 rounded-2xl shadow-xl max-w-sm w-full mx-auto border border-blue-100 
      bg-gradient-to-br from-blue-50/80 via-white/70 to-indigo-50/60 backdrop-blur-md overflow-hidden">

      {/* Subtle Glass Reflection */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(173,216,255,0.4),transparent_50%)] pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
          Buy Shares
        </h2>
        {/* <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors text-lg"
        >
          ✕
        </button> */}
      </div>

      {/* Company Info */}
      <div className="relative z-10 bg-white/60 rounded-xl p-4 border border-blue-100 shadow-sm">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Company</span>
          <span className="font-medium text-gray-800">{business.name}</span>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-gray-600">Share Price</span>
          <span className="font-semibold text-blue-700">
            ₹{business.sharePrice}
          </span>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-gray-600">Available Shares</span>
          <span className="font-medium text-gray-800">
            {business.totalShares}
          </span>
        </div>
      </div>

      {/* Quantity Input */}
      <div className="mt-5 space-y-2 relative z-10">
        <label className="text-sm font-medium text-gray-700">
          Quantity
        </label>
        <Input
          type="number"
          placeholder="Enter number of shares"
          value={quantity}
          onChange={handleChange}
          className="border-blue-200 bg-white/80 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 rounded-lg"
        />
      </div>

      {/* Confirm Button */}
      <Button
        onClick={handleClick}
        disabled={loading}
        className="w-full mt-5 py-2.5 rounded-lg text-white font-medium text-base 
          bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 
          hover:shadow-[0_0_10px_rgba(99,102,241,0.4)] transition-all duration-200"
      >
        {loading ? (
          <div className="flex items-center gap-2 justify-center">
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </div>
        ) : (
          "Confirm Purchase"
        )}
      </Button>

      {/* Info Note */}
      <p className="text-xs text-gray-500 text-center mt-3 relative z-10">
        Please review your order before confirming.
      </p>
    </div>
  );
}
