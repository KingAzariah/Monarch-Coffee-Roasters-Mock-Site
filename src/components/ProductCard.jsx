
export default function ProductCard({ product }) {
  return (
    <div className="border rounded shadow p-4 text-center">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <a
        href={product.checkoutUrl}
        target="_blank"
        className="inline-block mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        Buy Now
      </a>
    </div>
  )
}
