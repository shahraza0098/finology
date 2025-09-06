// src/components/HowItWorks.jsx
import {
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Briefcase,
  Lock,
} from "lucide-react";

const howItWorks = [
  {
    title: "Browse Opportunities",
    description:
      "Discover local businesses, analyze their profiles, and find investment opportunities that match your interests and values.",
    icon: <Search className="h-8 w-8 text-blue-700" />,
  },
  {
    title: "Invest Confidently",
    description:
      "Seamlessly invest in local businesses with secure transactions and transparent financial reporting. Your capital empowers local growth.",
    icon: <ShieldCheck className="h-8 w-8 text-blue-700" />,
  },
  {
    title: "Watch Your Impact Grow",
    description:
      "Track your investments and see the real-world impact your support has on the businesses and the community you care about.",
    icon: <TrendingUp className="h-8 w-8 text-blue-700" />,
  },
];

const whyInvest = [
  {
    title: "Community Impact",
    description:
      "Investing locally directly supports job creation, economic growth, and vibrant neighborhoods right where you live.",
    icon: <Users className="h-8 w-8 text-teal-700" />,
  },
  {
    title: "Diversified Portfolio",
    description:
      "Add unique, local assets to your investment portfolio, providing diversification beyond traditional markets.",
    icon: <Briefcase className="h-8 w-8 text-teal-700" />,
  },
  {
    title: "Transparent Market",
    description:
      "Access clear financial data and insights for each business, fostering an open and trustworthy investment environment.",
    icon: <Lock className="h-8 w-8 text-teal-700" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-[#8DD8FF] rounded-2xl">
      {/* How It Works */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {howItWorks.map((step, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Why Invest Locally */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">Why Invest Locally?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {whyInvest.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
