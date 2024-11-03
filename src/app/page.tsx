"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AboutSection from "@/components/About";
import { VisibilityState } from "@/interface/Home";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import { LazyImage } from "@/lib/LazyImage";
import WhatsAppButton from "@/components/WhatsappButton";
import Header from "@/components/Header";

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
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleScrollTo("contact")}
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Start Your Journey
                        </motion.button>
                    </motion.div>
                    {/* <Hero handleScrollTo={handleScrollTo} /> */}
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="text-white w-8 h-8" />
                </motion.div>
            </div>

            {/* <div className="py-20 bg-white" data-animate="stats">
                <div className="container mx-auto px-6">
                    <div className={`grid md:grid-cols-3 gap-12 max-w-5xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ${
                        isVisible.stats ? "opacity-100 translate-y-0" : ""
                    }`}>
                        {[
                            { number: "1000+", label: "Successful Students" },
                            { number: "92%", label: "Placement Rate" },
                            { number: "4.8/5", label: "Student Rating" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300"
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <h3 className="text-4xl font-bold text-blue-600 mb-4">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            <Stats />
            {/* About Section */}
            <div id="about" className="py-20 bg-gray-50" data-animate="about">
                <AboutSection isVisible={isVisible} />
            </div>

            {/* Contact Form */}
            <Contact />

            <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="transform transition-all duration-300 hover:translate-x-2">
                            <h3 className="text-3xl font-bold mb-4">SAPMATE</h3>
                            <p className="text-blue-100 text-lg">
                                Empowering careers through expert SAP training
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-blue-100">
                                © 2024 SAPMATE. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const Hero = ({ handleScrollTo }: { handleScrollTo: (elementId: string) => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a flag after initial render
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Initial static render for faster LCP
  if (!isLoaded) {
    return (
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Transform Your Career with
          <span className="text-blue-400"> SAP Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Join India&apos;s premier SAP training institute and learn from industry experts
        </p>
        <button 
          onClick={() => handleScrollTo("contact")}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Journey
        </button>
      </div>
    );
  }

  // Animated version after initial paint
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="text-center max-w-4xl"
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
      >
        Transform Your Career with
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-400"
        >
          {" "}SAP Excellence
        </motion.span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
      >
        Join India&apos;s premier SAP training institute and learn from industry experts
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => handleScrollTo("contact")}
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Start Your Journey
      </motion.button>
    </motion.div>
  );
};
