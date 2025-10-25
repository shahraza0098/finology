
// // import { useSearchParams } from "next/navigation"
// import { BusinessFormContextProvider } from '@/context/BusinessFormContext'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'






// export default async function Layout({ searchParams,children }) {
//   const pathname = usePathname()
//     const params = await searchParams   
//     const businessId = params.businessId
//     const steps = [
//   {
//     label: 'Contact Details',
//     icon: '📞',
//     path: `/complete-registration/contact-details?businessId=${businessId}`,
//   },
//   {
//     label: 'Company Mission',
//     icon: '🎯',
//     path: `/complete-registration/company-mission?businessId=${businessId}`,
//   },
//   {
//     label: 'Staff',
//     icon: '👥',
//     path: `/complete-registration/add-staffs?businessId=${businessId}`,
//   },
//   {
//     label: 'Financials',
//     icon: '💰',
//     path: `/complete-registration/financials?businessId=${businessId}`,
//   },
//   {
//     label:'Products',
//     icon: '🛍️',
//     path: `/complete-registration/add-products?businessId=${businessId}`,
//   }
// ]


//   return (
//     <BusinessFormContextProvider>
//       <div className="min-h-screen flex bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
        
//         {/* Sidebar */}
//         <aside className="w-72 bg-[#2a1f4a] p-6 flex flex-col justify-between shadow-xl relative">
//           <div>
//             <h2 className="text-2xl font-bold mb-8 tracking-wide text-white">Business Steps</h2>
//             <ul className="space-y-6">
//               {steps.map((step) => {
//                 const isActive = pathname === step.path.split("?")[0]

//                 return (
//                   <li key={step.label} className="flex items-center gap-4">
//                     <div
//                       className={cn(
//                         'w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300',
//                         isActive
//                           ? 'bg-[#e0b1cb] text-[#231942] shadow-lg'
//                           : 'bg-[#3a2d5a] text-white'
//                       )}
//                     >
//                       {step.icon}
//                     </div>
//                     <Link
//                       href={step.path}
//                       className={cn(
//                         'text-base font-medium transition-colors duration-300',
//                         isActive ? 'text-[#e0b1cb]' : 'text-gray-300 hover:text-white'
//                       )}
//                     >
//                       {step.label}
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>

//           {/* Sidebar Bottom Image */}
//           <div className="mt-10">
//              <Image
//                src="/undraw_new-entries.svg"
//                width={500}
//                height={500}
//                alt="new entries illustration"
//             />
               
//             <Link
//               href="/"
//               className="block mt-6 text-sm text-center text-[#e0b1cb] hover:underline"
//             >
//               ← Back to Dashboard
//             </Link>
//           </div>
//         </aside>

//         {/* Main Form Area */}
//         <main className="flex-1 p-10 bg-[#f9f7fb] text-black">
//           <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
//             {children}
//           </div>
//         </main>
//       </div>
//     </BusinessFormContextProvider>
//   )
// }


//src/app/complete-registration/layout.jsx
// import { Suspense } from 'react'
// import { BusinessFormContextProvider } from "@/context/BusinessFormContext"
// import Sidebar from "./_components/LayoutSidebar"

// export default  function Layout({ children   }) {
  
    
// //  const params = await searchParams   // ✅ await the whole thing
// //   const businessId = params?.businessId
//   // const businessId = "6ad35eee-d012-4fca-90bc-8990316555e8"
  

//   return (
//     <BusinessFormContextProvider>
//       <div className="min-h-screen flex bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
//         <Suspense fallback={<div>Loading...</div>}>
//         <Sidebar   />  
//         </Suspense>
//         <main className="flex-1 p-10 bg-[#f9f7fb] text-black">
//           <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
//             {children}
//           </div>
//         </main>
//       </div>
//     </BusinessFormContextProvider>
//   )
// }




// "use client"

// import { useState, Suspense } from "react"
// import { useSearchParams, usePathname } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"
// import { BusinessFormContextProvider } from "@/context/BusinessFormContext"
// import { cn } from "@/lib/utils"
// import { Menu, X } from "lucide-react"

