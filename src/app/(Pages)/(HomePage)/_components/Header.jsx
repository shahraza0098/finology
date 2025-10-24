// // src/components/Header.tsx
// "use client"
// import Link from 'next/link';
// // import { useUser } from '@clerk/nextjs';
// import ConditionalUserButton from '@/components/ConditionalUserButton';
// import Image from 'next/image'
// // import { UserButton } from '@clerk/nextjs'
// export default function Header() {

// // const { user, isLoaded } = useUser()

// // if(!user || !isLoaded){
// //   return <div>loading...</div>
// // }
// // absolute inset-x-0 top-0 z-50
//   return (
//     <header className=" bg-[#8DD8FF]">
//       <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center   text-gray-700">
//         {/* Logo */}
//         <div className="h-10 w-auto flex items-center">
//           <Image
//             src="/finology_logoo.png"
//             alt="company_logo"
//             width={120}   // smaller width
//             height={40}   // smaller height
//             className="object-contain"
//           />
//         </div>

//         <nav className="hidden md:flex space-x-8 text-sm font-medium ">
//           <Link href="/home" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Home</Link>
//           <Link href="/about" className= ' text-base font-semibold tracking-wide hover:text-indigo-400'>About</Link>
//           <Link href="/features" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Features</Link>
//           <Link href="/marketplace" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Marketplace</Link>
//           <Link href="/companies" className='text-base font-semibold tracking-wide hover:text-indigo-400'>Company</Link>
//         </nav>

//         <div>
//           {/* {user?<div className='className="text-sm font-semibold hover:text-indigo-400'><UserButton/></div>:<Link href="#" className='className="text-sm font-semibold hover:text-indigo-400'>Log in</Link>} */}
//           <ConditionalUserButton/>
//           {/* <a href="#" className="text-sm font-semibold hover:text-indigo-400">Log in <span aria-hidden="true">→</span></a> */}
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import ConditionalUserButton from "@/components/ConditionalUserButton";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between 
        bg-white/20 backdrop-blur-lg border border-white/30 
        rounded-2xl shadow-lg shadow-blue-100/30
        transition-all duration-300
        hover:shadow-blue-200/50"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/finology_logoo.png"
            alt="company_logo"
            width={20}
            height={20}
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {[
            { href: "/home", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/features", label: "Features" },
            { href: "/investor-dashboard", label: "Dashboard" },
            { href: "/companies", label: "Company" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-gray-800 font-semibold text-base tracking-wide
              hover:text-blue-600 transition-colors duration-200
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full 
              hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <ConditionalUserButton />
        </div>
      </div>
    </header>
  );
}
