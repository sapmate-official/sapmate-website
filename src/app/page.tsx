"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Youtube } from "lucide-react";
import { VisibilityState } from "@/interface/Home";
import { LazyImage } from "@/lib/LazyImage";

import Header from "@/components/section/Header";
import Stats from "@/components/section/Stats";
import AboutSection from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import TestimonialWrapper from "@/components/section/TestimonialWrapper";
import Courses from "@/components/section/Courses";
import SapmateBot from "@/components/SapmateBot";
import FeaturesGrid from "@/components/section/FeatureCard";
import NewsSection from "@/components/section/NewsBlog";
import YouTubeCTASection from "@/components/section/YoutubeCTASection";

export default function Landing() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState<VisibilityState>({});

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            document.querySelectorAll("[data-animate]").forEach((elem) => {
                const rect = elem.getBoundingClientRect();
                const animateValue = elem.getAttribute("data-animate");
                if (rect.top <= window.innerHeight * 0.8 && animateValue) {
                    setIsVisible((prev) => ({
                        ...prev,
                        [animateValue]: true,
                    }));
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = elementPosition - startPosition;

            const duration = 1500; // Animation duration in ms
            const startTime = performance.now();

            function easeInOutCubic(t: number): number {
                return t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }

            function animate(currentTime: number) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easeProgress = easeInOutCubic(progress);
                window.scrollTo(0, startPosition + distance * easeProgress);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            <div className="relative h-screen overflow-hidden">
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-out"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                    <LazyImage
                        src="https://res.cloudinary.com/dwxm42izp/image/upload/v1730538183/ulove1t1e6szhyrwasdr.jpg"
                        alt="SAP Professional Training"
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>

                <Header handleScrollTo={handleScrollTo} />

                <div className="relative z-10 flex items-center justify-center h-full px-6">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-center max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Transform Your Career with
                            <span className="text-blue-400">
                                {" "}
                                SAP Excellence
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                            Join India&apos;s premier SAP training institute and
                            learn from industry experts
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => handleScrollTo("contact")}
                                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Your Journey
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() =>
                                    window.open(
                                        "https://www.youtube.com/@sapmate",
                                        "_blank"
                                    )
                                }
                                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                            >
                                <Youtube className="w-6 h-6 text-red-600" />
                                Free Training Videos
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="text-white w-8 h-8" />
                </motion.div>
            </div>
            <YouTubeCTASection />
            <Stats />
            {/* About Section */}
            <div id="about" className="py-20 bg-gray-50" data-animate="about">
                <AboutSection isVisible={isVisible} />
            </div>
            <FeaturesGrid />
            <NewsSection />
            <TestimonialWrapper />
            <Courses />
            <Contact />
            <SapmateBot />

            <Footer />
        </div>
    );
}
