import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/villas' },
    { name: 'Journal', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const isHome = location.pathname === '/';

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    scrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'
                )}
            >
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-3 items-center">

                    {/* Left Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_ITEMS.slice(0, 2).map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "text-[10px] font-sans font-medium tracking-[0.25em] uppercase transition-colors duration-300",
                                    scrolled || !isHome ? "text-heading hover:text-lightGray" : "text-white hover:text-white/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Center Logo */}
                    <div className="flex justify-center">
                        <Link to="/" className="relative z-50 group">
                            <h1 className={cn(
                                "text-3xl font-serif font-medium tracking-tight transition-colors duration-300",
                                scrolled || !isHome ? "text-heading" : "text-white"
                            )}>
                                <span className="italic font-light text-2xl">Luxury</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Right Nav */}
                    <nav className="hidden md:flex items-center justify-end space-x-8">
                        {NAV_ITEMS.slice(2).map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "text-[10px] font-sans font-medium tracking-[0.25em] uppercase transition-colors duration-300",
                                    scrolled || !isHome ? "text-heading hover:text-lightGray" : "text-white hover:text-white/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={cn(
                                "text-[10px] font-sans font-bold tracking-[0.25em] uppercase border-b pb-1 transition-all duration-300",
                                scrolled || !isHome
                                    ? "text-heading border-heading hover:text-lightGray hover:border-lightGray"
                                    : "text-white border-white hover:text-white/70 hover:border-white/70"
                            )}
                        >
                            Inquire
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle (Absolute Right) */}
                    <div className="md:hidden col-start-3 flex justify-end">
                        <button
                            className="relative z-50 p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="w-5 h-5 text-heading" />
                            ) : (
                                <Menu className={cn("w-5 h-5", scrolled || !isHome ? "text-heading" : "text-white")} />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-3xl font-serif text-heading hover:text-lightGray transition-colors italic"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
