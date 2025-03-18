import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-black text-white shadow-lg">
            {/* Logo */}
            <div className="text-2xl font-bold text-yellow-500">
                lux<span className="text-white">ride</span>
            </div>

            {/* Navigation */}
            <nav className="bg-gray-800 rounded-full px-4 py-2 shadow-md flex gap-6 items-center">
                <Link href="/" className="text-yellow-500 font-medium hover:text-white transition">Home</Link>
                <Link href="/services" className="hover:text-yellow-500 transition">Services</Link>
                <Link href="/prices" className="hover:text-yellow-500 transition">Prices</Link>
                <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
                <Link href="/terms" className="hover:text-yellow-500 transition">Terms</Link>
            </nav>

            {/* Call-to-Action Button */}
            <Link
                href="/book"
                className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                     text-black px-6 py-3 rounded-full flex items-center gap-3
                     hover:scale-105 transform transition-all duration-300
                     shadow-[0_0_20px_rgba(234,179,8,0.5)]
                     animate-pulse hover:animate-none
                     border-2 border-yellow-300"
            >
                <span className="font-bold tracking-wider">BOOK NOW</span>
                <span className="text-xl animate-bounce">🚗</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            </Link>
        </header>
    )
}

export default Header