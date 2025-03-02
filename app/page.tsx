import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello there dipshit!</h1>
      <a href="/users">USERs</a>
      <Link href="/users">Users_COMP</Link>
    </main>
  )
}
