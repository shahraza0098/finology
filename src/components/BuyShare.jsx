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



"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"

export default function BuyShare({ business, onClose }) {
  const businessId = business?.id
  const [quantity, setQuantity] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleClick = async () => {
    const qty = Number(quantity); 
    if (!qty || qty <= 0) return alert("Please enter a valid quantity")
    try {
      setLoading(true)
      const res = await axios.post(`/api/investor/${businessId}/buyshare`, {
        quantity:qty,
      })
      console.log("Buy success:", res.data)
      alert("Shares purchased successfully!")
      onClose?.()
    } catch (err) {
      console.error(err)
      alert("Failed to buy shares")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 p-2">
      <h3 className="text-gray-700">Remaining Shares: {business.totalShares}</h3>
      <Input
        type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={handleChange}
      />
      <Button
        variant="outline"
        onClick={handleClick}
        disabled={loading}
        className="w-full"
      >
        {loading ? "Processing..." : "Confirm Buy"}
      </Button>
    </div>
  )
}

