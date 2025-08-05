'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/UI/input'
// import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

import { UserButton } from '@clerk/nextjs'




const navLinks = [
  { name: 'Businesses', href: '/admin/businesses' },
  { name: 'Investors', href: '/admin/investors' },
  { name: 'Reports', href: '/admin/reports' },
]

export default function AdminLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold mb-6 text-primary">Admin Dashboard Pro</div>
          <nav className="space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'block px-4 py-2 rounded-lg font-medium',
                  pathname.startsWith(link.href)
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-sm text-gray-600">
          <p>Admin User</p>
          <p className="text-xs">Settings | Logout</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {/* Top Bar */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <div className="flex gap-6 text-sm text-gray-600 font-medium">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'hover:text-primary',
                  pathname.startsWith(link.href) && 'text-primary font-semibold underline'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-72">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search businesses, investors..."
                className="pl-8 bg-gray-100"
              />
            </div>
            <div className="w-8 h-8">
              <UserButton />
            </div>
          </div>
        </header>

        {/* Page Content */}
        
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
