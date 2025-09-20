// src/components/Header.tsx
"use client"
import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';
import ConditionalUserButton from '@/components/ConditionalUserButton';
import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'
export default function Header() {

// const { user, isLoaded } = useUser()

// if(!user || !isLoaded){
//   return <div>loading...</div>
// }
// absolute inset-x-0 top-0 z-50
  return (
    <header className=" bg-[#8DD8FF]">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center   text-gray-700">
        {/* Logo */}
        <div className="h-10 w-auto flex items-center">
          <Image
            src="/finology_logoo.png"
            alt="company_logo"
            width={120}   // smaller width
            height={40}   // smaller height
            className="object-contain"
          />
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium ">
          <Link href="/home" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Home</Link>
          <Link href="/about" className= ' text-base font-semibold tracking-wide hover:text-indigo-400'>About</Link>
          <Link href="/features" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Features</Link>
          <Link href="/marketplace" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Marketplace</Link>
          <Link href="/companies" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Company</Link>
        </nav>

        <div>
          {/* {user?<div className='className="text-sm font-semibold hover:text-indigo-400'><UserButton/></div>:<Link href="#" className='className="text-sm font-semibold hover:text-indigo-400'>Log in</Link>} */}
          <ConditionalUserButton/>
          {/* <a href="#" className="text-sm font-semibold hover:text-indigo-400">Log in <span aria-hidden="true">→</span></a> */}
        </div>
      </div>
    </header>
  );
}
