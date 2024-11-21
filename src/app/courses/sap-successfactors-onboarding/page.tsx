'use client';
import {
    Star,
    Users,
    Trophy,
    Timer,
    BadgeCheck,
    FileText,
    Settings,
    TrendingUp,
} from "lucide-react";
import { IconTool } from "@tabler/icons-react";
import CourseDetails from "@/components/section/CourseDetails";

// Data constants moved outside component for better performance
const COURSE_CONTENT = {
    hero: {
        badge: "Practical Implementation Focus",
        title: "SAP SuccessFactors Onboarding",
        subtitle: "End-to-End Onboarding Implementation Training",
        rating: 4.6,
        reviewCount: "600+"
    },
    overview: `Master SAP SuccessFactors Onboarding module with our hands-on implementation program. 
    Learn to configure and customize onboarding processes, workflows, and forms while building 
    real-world solutions.`,
    stats: [
        {
            value: "600+",
            label: "Trained Professionals",
            icon: Users,
            color: "text-blue-600",
        },
        {
            value: "88%",
            label: "Implementation Success",
            icon: Trophy,
            color: "text-green-600",
        },
        {
            value: "4.6",
            label: "Average Rating",
            icon: Star,
            color: "text-yellow-500",
        },
        {
            value: "25+",
            label: "Use Cases Covered",
            icon: FileText,
            color: "text-purple-600",
        },
    ],
    modules: [
        {
            title: "Onboarding Fundamentals",
            duration: "2 weeks",
            topics: [
                "Onboarding Module Overview",
                "System Architecture",
                "Basic Configuration",
                "Forms & Documents",
                "Process Templates",
            ],
        },
        {
            title: "Advanced Configuration",
            duration: "3 weeks",
            topics: [
                "Workflow Configuration",
                "Custom Forms & Fields",
                "Document Generation",
                "Email Templates",
                "Integration Setup",
            ],
        },
        {
            title: "Implementation & Projects",
            duration: "3 weeks",
            topics: [
                "Implementation Methodology",
                "Project Planning",
                "Testing & Validation",
                "Go-Live Strategy",
                "Support & Maintenance",
            ],
        },
    ],
    benefits: [
        {
            title: "Implementation Skills",
            items: [
                "Configuration Workshops",
                "Best Practices Guide",
                "Implementation Templates",
                "Project Documentation",
                "Testing Scenarios",
            ],
            bgColor: "bg-blue-50",
            icon: Settings,
        },
        {
            title: "Practical Experience",
            items: [
                "Hands-on Labs",
                "Real Project Work",
                "Custom Development",
                "Integration Practice",
                "Testing & Validation",
            ],
            bgColor: "bg-purple-50",
            icon: IconTool,
        },
        {
            title: "Career Growth",
            items: [
                "Implementation Portfolio",
                "Project Experience",
                "Best Practices Knowledge",
                "Industry Recognition",
                "Career Guidance",
            ],
            bgColor: "bg-green-50",
            icon: TrendingUp,
        },
    ],
    highlights: [
        { icon: Timer, text: "8 Weeks Implementation Program" },
        { icon: Users, text: "Hands-on Configuration Practice" },
        { icon: Trophy, text: "Real Project Experience" },
        { icon: BadgeCheck, text: "Implementation Templates" },
    ],
    cta: {
        title: "Become an Onboarding Implementation Expert",
        subtitle: "Master end-to-end implementation with hands-on experience",
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

