"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
    Phone, 
    Download, 
    Menu, 
    X,
    ChevronRight
} from "lucide-react";
import WhatsAppButton from "@/components/section/WhatsappButton";

interface CourseHeaderProps {
    onEnrollClick: () => void;
    onDownloadBrochure: () => void;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ onEnrollClick, onDownloadBrochure }) => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
        };

        // Updated throttle function with proper typing
        const throttle = <T extends (...args: never[]) => void>(
            func: T,
            limit: number
        ): T => {
            let inThrottle = false;
            return ((...args) => {
                if (!inThrottle) {
                    func(...args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            }) as T;
        };

        const throttledHandleScroll = throttle(handleScroll, 100);
        window.addEventListener("scroll", throttledHandleScroll);
        handleScroll();
        
        return () => window.removeEventListener("scroll", throttledHandleScroll);
    }, [lastScrollY]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('menu-button');
            if (menu && !menu.contains(event.target as Node) && 
                button && !button.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                className="fixed w-full z-50 transition-all"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1,
                    y: isVisible ? 0 : -100,
                    backgroundColor: scrollY > 50 || isMobileMenuOpen ? "rgba(30, 58, 138, 0.95)" : "transparent",
                    backdropFilter: scrollY > 50 || isMobileMenuOpen ? "blur(10px)" : "none",
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center"
                        >
                            <span className="text-xl md:text-2xl font-bold text-white">
                                SAPMATE
                            </span>
                            <span className="hidden md:block ml-4 text-sm text-blue-200 font-medium px-3 py-1 bg-blue-800 rounded-full">
                                SAP Training
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-4">
                            <Button
                                variant="ghost"
                                className="text-white hover:text-blue-200 hover:bg-blue-800"
                                onClick={onDownloadBrochure}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download Brochure
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white text-black hover:text-white hover:bg-blue-800"
                                onClick={onEnrollClick}
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Book Consultation
                            </Button>
                            <WhatsAppButton />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-4 md:hidden">
                            <WhatsAppButton />
                            <Button
                                id="menu-button"
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-blue-800"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    >
                        <motion.div
                            id="mobile-menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-blue-900 shadow-xl"
                        >
                            <div className="flex flex-col h-full pt-20 pb-6 px-4">
                                <div className="flex-1 space-y-4">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between text-white hover:bg-blue-800"
                                        onClick={() => {
                                            onDownloadBrochure();
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <span className="flex items-center">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download Brochure
                                        </span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between text-white hover:bg-blue-800"
                                        onClick={() => {
                                            onEnrollClick();
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <span className="flex items-center">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Book Consultation
                                        </span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                                
                                <div className="pt-4 border-t border-blue-800">
                                    <div className="text-sm text-blue-200 mb-2">
                                        Connect with us
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <WhatsAppButton />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CourseHeader;