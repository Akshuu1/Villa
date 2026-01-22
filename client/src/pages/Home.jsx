import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VillaCard from '../components/villas/VillaCard';

// Mock data
const FEATURED_VILLAS = [
    {
        id: 1,
        title: "Azure Horizon",
        location: "Mykonos",
        price: 3500,
        image: "/images/villa-exterior-1.png",
    },
    {
        id: 2,
        title: "Serenity Cove",
        location: "Phuket",
        price: 2800,
        image: "/images/villa-interior-1.png",
    },
    {
        id: 3,
        title: "Oasis Retreat",
        location: "Palm Springs",
        price: 4200,
        image: "/images/villa-exterior-1.png",
    }
];

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Clean Luxury | The Art of Living</title>
                <meta name="description" content="Curated private retreats for the modern aesthete." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bg.png"
                        alt="Luxury Villa"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 text-center px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-none tracking-tight">
                            Silence <span className="font-light italic">&</span> Space
                        </h1>
                        <p className="text-white/90 font-sans text-xs md:text-sm uppercase tracking-[0.3em] max-w-lg mx-auto mb-10 leading-relaxed font-medium">
                            Curated sanctuaries for the discerning traveler
                        </p>

                        <Link
                            to="/villas"
                            className="inline-block border border-white text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500"
                        >
                            Explore Collection
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-32 bg-white flex justify-center text-center">
                <div className="max-w-2xl px-6">
                    <p className="font-serif text-3xl md:text-4xl text-heading leading-tight mb-8">
                        "True luxury is not about abundance. It is about the absence of noise, the clarity of space, and the quality of light."
                    </p>
                    <Link to="/about" className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-lightGray hover:text-heading transition-colors border-b border-transparent hover:border-heading pb-1">
                        Our Philosophy
                    </Link>
                </div>
            </section>

            {/* Featured Villas */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6 md:px-12">

                    <div className="flex justify-between items-end mb-16 border-b border-divider pb-4">
                        <h2 className="text-4xl font-serif text-heading">Selected Works</h2>
                        <Link to="/villas" className="hidden md:block text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-heading hover:text-lightGray transition-colors">
                            View All
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {FEATURED_VILLAS.map((villa, index) => (
                            <VillaCard key={villa.id} {...villa} delay={index * 0.15} />
                        ))}
                    </div>

                    <div className="mt-20 text-center md:hidden">
                        <Link to="/villas" className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] border-b border-heading pb-1">
                            View All Properties
                        </Link>
                    </div>
                </div>
            </section>

            {/* Large Feature Image */}
            <section className="relative h-[80vh] bg-offWhite overflow-hidden">
                <img
                    src="/images/villa-interior-1.png"
                    alt="Interior"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-out"
                />
                <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black/50 to-transparent text-white">
                    <span className="block text-[10px] uppercase tracking-[0.25em] mb-4">Featured Destination</span>
                    <h2 className="text-6xl font-serif">Amalfi Coast</h2>
                </div>
            </section>
        </>
    );
}
