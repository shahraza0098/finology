// 'use client'

// import { BusinessFormContextProvider } from '@/context/BusinessFormContext'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'


// const steps = [
//   {
//     label: 'Business Info',
//     icon: '🏢',
//     path: '/add-business/business-info',
//   },
//   {
//     label: 'Business Number',
//     icon: '📈',
//     path: '/add-business/share-details',
//   },
//   {
//     label: 'Location',
//     icon: '📍',
//     path: '/add-business/add-location',
//   },
// ]

// export default function Layout({ children }) {
//   const pathname = usePathname()

//   return (
//     <BusinessFormContextProvider>
//       <div className="min-h-screen flex bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
        
//         {/* Sidebar */}
//         <aside className="w-72 bg-[#2a1f4a] p-6 flex flex-col justify-between shadow-xl relative">
//           <div>
//             <h2 className="text-2xl font-bold mb-8 tracking-wide text-white">Business Steps</h2>
//             <ul className="space-y-6">
//               {steps.map((step) => {
//                 const isActive = pathname.includes(step.path)
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


'use client'

import { BusinessFormContextProvider } from '@/context/BusinessFormContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const steps = [
  { label: 'Business Info', icon: '🏢', path: '/add-business/business-info' },
  { label: 'Business Number', icon: '📈', path: '/add-business/share-details' },
  { label: 'Location', icon: '📍', path: '/add-business/add-location' },
]

export default function Layout({ children }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BusinessFormContextProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-[#f9f7fb]">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-[#2a1f4a] text-white shadow-md">
          <h2 className="text-lg font-semibold">Business Steps</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed md:static z-40 top-0 left-0 h-full md:h-auto w-64 md:w-72 bg-[#2a1f4a] text-white p-6 shadow-xl transform transition-transform duration-300 ease-in-out",
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="hidden md:block text-2xl font-bold mb-8 tracking-wide text-white">
                Business Steps
              </h2>
              <ul className="space-y-6">
                {steps.map((step) => {
                  const isActive = pathname.includes(step.path)
                  return (
                    <li key={step.label} className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300",
                          isActive
                            ? "bg-[#e0b1cb] text-[#231942] shadow-lg"
                            : "bg-[#3a2d5a] text-white"
                        )}
                      >
                        {step.icon}
                      </div>
                      <Link
                        href={step.path}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "text-base font-medium transition-colors duration-300",
                          isActive
                            ? "text-[#e0b1cb]"
                            : "text-gray-300 hover:text-white"
                        )}
                      >
                        {step.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Sidebar Footer */}
            <div className="mt-10 hidden md:block">
              <Image
                src="/undraw_new-entries.svg"
                width={400}
                height={400}
                alt="new entries illustration"
                className="mx-auto"
              />
              <Link
                href="/admin"
                className="block mt-6 text-sm text-center text-[#e0b1cb] hover:underline"
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {children}
          </div>
        </main>
      </div>
    </BusinessFormContextProvider>
  )
}

