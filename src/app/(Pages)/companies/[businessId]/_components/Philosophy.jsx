

// export default function PhilosophySection({ business }) {
//   return (
          
//       <section id="philosophy" className="grid md:grid-cols-3 gap-4">
//         <div className="bg-[#8DD8FF] shadow-md rounded-xl p-4 border border-blue-200">
//           <h3 className="font-bold text-gray-800 mb-2">Mission Statement</h3>
//           <p className="font-heading text-gray-600 ">{business.mission}</p>
//         </div>
//         <div className="bg-[#8DD8FF] shadow-md rounded-xl p-4 border border-blue-200">
//           <h3 className="font-bold text-gray-800 mb-2">Vision Statement</h3>
//           <p className="text-gray-600">{business.vision}</p>
//         </div>
//         <div className="bg-[#8DD8FF] shadow-md rounded-xl p-4 border border-blue-200">
//           <h3 className="font-bold text-gray-800 mb-2">Core Values</h3>
//           <p className="text-gray-600">{business.coreValues}</p>
//         </div>
//       </section>
//   );
// }

import React, { useState } from "react";

export default function PhilosophySection({ business }) {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "Mission Statement",
      text: business?.mission || "No mission provided",
      color: "#8DD8FF",
    },
    {
      title: "Vision Statement",
      text: business?.vision || "No vision provided",
      color: "#8DD8FF",
    },
    {
      title: "Core Values",
      text: business?.coreValues || "No core values provided",
      color: "#8DD8FF",
    },
  ];

  return (

    <section
      id="philosophy"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
    >
      
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`
            flex flex-col items-center justify-center text-center
            h-48 w-72 md:h-64 md:w-80 rounded-xl text-gray-800 cursor-pointer
            transition-all duration-300 p-4
            ${hovered === idx ? "scale-110 z-10" : hovered !== null ? "blur-sm scale-95" : ""}
          `}
          style={{ backgroundColor: card.color }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <h3 className="text-lg font-bold mb-2">{card.title}</h3>
          <p className="text-sm opacity-90">{card.text}</p>
        </div>
      ))}
    </section>
  );
}

