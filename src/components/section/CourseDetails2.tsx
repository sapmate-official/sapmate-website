import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Book,
    Clock,
    Calendar,
    GraduationCap,
    ChevronDown,
    Star,
    CheckCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseDetails2 = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [activeFaq, setActiveFaq] = useState("");

    // Mock course data
    const course = {
        title: "SAP CPI Training",
        subtitle:
            "Best Institute for SAP CPI Online Training covering vast content with real time project based scenarios from Industry expert Mr. Bhargav, having 14+ Years of real time experience and delivered 36+ batches trained more than 1.2K+ students.",
        duration: "45 Hours",
        enrolled: "1438",
        reviews: "1117",
        lastUpdated: "Wed, 20-Nov-2024",
        price: "₹30000",
        language: "English",
        rating: 4.8,
        features: [
            { icon: Book, label: "Lectures", value: "45" },
            { icon: GraduationCap, label: "Skill Level", value: "Advanced" },
            { icon: Calendar, label: "Duration", value: "2 Months" },
            { icon: Clock, label: "Daily", value: "1 Hour" },
        ],
        learningPoints: [
            "SAP Cloud Platform Integration/Integration Suite",
            "Understand business requirements from integration perspective",
            "Required Tools, Processes and Operations",
            "Develop and understand iFlows (CPI interfaces)",
            "Monitor iFlows",
            "Work in Integration development, Integration support projects",
        ],
        requirements: [
            "Any graduate with basic understanding of computer and technical skills",
            "Logical and Critical Thinking",
            "Problem solving skills",
            "Added Advantage of XML and Xpath Knowledge",
            "Added Advantage Groovy/JavaScript",
        ],
    };

    const FAQs = [
        {
            question: "What Is The SAP CPI Course Duration?",
            id: "duration",
        },
        {
            question: "How Many Students are there in one Batch?",
            id: "batch-size",
        },
        {
            question:
                "What Is The Minimum Qualification To Attend This Training?",
            id: "qualification",
        },
        // Add more FAQs as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-bold">
                                {course.title}
                            </h1>
                            <p className="text-lg text-blue-100">
                                {course.subtitle}
                            </p>

                            <div className="flex items-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span>{course.rating}</span>
                                    <span className="text-blue-200">
                                        ({course.reviews} Reviews)
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5" />
                                    <span>{course.enrolled} Enrolled</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                                    Request Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10"
                                >
                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        {/* Navigation Tabs */}
                        <div className="flex border-b mb-8">
                            {[
                                "Overview",
                                "Curriculum",
                                "Instructor",
                                "Reviews",
                            ].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() =>
                                        setActiveSection(tab.toLowerCase())
                                    }
                                    className={`px-6 py-3 font-medium ${
                                        activeSection === tab.toLowerCase()
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Learning Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 mb-12"
                        >
                            <h2 className="text-2xl font-bold">
                                What Will I Learn?
                            </h2>
                            <div className="space-y-4">
                                {course.learningPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-blue-600 mt-3" />
                                        <span>{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Requirements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 mb-12"
                        >
                            <h2 className="text-2xl font-bold">Requirements</h2>
                            <ul className="space-y-3">
                                {course.requirements.map((req, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>{req}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* FAQs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-bold">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {FAQs.map((faq) => (
                                    <motion.div
                                        key={faq.id}
                                        className="border rounded-lg"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveFaq(
                                                    activeFaq === faq.id
                                                        ? ""
                                                        : faq.id
                                                )
                                            }
                                            className="w-full flex justify-between items-center p-4 text-left"
                                        >
                                            <span className="font-medium">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform ${
                                                    activeFaq === faq.id
                                                        ? "transform rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="sticky top-8"
                        >
                            <Card className="p-6 space-y-6">
                                <div className="text-3xl font-bold">
                                    {course.price}{" "}
                                    <span className="text-lg text-gray-600">
                                        +Taxes
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {course.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-2"
                                        >
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                            <div className="text-sm text-gray-600">
                                                {feature.label}
                                            </div>
                                            <div className="font-medium">
                                                {feature.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Add to cart
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Buy now
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails2;
