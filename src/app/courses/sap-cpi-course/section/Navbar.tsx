import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { name: "Overview", href: "#overview" },
        { name: "Curriculum", href: "#curriculum" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
        }`}>
            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="font-bold text-xl text-blue-600">
                        SAPMATE
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Link href={'/contact-us'} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Enroll Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-2 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="px-4 py-3">
                            <Link 
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                href={'/contact-us'}
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;