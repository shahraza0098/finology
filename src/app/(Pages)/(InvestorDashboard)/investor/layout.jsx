'use client'


import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { IconBrandTabler } from '@tabler/icons-react'
import { Building2, Users, ClipboardCheck } from 'lucide-react'
import { motion } from 'motion/react'

// ---------------- Logo ----------------
export const Logo = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-black dark:text-white"
    >
      Acet Labs
    </motion.span>
  </a>
)

export const LogoIcon = () => (
  <a
    href="#"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
  </a>
)

// ---------------- Sidebar Links ----------------
const links = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: (
      <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: 'Businesses',
    href: '/admin/businesses',
    icon: (
      <Building2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: 'Investors',
    href: '/admin/investors',
    icon: (
      <Users className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: 'Reports',
    href: '/admin/reports',
    icon: (
      <ClipboardCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
]

// ---------------- Layout ----------------
export default function AdminLayout({ children }) {
  
  const [open, setOpen] = useState(false)

  return (
    <div className=" flex flex-row gap-10 min-h-screen bg-[#BBFBFF] dark:bg-neutral-900">
      {/* Fixed Top Header */}
     

      {/* Page Layout (Sidebar + Main) */}
      <aside className=''>
        {/* Sidebar (with padding so logo is below header) */}
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 pt-[56px]">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: 'Admin User',
                  href: '#',
                  icon: (
                    <img
                      src="https://assets.aceternity.com/manu.png"
                      className="h-7 w-7 shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        </aside>
{/* main content */}
        <main className="flex flex-1 flex-col  m-4 ">
                {children}
        </main>
      
    </div>
  )
}