// export default function Layout({ children }) {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const businessId = searchParams.get("businessId")

//   const steps = [
//     { label: "Contact Details", icon: "📞", path: `/complete-registration/contact-details?businessId=${businessId}` },
//     { label: "Company Mission", icon: "🎯", path: `/complete-registration/company-mission?businessId=${businessId}` },
//     { label: "Staff", icon: "👥", path: `/complete-registration/add-staffs?businessId=${businessId}` },
//     { label: "Financials", icon: "💰", path: `/complete-registration/financials?businessId=${businessId}` },
//     { label: "Products", icon: "🛍️", path: `/complete-registration/add-products?businessId=${businessId}` },
//   ]

//   return (
//     <BusinessFormContextProvider>
//       <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
//         {/* ======= Mobile Header ======= */}
//         <div className="flex md:hidden items-center justify-between p-4 bg-[#2a1f4a]/80 backdrop-blur-md border-b border-white/10">
//           <h1 className="text-lg font-semibold tracking-wide">Business Steps</h1>
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-md hover:bg-white/10 transition"
//           >
//             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* ======= Sidebar ======= */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <aside
//             className={cn(
//               "fixed md:static z-50 inset-y-0 left-0 w-72 bg-[#2a1f4a] p-6 flex flex-col justify-between shadow-xl transform transition-transform duration-300 ease-in-out",
//               sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//             )}
//           >
//             <div>
//               <h2 className="text-2xl font-bold mb-8 tracking-wide text-white hidden md:block">
//                 Business Steps
//               </h2>
//               <ul className="space-y-6">
//                 {steps.map((step) => {
//                   const isActive = pathname === step.path.split("?")[0]
//                   return (
//                     <li key={step.label} className="flex items-center gap-4">
//                       <div
//                         className={cn(
//                           "w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300",
//                           isActive
//                             ? "bg-[#e0b1cb] text-[#231942] shadow-lg"
//                             : "bg-[#3a2d5a] text-white"
//                         )}
//                       >
//                         {step.icon}
//                       </div>
//                       <Link
//                         href={step.path}
//                         onClick={() => setSidebarOpen(false)}
//                         className={cn(
//                           "text-base font-medium transition-colors duration-300",
//                           isActive ? "text-[#e0b1cb]" : "text-gray-300 hover:text-white"
//                         )}
//                       >
//                         {step.label}
//                       </Link>
//                     </li>
//                   )
//                 })}
//               </ul>
//             </div>

//             <div className="mt-10">
//               <Image
//                 src="/undraw_new-entries.svg"
//                 width={400}
//                 height={400}
//                 alt="new entries illustration"
//                 className="hidden md:block mx-auto"
//               />
//               <Link
//                 href="/"
//                 className="block mt-6 text-sm text-center text-[#e0b1cb] hover:underline"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 ← Back to Dashboard
//               </Link>
//             </div>
//           </aside>
//         </Suspense>

//         {/* ======= Overlay for Mobile ======= */}
//         {sidebarOpen && (
//           <div
//             onClick={() => setSidebarOpen(false)}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
//           />
//         )}

//         {/* ======= Main Content ======= */}
//         <main className="flex-1 p-4 md:p-10 bg-[#f9f7fb] text-black transition-all duration-300">
//           <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10">
//             {children}
//           </div>
//         </main>
//       </div>
//     </BusinessFormContextProvider>
//   )
// }


import { Suspense } from "react";
import { BusinessFormContextProvider } from "@/context/BusinessFormContext";
import Sidebar from "./_components/LayoutSidebar";

export default function Layout({ children }) {
  return (
    <BusinessFormContextProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
        {/* Sidebar (responsive) */}
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Sidebar />
        </Suspense>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 bg-[#f9f7fb] text-black">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
            {children}
          </div>
        </main>
      </div>
    </BusinessFormContextProvider>
  );
}
