
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 'prod-1',
    name: 'Colombian Roast',
    price: 18.0,
    image: '/hero.jpg',
    checkoutUrl: 'https://squareup.com/checkout/fake/colombian-roast'
  },
  {
    id: 'prod-2',
    name: 'Espresso Blend',
    price: 20.0,
    image: '/hero.jpg',
    checkoutUrl: 'https://squareup.com/checkout/fake/espresso-blend'
  }
]

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center text-white text-center p-20">
        <h1 className="text-5xl font-bold">Monarch-Inspired Coffee</h1>
        <p className="mt-4 text-xl">Hand-roasted, bold flavors, smooth finish.</p>
      </section>

      <section className="p-10 grid md:grid-cols-2 gap-8">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </section>
    </div>
  )
}
