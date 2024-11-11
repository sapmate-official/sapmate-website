"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/section/WhatsappButton";

interface HeaderProps {
    handleScrollTo: (elementId: string) => void;
}

interface ScrollState {
    isVisible: boolean;
    lastScrollY: number;
    currentScrollY: number;
}

type ThrottleableParameter = string | number | boolean | undefined | null | object;
type ThrottleableFunction = (...args: ThrottleableParameter[]) => void;
type ThrottledFunction<T extends ThrottleableFunction> = (...args: Parameters<T>) => void;

const Header: React.FC<HeaderProps> = ({ handleScrollTo }) => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [headerState, setHeaderState] = useState<ScrollState>({
        isVisible: true,
        lastScrollY: 0,
        currentScrollY: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            
            setHeaderState((prevState) => {
                const isScrollingDown = currentScrollY > prevState.lastScrollY;
                const scrollDifference = Math.abs(currentScrollY - prevState.lastScrollY);

                const newIsVisible = scrollDifference > 5 
                    ? !isScrollingDown 
                    : prevState.isVisible;

                return {
                    isVisible: newIsVisible,
                    lastScrollY: currentScrollY,
                    currentScrollY,
                };
            });
        };

        const throttle = <T extends ThrottleableFunction>(
            func: T,
            limit: number
        ): ThrottledFunction<T> => {
            let inThrottle = false;
            return (...args: Parameters<T>): void => {
                if (!inThrottle) {
                    func(...args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        };

        const throttledHandleScroll = throttle(handleScroll, 100);
        window.addEventListener("scroll", throttledHandleScroll);
        handleScroll();
        
        return () => window.removeEventListener("scroll", throttledHandleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed w-full z-50 transition-all"
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                y: headerState.isVisible ? 0 : -100,
                backgroundColor: scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent",
                backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-2xl font-bold text-white">
                            SAPMATE
                        </span>
                    </motion.div>

                    <div className="flex items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="hidden md:flex items-center mr-8"
                        >
                            {["about", "contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleScrollTo(item)}
                                    className="text-white font-medium hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap mr-8 last:mr-0"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </motion.div>

                        <div className="relative">
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Header;