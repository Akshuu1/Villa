import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';

const DESTINATIONS = [
    { name: "Mykonos, Greece", count: 12, image: "/images/villa-exterior-1.png" },
    { name: "Bali, Indonesia", count: 8, image: "/images/hero-bg.png" }, // Reusing hero for Bali
    { name: "Tulum, Mexico", count: 15, image: "/images/villa-modern-exterior.png" },
    { name: "Phuket, Thailand", count: 6, image: "/images/villa-interior-1.png" },
    { name: "Amalfi Coast, Italy", count: 9, image: "/images/villa-exterior-1.png" },
    { name: "Aspen, USA", count: 4, image: "/images/hero-bg.png" },
];

export default function Destinations() {
    return (
        <>
            <Helmet>
                <title>Destinations | Clean Luxury Villas</title>
                <meta name="description" content="Explore our luxury villa locations across the globe." />
            </Helmet>

            <PageHeader
                title="Destinations"
                subtitle="Where would you like to wake up tomorrow?"
                image="/images/hero-bg.png"
            />

            <section className="py-20 bg-offWhite">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DESTINATIONS.map((dest) => (
                            <Link
                                key={dest.name}
                                to="/villas" // Ideally filter by destination
                                className="group relative aspect-[4/3] overflow-hidden block"
                            >
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <h3 className="text-2xl font-serif font-bold mb-2">{dest.name}</h3>
                                    <span className="text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        {dest.count} Villas
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
