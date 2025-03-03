import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>This is Homepage</h1>
      <a href="/users">USERs</a>
      <Link href="/users">Users_COMP</Link>
      <Link href="/">Home</Link>

      <ProductCard />
    </main>
  )
}
