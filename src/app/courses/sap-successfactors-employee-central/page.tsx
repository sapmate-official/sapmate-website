"use client";
import {
    Star,
    Users,
    Trophy,
    Award,
    Timer,
    BadgeCheck,
    BookOpen,
    Globe,
} from "lucide-react";

import CourseDetails from "@/components/section/CourseDetails";
import { IconTool, } from "@tabler/icons-react";

// Data constants moved outside component for better performance
const COURSE_CONTENT = {
    hero: {
        badge: "Certification Ready Program",
        title: "SAP SuccessFactors Employee Central",
        subtitle: "Complete Employee Central Implementation Training",
        rating: 4.7,
        reviewCount: "1200+",
    },
    overview: `Master SAP SuccessFactors Employee Central with our comprehensive certification-focused 
    program. Learn implementation, configuration, and best practices while preparing for certification 
    with hands-on system access.`,
    stats: [
        {
            value: "1200+",
            label: "Certified Professionals",
            icon: Users,
            color: "text-blue-600",
        },
        {
            value: "90%",
            label: "Certification Rate",
            icon: Trophy,
            color: "text-green-600",
        },
        {
            value: "4.7",
            label: "Average Rating",
            icon: Star,
            color: "text-yellow-500",
        },
        {
            value: "40+",
            label: "Countries Covered",
            icon: Globe,
            color: "text-purple-600",
        },
    ],
    modules: [
        {
            title: "EC Foundations",
            duration: "3 weeks",
            topics: [
                "Employee Central Overview",
                "Organizational Management",
                "Position Management",
                "Foundation Objects",
                "Business Rules",
            ],
        },
        {
            title: "Advanced Configuration",
            duration: "4 weeks",
            topics: [
                "Time Management",
                "Payroll Integration",
                "Workflow Configuration",
                "Custom Objects & Fields",
                "Data Model & Picklists",
            ],
        },
        {
            title: "Integration & Reporting",
            duration: "3 weeks",
            topics: [
                "Integration Center",
                "Report Creation",
                "Analytics & Dashboards",
                "Data Migration",
                "System Administration",
            ],
        },
    ],
    benefits: [
        {
            title: "Learning Resources",
            items: [
                "Real System Access",
                "Certification Study Guide",
                "Practice Test Papers",
                "Configuration Workbooks",
                "Implementation Templates",
            ],
            bgColor: "bg-blue-50",
            icon: BookOpen,
        },
        {
            title: "Hands-on Experience",
            items: [
                "Live System Access",
                "Real-world Projects",
                "Implementation Scenarios",
                "Configuration Practice",
                "Integration Exercises",
            ],
            bgColor: "bg-purple-50",
            icon: IconTool,
        },
        {
            title: "Career Support",
            items: [
                "Certification Preparation",
                "Job Placement Support",
                "Resume Building",
                "Interview Preparation",
                "Career Mentorship",
            ],
            bgColor: "bg-green-50",
            icon: Award,
        },
    ],
    highlights: [
        { icon: Timer, text: "10 Weeks Comprehensive Program" },
        { icon: Users, text: "Real System Access" },
        { icon: Trophy, text: "Certification Support" },
        { icon: BadgeCheck, text: "Implementation Templates" },
    ],
    cta: {
        title: "Start Your Employee Central Journey",
        subtitle: "Get certified and become an implementation expert",
    },
};

const page = () => {
    return (
        <>
            <CourseDetails COURSE_CONTENT={COURSE_CONTENT} />
        </>
    );
};

export default page;
