import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data);
  return { data };
  // console.log(url.href);
}

export default async function Home() {
  const { data } = await loader();
  return (
    <main className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="hero-section p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{data.data.title}</h1>
        <p className="text-lg text-gray-600 mb-6">
          {data.data.description}
        </p>
        <Link href="/users">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            USERS
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="features-section p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-card p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Feature One</h2>
          <p className="text-gray-600">A short description of the feature.</p>
        </div>
        <div className="feature-card p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Feature Two</h2>
          <p className="text-gray-600">A short description of the feature.</p>
        </div>
        <div className="feature-card p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Feature Three</h2>
          <p className="text-gray-600">A short description of the feature.</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section p-8">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Replace with dynamic ProductCard components */}
          <div className="p-4 bg-white shadow rounded-xl">
            <Image src="/placeholder.png" alt="Product" width={300} height={200} className="rounded" />
            <h3 className="text-xl mt-2">Product Name</h3>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <Image src="/placeholder.png" alt="Product" width={300} height={200} className="rounded" />
            <h3 className="text-xl mt-2">Product Name</h3>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <Image src="/placeholder.png" alt="Product" width={300} height={200} className="rounded" />
            <h3 className="text-xl mt-2">Product Name</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto p-4 bg-gray-800 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Depth Developers. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>

    </main>
  )
}
