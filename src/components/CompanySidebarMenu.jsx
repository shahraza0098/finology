// // import Link from "next/link";

// // const menuItems = [
// //   { name: "Overview", href: "#" },
// //   { name: "Philosophy", href: "#philosophy" },
// //   { name: "Team", href: "#team" },
// //   { name: "Financials", href: "#financials" },
// //   { name: "Products", href: "#products" },
// //   { name: "Achievements", href:"#achievements"},
// //   { name: "Contact", href: "#contact" },
// //   { name: "About", href: "#about" },
// // ];

// // export default function CompanySidebarMenu() {
// //   return (
// //     <aside className="w-64  bg-[#edf4f7] border-r shadow-2xl  border-gray-200 p-6 hidden md:block">
// //       <h2 className="text-lg font-bold text-blue-600 mb-6">Company Menu</h2>
// //       <nav className="space-y-3">
// //         {menuItems.map((item) => (
// //           <Link
// //             key={item.name}
// //             href={item.href}
// //             className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600"
// //           >
// //             {item.name}
// //           </Link>
// //         ))}
// //       </nav>
// //     </aside>
// //   );
// // }


// import Link from "next/link";

// const menuItems = [
//   { name: "Overview", href: "#" },
//   { name: "Philosophy", href: "#philosophy" },
//   { name: "Team", href: "#team" },
//   { name: "Financials", href: "#financials" },
//   { name: "Products", href: "#products" },
//   { name: "Achievements", href:"#achievements"},
//   { name: "Contact", href: "#contact" },
//   { name: "About", href: "#about" },
// ];

// export default function CompanySidebarMenu() {
//   return (
//     <div className="flex flex-row  bg-[#edf4f7] border-r shadow-2xl  border-gray-200 p-6  ">
//       <h2 className="text-lg font-bold text-blue-600 mb-6 hidden lg:block">Company Menu</h2>
//       <nav className="flex flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:items-center justify-center">
//         {menuItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }










import Link from "next/link";

const menuItems = [
  { name: "Overview", href: "#" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Team", href: "#team" },
  { name: "Financials", href: "#financials" },
  { name: "Products", href: "#products" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

export default function CompanySidebarMenu() {
  return (
    <div className="bg-[#ffffff] border-b shadow-md border-gray-200 p-6">
      {/* Heading visible only on lg+ */}
      

      {/* Centered menu */}
      <nav className="flex justify-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 whitespace-nowrap transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
