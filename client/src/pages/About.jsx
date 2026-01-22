import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/layout/PageHeader';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="Learn about our mission to provide the most exclusive and impeccably designed villa experiences." />
            </Helmet>

            <PageHeader
                title="Our Story"
                subtitle="Curating the extraordinary since 2015."
                image="/images/villa-interior-1.png"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-heading mb-6">Redefining Modern Hospitality</h2>
                        <p className="text-body text-lg leading-relaxed">
                            We started Clean Luxury with a simple belief: that the most memorable travel experiences are those where nothing stands between you and the beauty of your surroundings. Our philosophy is rooted in minimalism, quality, and seamless service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Simplicity", desc: "Clutter-free environments that allow your mind to rest." },
                            { title: "Quality", desc: "Only the finest linens, amenities, and architecture make the cut." },
                            { title: "Privacy", desc: "Secluded locations verify-checked for absolute peace." }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="p-6 border border-divider hover:border-primary transition-colors duration-300"
                            >
                                <h3 className="text-xl font-serif text-heading mb-4">{item.title}</h3>
                                <p className="text-lightGray">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
