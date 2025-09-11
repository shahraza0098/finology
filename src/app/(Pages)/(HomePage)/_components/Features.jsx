// src/components/Features.tsx
import {HoverEffect} from "@/components/ui/card-hover-effect"; 

export const features = [
  {
    title: "Buy & Sell Shares",
    description: "Easily purchase and sell shares of verified local businesses through a secure platform.",
    link:"www.google.com",
  },
  {
    title: "Investor Dashboard",
    description: "Track all your investments, share history, and returns in a personalized dashboard.",
    link:"www.facebook.com",
  },
  {
    title: "Level Up Rewards",
    description: "Frequent investors are rewarded with badges and level-based benefits.",
    link:"www.twitter.com",
  },
];

export default function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Our Platform Features</h2>
      </div>
      <div>
        <HoverEffect items={features} />
      </div>
      
    </div>
  );
}


