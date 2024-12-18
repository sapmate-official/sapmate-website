import React from "react";
import { Clock, PlayCircle, File, Lock } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const CourseCurriculum = () => {
    const curriculum = [
        {
            id: "module-1",
            title: "Introduction to SAP Cloud Platform Integration",
            duration: "2 weeks",
            lectures: 12,
            description: "Foundation concepts and architecture of SAP CPI",
            topics: [
                {
                    title: "Understanding SAP Cloud Platform Integration",
                    duration: "45 mins",
                    isPreview: true,
                    type: "video",
                },
                {
                    title: "SAP CPI Architecture and Components",
                    duration: "1 hr",
                    isPreview: false,
                    type: "video",
                },
                {
                    title: "Setting up Development Environment",
                    duration: "1.5 hrs",
                    isPreview: true,
                    type: "hands-on",
                },
                {
                    title: "Navigation and Basic Operations",
                    duration: "1 hr",
                    isPreview: false,
                    type: "video",
                },
            ],
        },
        {
            id: "module-2",
            title: "Building Integration Flows",
            duration: "3 weeks",
            lectures: 15,
            description:
                "Core concepts of creating and managing integration flows",
            topics: [
                {
                    title: "Introduction to Integration Flow Design",
                    duration: "1 hr",
                    isPreview: true,
                    type: "video",
                },
                {
                    title: "Message Processing and Routing",
                    duration: "2 hrs",
                    isPreview: false,
                    type: "hands-on",
                },
                {
                    title: "Content Mapping and Transformation",
                    duration: "2.5 hrs",
                    isPreview: false,
                    type: "hands-on",
                },
                {
                    title: "Error Handling and Logging",
                    duration: "1.5 hrs",
                    isPreview: false,
                    type: "video",
                },
            ],
        },
        {
            id: "module-3",
            title: "Advanced Integration Patterns",
            duration: "3 weeks",
            lectures: 18,
            description: "Complex integration scenarios and patterns",
            topics: [
                {
                    title: "Enterprise Integration Patterns",
                    duration: "2 hrs",
                    isPreview: false,
                    type: "video",
                },
                {
                    title: "Content-Based Routing",
                    duration: "2.5 hrs",
                    isPreview: false,
                    type: "hands-on",
                },
                {
                    title: "Implementing Adapters",
                    duration: "3 hrs",
                    isPreview: false,
                    type: "hands-on",
                },
            ],
        },
        {
            id: "module-4",
            title: "Security and Authentication",
            duration: "2 weeks",
            lectures: 10,
            description:
                "Securing integration flows and managing authentication",
            topics: [
                {
                    title: "Security Concepts in SAP CPI",
                    duration: "1.5 hrs",
                    isPreview: false,
                    type: "video",
                },
                {
                    title: "OAuth and Basic Authentication",
                    duration: "2 hrs",
                    isPreview: false,
                    type: "hands-on",
                },
                {
                    title: "Certificate Management",
                    duration: "1.5 hrs",
                    isPreview: false,
                    type: "video",
                },
            ],
        },
    ];
    const router = useRouter();
    return (
        <div className="bg-gray-50 py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Improved mobile spacing */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
                        Course Curriculum
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                        Comprehensive curriculum covering everything from basics
                        to advanced SAP CPI concepts
                    </p>

                    {/* Course Stats - Responsive grid for mobile */}
                    <div className="grid grid-cols-1 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-8 mt-6 px-4">
                        <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-base">
                                10 Weeks
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                            <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-base">
                                55 Lectures
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                            <File className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-base">
                                25 Hands-on Projects
                            </span>
                        </div>
                    </div>
                </div>

                {/* Progress Overview - Improved mobile layout */}
                <Card className="mb-6 md:mb-8">
                    <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            <div className="flex-1 w-full">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">
                                        Course Progress
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        55 total hours
                                    </span>
                                </div>
                                <Progress value={0} className="h-2" />
                            </div>
                            <button onClick={()=>router.push("/contact-us")} className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                Start Learning
                            </button>
                        </div>
                    </CardContent>
                </Card>

                {/* Curriculum Accordion - Mobile optimized */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-3 md:space-y-4"
                >
                    {curriculum.map((module) => (
                        <AccordionItem
                            key={module.id}
                            value={module.id}
                            className="bg-white rounded-lg border shadow-sm"
                        >
                            <AccordionTrigger className="px-4 md:px-6 py-4 hover:bg-gray-50">
                                <div className="flex-1 text-left">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                                {module.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1 line-clamp-2 md:line-clamp-1">
                                                {module.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
                                            <span className="bg-gray-100 px-2 py-1 rounded">
                                                {module.duration}
                                            </span>
                                            <span className="bg-gray-100 px-2 py-1 rounded">
                                                {module.lectures} lectures
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-4 md:px-6 py-4 bg-gray-50">
                                <div className="space-y-3">
                                    {module.topics.map((topic, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b last:border-0"
                                        >
                                            <div className="flex items-start gap-3">
                                                {topic.type === "video" ? (
                                                    <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                ) : (
                                                    <File className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                )}
                                                <div>
                                                    <h4 className="text-sm md:text-base text-gray-900 font-medium">
                                                        {topic.title}
                                                    </h4>
                                                    <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                                                        {topic.type
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            topic.type.slice(
                                                                1
                                                            )}{" "}
                                                        • {topic.duration}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center ml-8 sm:ml-0">
                                                {topic.isPreview ? (
                                                    <span className="text-xs md:text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                                                        Preview
                                                    </span>
                                                ) : (
                                                    <Lock className="w-4 h-4 text-gray-400" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Course Features - Responsive grid */}
                <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                        {
                            title: "Practical Learning",
                            description:
                                "25+ hands-on projects with real-world scenarios",
                        },
                        {
                            title: "Expert Support",
                            description:
                                "24/7 support from SAP certified instructors",
                        },
                        {
                            title: "Lifetime Access",
                            description:
                                "Access course content and updates forever",
                        },
                    ].map((feature, index) => (
                        <Card key={index}>
                            <CardContent className="p-4 md:p-6">
                                <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { CourseCurriculum };
