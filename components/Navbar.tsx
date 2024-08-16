import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: 'Home Base' },
        { href: '/reviews', label: 'Galactic Reviews' },
        { href: '/submitReview', label: 'Submit Transmission' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/90 backdrop-blur-lg shadow-glow' : 'bg-transparent'} border-b border-electricGreen`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="relative">
                                <Image
                                    src="/alienlogo.png"
                                    alt="Alien Logo"
                                    width={50}
                                    height={50}
                                    className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                                />
                                <div className="absolute inset-0 bg-electricGreen opacity-0 group-hover:opacity-50 rounded-full filter blur-md transition-opacity duration-300"></div>
                            </div>
                            <span className="text-3xl md:text-4xl font-extrabold font-biker text-electricGreen group-hover:animate-glow relative">
                                ALIEN REVIEWS
                                <span className="absolute -inset-0.5 bg-electricGreen opacity-0 group-hover:opacity-20 blur rounded-lg transition-opacity duration-300"></span>
                            </span>
                        </Link>
                        <div className="hidden md:flex items-center justify-end space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group relative text-lg font-biker text-gray-300 hover:text-electricGreen transition duration-300"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-electricGreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                    <span className="absolute inset-0 bg-electricGreen opacity-0 group-hover:opacity-20 blur rounded-lg transition-opacity duration-300"></span>
                                </Link>
                            ))}
                        </div>
                        <button
                            className="bg-darkSteel p-2 text-electricGreen rounded-md md:hidden hover:bg-electricGreen hover:text-black transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <div
                    className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 bottom-0 w-64 bg-black/90 backdrop-blur-lg border-l border-electricGreen transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex flex-col h-full">
                        <button
                            className="self-end bg-darkSteel p-2 m-4 text-electricGreen rounded-md hover:bg-electricGreen hover:text-black transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="flex flex-col space-y-4 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center px-3 py-2 rounded-md text-lg font-biker text-gray-300 hover:bg-electricGreen hover:text-black transition duration-300 group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                                    <span className="relative">
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-electricGreen transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer div to push content below navbar */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;