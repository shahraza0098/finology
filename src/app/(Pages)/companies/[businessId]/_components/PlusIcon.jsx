import React, { useState } from "react";
import { Plus } from "lucide-react";
import SocialIcons from "./SocialIcons";

function PlusIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Floating Social Icons */}
      <div
        className={`absolute bottom-24 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <SocialIcons />
      </div>

      {/* Plus Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-800 transition-all"
      >
        <Plus
          className={`text-white w-10 h-10 transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default PlusIcon;
