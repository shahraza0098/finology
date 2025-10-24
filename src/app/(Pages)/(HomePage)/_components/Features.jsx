// // src/components/Features.tsx
// import {HoverEffect} from "@/components/ui/card-hover-effect"; 

// export const features = [
//   {
//     title: "Buy & Sell Shares",
//     description: "Easily purchase and sell shares of verified local businesses through a secure platform.",
//     link:"#",
//   },
//   {
//     title: "Investor Dashboard",
//     description: "Track all your investments, share history, and returns in a personalized dashboard.",
//     link:"#",
//   },
//   {
//     title: "Level Up Rewards",
//     description: "Frequent investors are rewarded with badges and level-based benefits.",
//     link:"#",
//   },
// ];

// export default function Features() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <div>
//         <h2 className="text-3xl font-bold text-center mb-4">Our Platform Features</h2>
//       </div>
//       <div>
//         <HoverEffect items={features} />
//       </div>
      
//     </div>
//   );
// }


// src/components/Features.jsx
import Image from "next/image";

export const features = [
  {
    title: "Buy & Sell Shares",
    description:
      "Easily purchase and sell shares of verified local businesses through a secure platform.",
    image: "/buyshellshare.jpg",
  },
  {
    title: "Investor Dashboard",
    description:
      "Track all your investments, share history, and returns in a personalized dashboard.",
    image: "/dashobardinvestor.jpg",
  },
  {
    title: "Level Up Rewards",
    description:
      "Frequent investors are rewarded with badges and level-based benefits.",
    image: "/levelup.jpg",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 tracking-tight">
        Our Platform Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent opacity-60"></div> */}
            </div>

            {/* Content Section */}
            <div className="p-7 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-[#5409DA] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



