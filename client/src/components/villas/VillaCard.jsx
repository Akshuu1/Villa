import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function VillaCard({ id, title, location, price, image, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="group block cursor-pointer"
        >
            <Link to={`/villas/${id}`} className="block">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-offWhite/10">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                    {/* Subtle dim on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>

                {/* Content */}
                <div className="text-center group-hover:opacity-70 transition-opacity duration-500">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-lightGray mb-3 font-sans font-medium">
                        {location}
                    </span>
                    <h3 className="text-3xl font-serif text-heading mb-2 leading-none">
                        {title}
                    </h3>
                    <p className="text-sm font-sans text-body tracking-wide">
                        from <span className="font-semibold">${price.toLocaleString()}</span> / night
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
