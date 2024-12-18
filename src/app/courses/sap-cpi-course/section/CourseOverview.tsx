import React from "react";
import { CheckCircle, Clock, Book, Award, Users } from "lucide-react";
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const CourseOverview = () => {
    const learningOutcomes = [
        {
            title: "Core SAP CPI Concepts",
            points: [
                "Master SAP Cloud Platform Integration fundamentals and architecture",
                "Learn to create and manage Integration Flows with real-world scenarios",
                "Understand message processing, routing, and mapping techniques",
                "Implement security and authentication in CPI interfaces",
                "Handle errors and exceptions in integration scenarios",
                "Monitor and troubleshoot integration flows effectively",
            ],
        },
        {
            title: "Technical Skills",
            points: [
                "Develop expertise in XML, XSLT, and JSON mapping",
                "Master Groovy scripting for complex transformations",
                "Configure REST and SOAP adapters for API integration",
                "Implement OData services and Message Mapping",
                "Learn content modifier and message routing patterns",
                "Set up secure connectivity with external systems",
            ],
        },
        {
            title: "Integration Patterns",
            points: [
                "Design enterprise integration patterns in SAP CPI",
                "Implement content-based routing and multicast",
                "Create request-reply and fire-forget scenarios",
                "Build batch processing and aggregation flows",
                "Configure exception handling and retry mechanisms",
                "Develop B2B integration scenarios",
            ],
        },
        {
            title: "Practical Implementation",
            points: [
                "Work on real-world integration projects",
                "Build end-to-end integration solutions",
                "Deploy and manage integration packages",
                "Configure monitoring and alerting",
                "Implement logging and error handling",
                "Create documentation and deployment guides",
            ],
        },
    ];

    return (
        <div className="bg-white py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Course Highlights */}
                <div className="mb-8 md:mb-16">
                    <EnhancedStats />
                </div>

                {/* What You'll Learn Section */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 px-2">
                        What You&apos;ll Learn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {learningOutcomes.map((section, index) => (
                            <div key={index} className="space-y-4 md:space-y-6 bg-gray-50 p-4 md:p-6 rounded-lg">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                                    {section.title}
                                </h3>
                                <div className="space-y-3 md:space-y-4">
                                    {section.points.map((point, pointIndex) => (
                                        <div
                                            key={pointIndex}
                                            className="flex items-start gap-2 md:gap-3"
                                        >
                                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-1 flex-shrink-0" />
                                            <p className="text-sm md:text-base text-gray-700">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Course Recommendation */}
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
                    <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg w-fit">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    Why This Course?
                                </h4>
                                <p className="text-sm md:text-base text-gray-700">
                                    This comprehensive SAP CPI course is
                                    designed for both beginners and experienced
                                    professionals. With hands-on projects,
                                    real-world scenarios, and expert
                                    instruction, you&apos;ll gain the skills needed
                                    to implement and manage complex integration
                                    solutions. Our course has helped over 1000+
                                    professionals advance their careers in SAP
                                    integration.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

const EnhancedStats = () => {
    const stats = [
        {
            icon: Clock,
            title: "Course Duration",
            value: "12 Weeks",
            description: "Intensive hands-on training",
            metrics: [
                { label: "Live Sessions", value: "36+" },
                { label: "Hours", value: "100+" },
                { label: "Projects", value: "8" }
            ],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Users,
            title: "Batch Size",
            value: "Max 10",
            description: "Personalized attention",
            metrics: [
                { label: "Students Placed", value: "1000+" },
                { label: "Companies", value: "50+" },
                { label: "Countries", value: "25+" }
            ],
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Award,
            title: "Success Rate",
            value: "92%",
            description: "Placement success",
            metrics: [
                { label: "Avg Package", value: "18 LPA" },
                { label: "Top Package", value: "33 LPA" },
                { label: "Reviews", value: "4.8/5" }
            ],
            color: "from-green-500 to-green-600"
        },
        {
            icon: Book,
            title: "Course Content",
            value: "8 Modules",
            description: "Comprehensive curriculum",
            metrics: [
                { label: "Topics", value: "40+" },
                { label: "Case Studies", value: "15+" },
                { label: "Resources", value: "100+" }
            ],
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-none h-full">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        <CardContent className="relative p-4 md:p-6 z-10">
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4 md:mb-6">
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
                                            {stat.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                                            {stat.description}
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-2 md:p-3 rounded-lg group-hover:bg-white/10 transition-colors">
                                        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                {/* Main Value */}
                                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6 group-hover:text-white transition-colors">
                                    {stat.value}
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-3 gap-1 md:gap-2">
                                    {stat.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center p-1 md:p-2 bg-gray-50 rounded-lg group-hover:bg-white/10 transition-colors">
                                            <div className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-white transition-colors">
                                                {metric.value}
                                            </div>
                                            <div className="text-[10px] md:text-xs text-gray-600 group-hover:text-white/80 transition-colors">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export { CourseOverview };  