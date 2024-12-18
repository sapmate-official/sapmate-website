import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Hero3DImage from "@/components/Hero3Dimage";
import handleDownloadBrochure from "@/lib/utils/Brochure";
import Link from "next/link";

const HeroSection = () => {
    const highlights = [
        "Industry Expert-Led Live Training",
        "Real Project Experience",
        "Guaranteed Job Support",
        "24/7 Learning Support",
    ];

    return (
        <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
            {/* Background Decoration - Adjusted for mobile */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            </div>

            <div className="relative px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-8 md:pb-16">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-blue-500 bg-opacity-20 text-blue-200 text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
                        >
                            #1 SAP CPI Training Institute in India
                        </motion.div>

                        {/* Main Heading - Responsive text sizes */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
                        >
                            Master SAP CPI with
                            <span className="text-blue-400 block md:inline">
                                {" "}Hands-on Training
                            </span>
                        </motion.h1>

                        {/* Description - Adjusted spacing and font size */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base md:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 md:px-0"
                        >
                            Get industry-ready with comprehensive SAP Cloud
                            Platform Integration training. Learn from experts
                            and kickstart your career in integration
                            development.
                        </motion.p>

                        {/* CTA Buttons - Stack on mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12 px-4 sm:px-0"
                        >
                            <button onClick={handleDownloadBrochure} className="w-full sm:w-auto bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base">
                                Download Curriculum
                            </button>
                            <Link href={'/contact-us'} className="w-full sm:w-auto bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                                Book Free Demo
                            </Link>
                        </motion.div>

                        {/* Key Highlights - Grid adjusted for mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
                        >
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-sm md:text-base"
                                >
                                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                                    <span className="text-blue-100">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Hide on smaller screens if needed */}
                    <div className="w-full lg:w-96 mt-8 lg:mt-0">
                        <Hero3DImage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;