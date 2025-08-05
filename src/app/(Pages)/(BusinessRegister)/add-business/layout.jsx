'use client'

import { BusinessFormContextProvider } from '@/context/BusinessFormContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'


const steps = [
  {
    label: 'Business Info',
    icon: '🏢',
    path: '/add-business/business-info',
  },
  {
    label: 'Share Details',
    icon: '📈',
    path: '/add-business/share-details',
  },
  {
    label: 'Location',
    icon: '📍',
    path: '/add-business/add-location',
  },
]

export default function Layout({ children }) {
  const pathname = usePathname()

  return (
    <BusinessFormContextProvider>
      <div className="min-h-screen flex bg-gradient-to-br from-[#231942] via-[#5e548e] to-[#9f86c0] text-white">
        
        {/* Sidebar */}
        <aside className="w-72 bg-[#2a1f4a] p-6 flex flex-col justify-between shadow-xl relative">
          <div>
            <h2 className="text-2xl font-bold mb-8 tracking-wide text-white">Business Steps</h2>
            <ul className="space-y-6">
              {steps.map((step) => {
                const isActive = pathname.includes(step.path)
                return (
                  <li key={step.label} className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300',
                        isActive
                          ? 'bg-[#e0b1cb] text-[#231942] shadow-lg'
                          : 'bg-[#3a2d5a] text-white'
                      )}
                    >
                      {step.icon}
                    </div>
                    <Link
                      href={step.path}
                      className={cn(
                        'text-base font-medium transition-colors duration-300',
                        isActive ? 'text-[#e0b1cb]' : 'text-gray-300 hover:text-white'
                      )}
                    >
                      {step.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Sidebar Bottom Image */}
          <div className="mt-10">
             <Image
               src="/undraw_new-entries.svg"
               width={500}
               height={500}
               alt="new entries illustration"
            />
               
            <Link
              href="/"
              className="block mt-6 text-sm text-center text-[#e0b1cb] hover:underline"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </aside>

        {/* Main Form Area */}
        <main className="flex-1 p-10 bg-[#f9f7fb] text-black">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
            {children}
          </div>
        </main>
      </div>
    </BusinessFormContextProvider>
  )
}
