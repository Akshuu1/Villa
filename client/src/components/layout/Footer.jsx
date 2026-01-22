import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-heading text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-serif font-bold mb-4 tracking-tight">
                            CLEAN<span className="text-primary">LUXURY</span>
                        </h2>
                        <p className="text-lightGray text-sm leading-relaxed max-w-xs">
                            Curating the world's most exclusive villas for the discerning traveler. Experience luxury without compromise.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-serif mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm text-lightGray">
                            <li><Link to="/villas" className="hover:text-primary transition-colors">Villas</Link></li>
                            <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-serif mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-lightGray">
                            <li>123 Luxury Lane</li>
                            <li>Beverly Hills, CA 90210</li>
                            <li className="pt-2"><a href="tel:+18001234567" className="hover:text-primary transition-colors">+1 (800) 123-4567</a></li>
                            <li><a href="mailto:concierge@cleanluxury.com" className="hover:text-primary transition-colors">concierge@cleanluxury.com</a></li>
                        </ul>
                    </div>

                    {/* Newsletter (Optional) */}
                    <div>
                        <h3 className="text-lg font-serif mb-4">Newsletter</h3>
                        <p className="text-sm text-lightGray mb-4">Subscribe for exclusive offers and updates.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-primary w-full"
                            />
                            <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-lightGray">
                    <p>&copy; {currentYear} Clean Luxury Villas. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
