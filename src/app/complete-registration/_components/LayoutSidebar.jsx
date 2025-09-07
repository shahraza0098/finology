// src/app/complete-registration/Sidebar.jsx
"use client"
 
import { useSearchParams } from 'next/navigation'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default  function Sidebar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const businessId = searchParams.get("businessId")
 

  console.log("business ID wow dede ",businessId);
  

  const steps = [
    { label: "Contact Details", icon: "📞", path: `/complete-registration/contact-details?businessId=${businessId}` },
    { label: "Company Mission", icon: "🎯", path: `/complete-registration/company-mission?businessId=${businessId}` },
    { label: "Staff", icon: "👥", path: `/complete-registration/add-staffs?businessId=${businessId}` },
    { label: "Financials", icon: "💰", path: `/complete-registration/financials?businessId=${businessId}` },
    { label: "Products", icon: "🛍️", path: `/complete-registration/add-products?businessId=${businessId}` },
  ]

  return (
    <aside className="w-72 bg-[#2a1f4a] p-6 flex flex-col justify-between shadow-xl relative">
      <div>
        <h2 className="text-2xl font-bold mb-8 tracking-wide text-white">Business Steps</h2>
        <ul className="space-y-6">
          {steps.map((step) => {
            const isActive = pathname === step.path.split("?")[0]
            return (
              <li key={step.label} className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300",
                    isActive ? "bg-[#e0b1cb] text-[#231942] shadow-lg" : "bg-[#3a2d5a] text-white"
                  )}
                >
                  {step.icon}
                </div>
                <Link
                  href={step.path}
                  className={cn(
                    "text-base font-medium transition-colors duration-300",
                    isActive ? "text-[#e0b1cb]" : "text-gray-300 hover:text-white"
                  )}
                >
                  {step.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-10">
        <Image src="/undraw_new-entries.svg" width={500} height={500} alt="new entries illustration" />
        <Link href="/" className="block mt-6 text-sm text-center text-[#e0b1cb] hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    </aside>
  )
}
