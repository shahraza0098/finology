// src/components/Features.tsx

const features = [
  {
    title: "Buy & Sell Shares",
    desc: "Easily purchase and sell shares of verified local businesses through a secure platform.",
  },
  {
    title: "Investor Dashboard",
    desc: "Track all your investments, share history, and returns in a personalized dashboard.",
  },
  {
    title: "Level Up Rewards",
    desc: "Frequent investors are rewarded with badges and level-based benefits.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-br ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold text-white mb-16 leading-tight">
          Platform Highlights
        </h3>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8 transition transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                {index + 1}
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
