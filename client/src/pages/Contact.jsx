import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/layout/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder logic
        alert("Thank you for your inquiry. Our concierge will contact you shortly.");
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Clean Luxury Villas</title>
                <meta name="description" content="Get in touch with our concierge team to plan your perfect luxury getaway." />
            </Helmet>

            <PageHeader
                title="Contact Concierge"
                subtitle="Let us tailor your perfect escape."
                image="/images/hero-bg.png"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-serif text-heading mb-6">Get in Touch</h2>
                            <p className="text-body mb-8 leading-relaxed">
                                Whether you're looking for a specific property or need inspiration for your next journey, our team of travel specialists is here to assist you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-offWhite p-3 rounded-full mr-4">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-heading">Email Us</h4>
                                        <p className="text-lightGray">concierge@cleanluxury.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-offWhite p-3 rounded-full mr-4">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-heading">Call Us</h4>
                                        <p className="text-lightGray">+1 (800) 123-4567</p>
                                        <p className="text-xs text-lightGray mt-1">Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-offWhite p-3 rounded-full mr-4">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-heading">Visit Us</h4>
                                        <p className="text-lightGray">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-offWhite p-8 md:p-10 rounded-sm">
                            <h3 className="text-2xl font-serif text-heading mb-6">Send an Inquiry</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-heading mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-divider focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-heading mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-divider focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-heading mb-2">Message</label>
                                    <textarea
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-white border border-divider focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder="Tell us about your travel plans..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-hover text-white py-4 font-semibold uppercase tracking-wide transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
