import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, image }) {
    return (
        <div className="relative h-[60vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    color='white'
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">{subtitle}</p>
                </motion.div>
            </div>
        </div>
    );
}
