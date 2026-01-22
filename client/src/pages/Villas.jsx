import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/layout/PageHeader';
import VillaCard from '../components/villas/VillaCard';

const VILLAS_DATA = [
    {
        id: 1,
        title: "Azure Horizon Estate",
        location: "Mykonos, Greece",
        price: 3500,
        image: "/images/villa-exterior-1.png",
    },
    {
        id: 2,
        title: "Serenity Cove Villa",
        location: "Phuket, Thailand",
        price: 2800,
        image: "/images/villa-interior-1.png",
    },
    {
        id: 3,
        title: "Oasis Palm Retreat",
        location: "Palm Springs, USA",
        price: 4200,
        image: "/images/villa-exterior-1.png",
    },
    {
        id: 4,
        title: "Casa De La Luna",
        location: "Tulum, Mexico",
        price: 1900,
        image: "/images/hero-bg.png",
    },
    {
        id: 5,
        title: "Alpine Chalet Luxe",
        location: "Zermatt, Switzerland",
        price: 5500,
        image: "/images/villa-interior-1.png",
    },
    {
        id: 6,
        title: "Bali Bamboo Haven",
        location: "Bali, Indonesia",
        price: 1200,
        image: "/images/villa-exterior-1.png",
    }
];

export default function Villas() {
    return (
        <>
            <Helmet>
                <title>Luxury Villas</title>
                <meta name="description" content="Explore our curated collection of luxury villas worldwide. Handpicked for privacy, design, and comfort." />
            </Helmet>

            <PageHeader
                title="Our Collection"
                subtitle="Handpicked sanctuaries for the modern traveler."
                image="/images/villa-modern-exterior.jpg"
            />

            <section className="py-20 bg-offWhite">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VILLAS_DATA.map((villa, index) => (
                            <VillaCard key={villa.id} {...villa} delay={index * 0.05} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
