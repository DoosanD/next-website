import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
    return (
        <main className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="hero-section bg-black text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300">
                        Discover our comprehensive range of services designed to meet your needs
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/service1.jpg"
                                    alt="Service 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Service One</h3>
                                <p className="text-gray-600 mb-4">
                                    Detailed description of the first service offering and its benefits.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/service2.jpg"
                                    alt="Service 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Service Two</h3>
                                <p className="text-gray-600 mb-4">
                                    Detailed description of the second service offering and its benefits.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/service3.jpg"
                                    alt="Service 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">Service Three</h3>
                                <p className="text-gray-600 mb-4">
                                    Detailed description of the third service offering and its benefits.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Contact us today to discuss your needs and how we can help
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-yellow-600 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    )
} 