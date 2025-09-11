export default function ProductsSection({ products }) {
  return (
    <section id="products" className="text-center">
      <h2 className="text-xl font-semibold mb-4">Our Products & Solutions</h2>
      <div className="grid md:grid-cols-3 gap-6 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#8DD8FF] h-40 w-40 rounded-full p-4 shadow border border-blue-200 flex flex-col items-center justify-center text-center"
          >
            <h4 className="font-bold">{product.name}</h4>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
