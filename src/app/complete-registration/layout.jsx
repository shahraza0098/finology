
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


// src/app/complete-registration/layout.jsx
import { Suspense } from 'react'
import { BusinessFormContextProvider } from "@/context/BusinessFormContext"
import Sidebar from "./_components/LayoutSidebar"

export default  function Layout({ children   }) {
  
    
//  const params = await searchParams   // ✅ await the whole thing
//   const businessId = params?.businessId
  // const businessId = "6ad35eee-d012-4fca-90bc-8990316555e8"
  

  return (
    <BusinessFormContextProvider>
      <div className="min-h-screen flex bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
        <Suspense fallback={<div>Loading...</div>}>
        <Sidebar   />  
        </Suspense>
        <main className="flex-1 p-10 bg-[#f9f7fb] text-black">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
            {children}
          </div>
        </main>
      </div>
    </BusinessFormContextProvider>
  )
}

