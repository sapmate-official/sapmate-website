'use client';
import React from "react";
import {
    Star,
    Users,
    Trophy,
    Award,
    Timer,
    Briefcase,
    BadgeCheck,
    BookOpen,
    Building,
} from "lucide-react";
import CourseDetails from "@/components/section/CourseDetails";

// Data constants moved outside component for better performance
const COURSE_CONTENT = {
    hero: {
        badge: "Next Batch Starting Soon!",
        title: "SAP CPI with SAP SuccessFactors",
        subtitle: "Job Ready Program",
        rating: 4.8,
        reviewCount: "500+"
    },

    overview: `Master SAP Cloud Platform Integration and SuccessFactors with our comprehensive, 
    hands-on program designed for both beginners and professionals. Get ready for high-paying 
    integration roles with real-world projects and expert mentorship.`,

    stats: [
        {
            value: "1500+",
            label: "Students Enrolled",
            icon: Users,
            color: "text-blue-600",
        },
        {
            value: "95%",
            label: "Placement Rate",
            icon: Trophy,
            color: "text-green-600",
        },
        {
            value: "4.8",
            label: "Average Rating",
            icon: Star,
            color: "text-yellow-500",
        },
        {
            value: "50+",
            label: "Corporate Partners",
            icon: Building,
            color: "text-purple-600",
        },
    ],

    modules: [
        {
            title: "SAP CPI Fundamentals",
            duration: "4 weeks",
            topics: [
                "Introduction to SAP Cloud Platform Integration",
                "Integration Flows and Patterns",
                "Message Processing and Mapping",
                "Security and Authentication",
                "Hands-on Projects",
            ],
        },
        {
            title: "Advanced Integration",
            duration: "4 weeks",
            topics: [
                "Enterprise Integration Patterns",
                "API Management",
                "Error Handling and Monitoring",
                "Performance Optimization",
                "Real-world Integration Scenarios",
            ],
        },
        {
            title: "SuccessFactors Integration",
            duration: "4 weeks",
            topics: [
                "SuccessFactors Architecture",
                "Integration with SAP CPI",
                "Employee Central Integration",
                "Recruitment Integration",
                "Custom Extensions",
            ],
        },
    ],

    benefits: [
        {
            title: "Learning Experience",
            items: [
                "24/7 Access to Course Materials",
                "Live Interactive Sessions",
                "Hands-on Labs & Projects",
                "Industry Case Studies",
                "Real-time Doubt Resolution",
            ],
            bgColor: "bg-blue-50",
            icon: BookOpen,
        },
        {
            title: "Career Support",
            items: [
                "Job Placement Assistance",
                "Resume Building Workshop",
                "Mock Interviews",
                "LinkedIn Profile Optimization",
                "Career Mentorship",
            ],
            bgColor: "bg-purple-50",
            icon: Briefcase,
        },
        {
            title: "Program Benefits",
            items: [
                "Industry Certification",
                "Lifetime Access",
                "Private Community Access",
                "Monthly Webinars",
                "Project Portfolio",
            ],
            bgColor: "bg-green-50",
            icon: Award,
        },
    ],

    highlights: [
        { icon: Timer, text: "12 Weeks Program" },
        { icon: Users, text: "Live Interactive Sessions" },
        { icon: Trophy, text: "Placement Assistance" },
        { icon: BadgeCheck, text: "Industry Certification" },
    ],

    cta: {
        title: "Ready to Transform Your Career?",
        subtitle: "Join our next batch and kickstart your journey in SAP Integration",
    }
};

const page = () => {
    return (
        <>
            <CourseDetails COURSE_CONTENT={COURSE_CONTENT} />
        </>
    );
};

export default page;
