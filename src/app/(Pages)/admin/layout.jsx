// 'use client'

// import { cn } from '@/lib/utils'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// // import { Avatar, AvatarFallback } from '@/components/ui/avatar'
// import { Input } from '@/components/UI/input'
// // import { Button } from '@/components/ui/button'
// import { Search } from 'lucide-react'

// import { UserButton } from '@clerk/nextjs'




// const navLinks = [
//   { name: 'Businesses', href: '/admin/businesses' },
//   { name: 'Investors', href: '/admin/investors' },
//   { name: 'Reports', href: '/admin/reports' },
// ]

// export default function AdminLayout({ children }) {
//   const pathname = usePathname()

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
//         <div>
//           <div className="text-2xl font-bold mb-6 text-primary">Admin Dashboard Pro</div>
//           <nav className="space-y-1">
//             {navLinks.map(link => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={cn(
//                   'block px-4 py-2 rounded-lg font-medium',
//                   pathname.startsWith(link.href)
//                     ? 'bg-primary text-white'
//                     : 'hover:bg-gray-100 text-gray-700'
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//         <div className="text-sm text-gray-600">
//           <p>Admin User</p>
//           <p className="text-xs">Settings | Logout</p>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50">
//         {/* Top Bar */}
//         <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
//           <div className="flex gap-6 text-sm text-gray-600 font-medium">
//             {navLinks.map(link => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={cn(
//                   'hover:text-primary',
//                   pathname.startsWith(link.href) && 'text-primary font-semibold underline'
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="relative w-72">
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//               <Input
//                 placeholder="Search businesses, investors..."
//                 className="pl-8 bg-gray-100"
//               />
//             </div>
//             <div className="w-8 h-8">
//               <UserButton />
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
        
//         <div className="p-6">{children}</div>
//       </main>
//     </div>
//   )
// }



// 'use client'

// import { cn } from '@/lib/utils'
// import { usePathname } from 'next/navigation'
// import { UserButton } from '@clerk/nextjs'
// import React, { useState } from 'react'
// import { Sidebar, SidebarBody, SidebarLink } from '@/components/UI/sidebar'
// import {
  
//   IconBrandTabler,
 
// } from '@tabler/icons-react'
// import { Building2, Users, ClipboardCheck   } from 'lucide-react';
// import { motion } from 'motion/react'

// // ---------------- Logo ----------------
// export const Logo = () => (
//   <a
//     href="#"
//     className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
//   >
//     <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
//     <motion.span
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="font-medium whitespace-pre text-black dark:text-white"
//     >
//       Acet Labs
//     </motion.span>
//   </a>
// )

// export const LogoIcon = () => (
//   <a
//     href="#"
//     className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
//   >
//     <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
//   </a>
// )

// // ---------------- Sidebar Links ----------------
// const links = [
//   {
//     label: 'Dashboard',
//     href: '/admin',
//     icon: (
//       <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
//   {
//     label: 'Businesses',
//     href: '/admin/businesses',
//     icon: (
//       <Building2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
//   {
//     label: 'Investors',
//     href: '/admin/investors',
//     icon: (
//       <Users className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
//   {
//     label: 'Reports',
//     href: '/admin/reports',
//     icon: (
//       <ClipboardCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"  />
//     ),
//   },
// ]

// // ---------------- Layout ----------------
// export default function AdminLayout({ children }) {
//   const pathname = usePathname()
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="flex min-h-screen bg-gray-50 dark:bg-neutral-900">
//       {/* Sidebar */}
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
//             {open ? <Logo /> : <LogoIcon />}
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div>
//             <SidebarLink
//               link={{
//                 label: 'Admin User',
//                 href: '#',
//                 icon: (
//                   <img
//                     src="https://assets.aceternity.com/manu.png"
//                     className="h-7 w-7 shrink-0 rounded-full"
//                     width={50}
//                     height={50}
//                     alt="Avatar"
//                   />
//                 ),
//               }}
//             />
//           </div>
//         </SidebarBody>
//       </Sidebar>

//       {/* Main Content */}
//       <main className="flex flex-1 flex-col">
//         {/* Top Bar */}
//         <header className="flex items-center justify-between border-b bg-gray-200 px-6 py-3 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
//           <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//             {pathname === '/admin'
//               ? 'Dashboard'
//               : pathname.replace('/admin/', '').toUpperCase()}
//           </h1>
//           <UserButton afterSignOutUrl="/" />
//         </header>

//         {/* Page Content with rounded corner near sidebar */}
//         <div className="flex-1 m-6 p-6">
//           <div className="h-full m-6 w-full rounded-tl-2xl bg-white shadow-sm dark:bg-neutral-800">
//             {children}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }




///header fixed on top : 



// 'use client'

// import { usePathname } from 'next/navigation'
// import { UserButton } from '@clerk/nextjs'
// import React, { useState } from 'react'
// import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
// import { IconBrandTabler } from '@tabler/icons-react'
// import { Building2, Users, ClipboardCheck } from 'lucide-react'
// import { motion } from 'motion/react'

// // ---------------- Logo ----------------
// export const Logo = () => (
//   <a
//     href="#"
//     className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
//   >
//     <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
//     <motion.span
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="font-medium whitespace-pre text-black dark:text-white"
//     >
//       Acet Labs
//     </motion.span>
//   </a>
// )

// export const LogoIcon = () => (
//   <a
//     href="#"
//     className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
//   >
//     <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
//   </a>
// )

