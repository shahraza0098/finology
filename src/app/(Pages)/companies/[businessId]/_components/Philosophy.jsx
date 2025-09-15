

export default function PhilosophySection({ business }) {
  return (
          
      <section id="philosophy" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <div className="  rounded-xl p-4 border border-[#9112BC]">
          <h3 className="font-bold text-gray-800 mb-2">Mission Statement</h3>
          <p className="font-heading text-gray-600 ">{business.mission}</p>
        </div>
        <div className="  rounded-xl p-4 border border-[#08CB00]">
          <h3 className="font-bold text-gray-800 mb-2">Vision Statement</h3>
          <p className="text-gray-600">{business.vision}</p>
        </div>
        <div className="  rounded-xl p-4 border border-[#3396D3]">
          <h3 className="font-bold text-gray-800 mb-2">Core Values</h3>
          <p className="text-gray-600">{business.coreValues}</p>
        </div>
      </section>
  );
}

