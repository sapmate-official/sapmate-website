'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    CheckCircle,
    Clock,
    LucideIcon,
    ArrowLeft,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import CourseHeader from "@/components/section/CourseHeader";
import { BenefitsSectionProps, CourseContent, ModuleAccordionProps } from "@/interface/Home";
import { TablerIcon } from "@tabler/icons-react";

const ModuleAccordion: React.FC<ModuleAccordionProps> = ({ 
    module, 
    isActive, 
    onClick 
}) => {
    return (
        <div
            className={`p-3 sm:p-4 rounded-lg border ${
                isActive ? "border-blue-500 bg-blue-50" : "border-gray-200"
            } cursor-pointer transition-all duration-300`}
            onClick={onClick}
            onKeyPress={(e: React.KeyboardEvent) => e.key === "Enter" && onClick()}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
        >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="font-semibold text-base sm:text-lg">{module.title}</h3>
                <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2">
                    <Clock 
                        size={14} 
                        className="sm:w-4 sm:h-4" 
                        aria-hidden="true" 
                    />
                    {module.duration}
                </span>
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                    >
                        {module.topics.map((topic, topicIndex) => (
                            <motion.li
                                key={topicIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: topicIndex * 0.1 }}
                                className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-gray-700"
                            >
                                <CheckCircle
                                    size={14}
                                    className="mt-1 sm:mt-0 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="leading-tight">{topic}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

// Benefits Section Component
const BenefitsSection = ({ benefits }:BenefitsSectionProps) => {
    const [activeTab, setActiveTab] = useState(benefits[0].title.toLowerCase());
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 sm:mt-16"
        >
            <Tabs 
                value={activeTab} 
                onValueChange={(value) => setActiveTab(value)}
                className="space-y-4"
            >
                <TabsList className="w-full justify-start overflow-x-auto overflow-y-hidden flex-nowrap whitespace-nowrap scrollbar-hide">
                    {benefits.map((benefit, index) => (
                        <TabsTrigger
                            key={index}
                            value={benefit.title.toLowerCase()}
                            className="flex-shrink-0 text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 min-w-fit"
                        >
                            <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" />
                            <span className="whitespace-nowrap">{benefit.title}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                
                {benefits.map((benefit, index) => (
                    <TabsContent
                        key={index}
                        value={benefit.title.toLowerCase()}
                    >
                        <Card className={`${benefit.bgColor} border-none`}>
                            <CardHeader className="pb-2 sm:pb-4">
                                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                                    <benefit.icon
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        aria-hidden="true"
                                    />
                                    {benefit.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {benefit.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start sm:items-center gap-2"
                                        >
                                            <CheckCircle
                                                className="text-blue-600 w-4 h-4 mt-0.5 sm:mt-0 flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </motion.div>
    );
};
// Main Course Details Component
const CourseDetails = ({COURSE_CONTENT}:{COURSE_CONTENT:CourseContent}) => {
    const [activeModule, setActiveModule] = useState(0);
    const [, setIsVisible] = useState({});
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll("[data-animate]");
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const element = entry.target as HTMLElement;
                            setIsVisible((prev) => ({
                                ...prev,
                                [element.dataset.animate || '']: true
                            }));
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.8 }
            );

            elements.forEach((element) => observer.observe(element));
            return () => observer.disconnect();
        };

        handleScroll();
    }, []);

    const handleEnrollClick = () => {
        router.push("/contact-us");
    };

    const handleDownloadBrochure = async () => {
        try {
            const cloudinaryUrl = process.env.NEXT_PUBLIC_BROUCHER_LINK;
            
            // Check if URL exists
            if (!cloudinaryUrl) {
                throw new Error('Brochure URL is not defined');
            }
    
            const response = await fetch(cloudinaryUrl);
            const blob = await response.blob();
            
            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(blob);
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;
            
            // Set the download filename
            link.download = 'sapmate_brochure_2025.pdf';
            
            // Append to body, click and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up the temporary URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    const StatCard = ({ stat }: { stat: { icon: LucideIcon|TablerIcon; color: string; value: string; label: string } }) => (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                    <stat.icon
                        className={`w-8 h-8 ${stat.color} mb-4`}
                        aria-hidden="true"
                    />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
            </Card>
        </motion.div>
    );

    // const ModuleAccordion = ({ module, index, isActive, onClick }: any) => (
    //     <div
    //         className={`p-4 rounded-lg border ${
    //             isActive ? "border-blue-500 bg-blue-50" : "border-gray-200"
    //         } cursor-pointer transition-all duration-300`}
    //         onClick={onClick}
    //         onKeyPress={(e) => e.key === "Enter" && onClick()}
    //         role="button"
    //         tabIndex={0}
    //         aria-expanded={isActive}
    //     >
    //         <div className="flex justify-between items-center mb-4">
    //             <h3 className="font-semibold text-lg">{module.title}</h3>
    //             <span className="text-sm text-gray-500 flex items-center gap-2">
    //                 <Clock size={16} aria-hidden="true" />
    //                 {module.duration}
    //             </span>
    //         </div>
    //         <AnimatePresence>
    //             {isActive && (
    //                 <motion.ul
    //                     initial={{ opacity: 0, height: 0 }}
    //                     animate={{ opacity: 1, height: "auto" }}
    //                     exit={{ opacity: 0, height: 0 }}
    //                     className="space-y-2"
    //                 >
    //                     {module.topics.map(
    //                         (topic: string, topicIndex: number) => (
    //                             <motion.li
    //                                 key={topicIndex}
    //                                 initial={{ x: -20, opacity: 0 }}
    //                                 animate={{ x: 0, opacity: 1 }}
    //                                 transition={{ delay: topicIndex * 0.1 }}
    //                                 className="flex items-center gap-2 text-gray-700"
    //                             >
    //                                 <CheckCircle
    //                                     size={16}
    //                                     className="text-blue-500"
    //                                     aria-hidden="true"
    //                                 />
    //                                 {topic}
    //                             </motion.li>
    //                         )
    //                     )}
    //                 </motion.ul>
    //             )}
    //         </AnimatePresence>
    //     </div>
    // );

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            <CourseHeader 
            onEnrollClick={handleEnrollClick}
            onDownloadBrochure={handleDownloadBrochure}
        />
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-20 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Back Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        onClick={() => router.back()}
                        className="mb-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Courses</span>
                    </motion.button>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white space-y-6"
                    >
                        <div className="inline-block px-4 py-2 bg-blue-800 rounded-full text-sm font-semibold">
                            Next Batch Starting Soon!
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            {COURSE_CONTENT.hero.title}
                            <span className="block text-blue-400">
                                {COURSE_CONTENT.hero.subtitle}
                            </span>
                        </h1>
                        <div
                            className="flex items-center gap-2"
                            role="group"
                            aria-label="Course Rating"
                        >
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    aria-hidden="true"
                                />
                            ))}
                            <span className="ml-2">{COURSE_CONTENT.hero.rating}</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={handleEnrollClick}
                                className="bg-white text-blue-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                            >
                                Book Your Seat
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white text-black hover:text-white hover:bg-blue-800 transform hover:scale-105 transition-all duration-300"
                                onClick={handleDownloadBrochure}
                            >
                                Download Brochure
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-4 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {COURSE_CONTENT.stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} />
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Course Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">
                                        Course Overview
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="prose max-w-none">
                                    <p className="text-gray-600 leading-relaxed">
                                        {COURSE_CONTENT.overview}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.section>

                        {/* Course Modules */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">
                                        Course Curriculum
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {COURSE_CONTENT.modules.map((module, index) => (
                                        <ModuleAccordion
                                            key={index}
                                            module={module}
                                            index={index}
                                            isActive={activeModule === index}
                                            onClick={() =>
                                                setActiveModule(index)
                                            }
                                        />
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="sticky top-8 space-y-6"
                        >
                            <Card className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                                <CardContent className="p-6 space-y-6">
                                    <h3 className="text-2xl font-bold">
                                        Program Highlights
                                    </h3>
                                    <ul className="space-y-4">
                                        {COURSE_CONTENT.highlights.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-3"
                                                >
                                                    <item.icon
                                                        className="w-5 h-5"
                                                        aria-hidden="true"
                                                    />
                                                    <span>{item.text}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <Button
                                        onClick={handleEnrollClick}
                                        className="w-full bg-white text-blue-900 hover:bg-gray-100"
                                    >
                                        Enroll Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Benefits Tabs */}
                <BenefitsSection benefits={COURSE_CONTENT.benefits} />

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16"
                >
                    <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Ready to Transform Your Career?
                            </h2>
                            <p className="mb-6 text-lg">
                                Join ournext batch and kickstart your journey in
                                SAP Integration
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button
                                    onClick={handleEnrollClick}
                                    className="bg-white text-blue-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                                >
                                    Book Your Free Consultation
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white text-black hover:text-white hover:bg-blue-800 transform hover:scale-105 transition-all duration-300"
                                    onClick={handleDownloadBrochure}
                                >
                                    Get Course Details
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default CourseDetails;