// // ---------------- Sidebar Links ----------------
// const links = [
//   {
//     label: 'Dashboard',
//     href: '/admin',
//     icon: (
//       <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
//   {
//     label: 'Businesses',
//     href: '/admin/businesses',
//     icon: (
//       <Building2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
//   {
//     label: 'Investors',
//     href: '/admin/investors',
//     icon: (
//       <Users className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
//   {
//     label: 'Reports',
//     href: '/admin/reports',
//     icon: (
//       <ClipboardCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//     ),
//   },
// ]

// // ---------------- Layout ----------------
// export default function AdminLayout({ children }) {
//   const pathname = usePathname()
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="min-h-screen bg-[#BBFBFF] dark:bg-neutral-900">
//       {/* Fixed Top Header */}
//       <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between border-b bg-gray-200 px-6 py-3 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
//         <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//           {/* {pathname === '/admin'
//             ? 'Dashboard'
//             : pathname.replace('/admin/', '').toUpperCase()} */}
//             Admin Dashboard
//         </h1>
//         <UserButton afterSignOutUrl="/" />
//       </header>

//       {/* Page Layout (Sidebar + Main) */}
//       <div className="flex mt-[53px]">
//         {/* Sidebar (with padding so logo is below header) */}
//         <Sidebar open={open} setOpen={setOpen}>
//           <SidebarBody className="justify-between gap-10 pt-[56px]">
//             <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
//               {open ? <Logo /> : <LogoIcon />}
//               <div className="mt-8 flex flex-col gap-2">
//                 {links.map((link, idx) => (
//                   <SidebarLink key={idx} link={link} />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <SidebarLink
//                 link={{
//                   label: 'Admin User',
//                   href: '#',
//                   icon: (
//                     <img
//                       src="https://assets.aceternity.com/manu.png"
//                       className="h-7 w-7 shrink-0 rounded-full"
//                       width={50}
//                       height={50}
//                       alt="Avatar"
//                     />
//                   ),
//                 }}
//               />
//             </div>
//           </SidebarBody>
//         </Sidebar>

//         </div>

//         {/* Main Content */}
//         {/* <main className="flex flex-1 flex-col ">
//           <div className="flex-1  ">
//             <div className="h-full m-6 w-full rounded-tl-2xl bg-white shadow-sm dark:bg-neutral-800">
//               {children}
//             </div>
//           </div>
//         </main> */}
//         <main className="flex flex-1 flex-col  m-4 md:ml-[70px]">
//                 {children}
//         </main>
      
//     </div>
//   )
// }





"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  PieChart,
  CreditCard,
  TrendingUp,
  Settings,
} from "lucide-react";

export default function InvestorDashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile drawer
  const pathname = usePathname();

  // Lock body scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const menu = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Businesses", href: "/admin/businesses", icon: PieChart },
    { name: "Investors", href: "/admin/investors", icon: CreditCard },
    { name: "Growth Plan", href: "/admin/reports", icon: TrendingUp },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  // IMPORTANT: explicitly include the tailwind classes you need here
  // so the JIT sees them. Do not try to build `lg:ml-${...}` dynamically.
  const mainMarginClass = isMobileOpen
    ? "lg:ml-0"             // when mobile drawer open, keep main full width even on lg
    : isCollapsed
    ? "lg:ml-20"            // collapsed sidebar width = w-20 -> ml-20
    : "lg:ml-64";           // expanded sidebar width = w-64 -> ml-64

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile topbar (shown on small screens) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-4 py-3">
        <button
          aria-label="Open menu"
          onClick={() => setIsMobileOpen((s) => !s)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
        <div className="text-lg font-semibold">Admin Dashboard</div>
        <div style={{ width: 36 }} /> {/* spacer to center title */}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-40 bg-white border-r border-gray-200 text-gray-900 flex flex-col transition-all duration-300
          ${isCollapsed ? "w-20" : "w-64"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        role="navigation"
        aria-label="Investor sidebar"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
              <Home size={18} />
            </div>
            <span className={`${isCollapsed ? "hidden" : "text-lg font-semibold"}`}>
              Investor
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* collapse toggle (desktop only) */}
            <button
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={() => setIsCollapsed((s) => !s)}
              className="hidden lg:inline-flex p-2 rounded hover:bg-gray-100"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            {/* mobile close */}
            <button
              aria-label="Close menu"
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 rounded hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-auto px-1 py-3">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 mx-2 rounded-md transition-colors
                  ${active ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-100"}
                  ${isCollapsed ? "justify-center" : "justify-start"}`}
                onClick={() => setIsMobileOpen(false)}
                title={item.name}
              >
                <Icon className="w-5 h-5" />
                <span className={`${isCollapsed ? "hidden" : "ml-2"}`}>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer (profile / quick actions) */}
        <div className="px-3 py-4 border-t border-gray-200">
          <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}>
            <div className="w-9 h-9 rounded-md bg-gray-200 flex items-center justify-center text-gray-700">
              <span className="text-sm font-semibold">ID</span>
            </div>

            <div className={`${isCollapsed ? "hidden" : "flex flex-col"}`}>
              <span className="text-sm font-medium">Investor Name</span>
              <span className="text-xs text-gray-500">you@domain.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden
        />
      )}

      {/* Main content */}
      <main className={`flex-1 min-h-screen bg-gray-50 transition-all duration-300 ${mainMarginClass}`}>
        {/* spacer for mobile topbar */}
        <div className="lg:hidden h-14" />
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}