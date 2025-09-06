// src/components/CallToAction.jsx
export default function CallToAction() {
  return (
    <section className="max-w-4xl mx-auto text-center px-6 py-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to shape your local economy?
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-6">
        Join LocalEquity today and become a part of a vibrant community of
        investors and local businesses.
      </p>

      {/* Button */}
      <button className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium px-6 py-2 rounded shadow transition">
        Sign Up Today
      </button>
    </section>
  );
}
