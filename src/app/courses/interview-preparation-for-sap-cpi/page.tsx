'use client';
import React from "react";
import {
    Star,
    Users,
    Trophy,
    Timer,
    BadgeCheck,
    BookOpen,
    Target,
    TrendingUp,
} from "lucide-react";
import CourseDetails from "@/components/section/CourseDetails";
// import CourseDetails2 from "@/components/section/CourseDetails2";

// Data constants moved outside component for better performance
const COURSE_CONTENT = {
    hero: {
        badge: "Limited Seats Available!",
        title: "Interview Preparation for SAP CPI",
        subtitle: "Expert-Led Interview Mastery Program",
        rating: 4.9,
        reviewCount: "800+"
    },
    overview: `Master SAP CPI interview techniques with our intensive preparation program. Get ready 
    for technical interviews, system design discussions, and integration scenarios with personalized 
    feedback from industry experts.`,
    stats: [
        {
            value: "800+",
            label: "Success Stories",
            icon: Users,
            color: "text-blue-600",
        },
        {
            value: "92%",
            label: "Interview Success Rate",
            icon: Trophy,
            color: "text-green-600",
        },
        {
            value: "4.9",
            label: "Average Rating",
            icon: Star,
            color: "text-yellow-500",
        },
        {
            value: "30+",
            label: "Industry Experts",
            icon: Users,
            color: "text-purple-600",
        },
    ],
    modules: [
        {
            title: "Technical Interview Preparation",
            duration: "1 week",
            topics: [
                "Core SAP CPI Concepts",
                "Integration Patterns & Best Practices",
                "Common Interview Questions",
                "Technical Problem Solving",
                "Code Review Exercises",
            ],
        },
        {
            title: "System Design & Architecture",
            duration: "1 week",
            topics: [
                "Integration Architecture Patterns",
                "System Design Principles",
                "Performance & Scalability",
                "Security Best Practices",
                "Case Study Analysis",
            ],
        },
        {
            title: "Mock Interviews & Feedback",
            duration: "2 weeks",
            topics: [
                "One-on-One Mock Interviews",
                "Panel Interview Practice",
                "Behavioral Interview Preparation",
                "Salary Negotiation Skills",
                "Interview Strategy Planning",
            ],
        },
    ],
    benefits: [
        {
            title: "Interview Preparation",
            items: [
                "Personalized Feedback Sessions",
                "Industry Expert Mentorship",
                "Company-Specific Interview Prep",
                "Technical Assessment Practice",
                "Mock Interview Recordings",
            ],
            bgColor: "bg-blue-50",
            icon: Target,
        },
        {
            title: "Career Development",
            items: [
                "Salary Negotiation Training",
                "Personal Brand Building",
                "LinkedIn Profile Enhancement",
                "Resume Review Workshop",
                "Interview Strategy Planning",
            ],
            bgColor: "bg-purple-50",
            icon: TrendingUp,
        },
        {
            title: "Learning Resources",
            items: [
                "Interview Question Bank",
                "System Design Templates",
                "Code Sample Library",
                "Best Practices Guide",
                "Interview Cheat Sheets",
            ],
            bgColor: "bg-green-50",
            icon: BookOpen,
        },
    ],
    highlights: [
        { icon: Timer, text: "4 Weeks Intensive Program" },
        { icon: Users, text: "1-on-1 Expert Mentorship" },
        { icon: Trophy, text: "92% Interview Success Rate" },
        { icon: BadgeCheck, text: "Mock Interview Recordings" },
    ],
    cta: {
        title: "Ready to Ace Your SAP CPI Interviews?",
        subtitle: "Join our expert-led program and boost your interview confidence",
    }
};
const page = () => {
    return (
        <>
            <CourseDetails COURSE_CONTENT={COURSE_CONTENT} />
            {/* <CourseDetails2  /> */}
        </>
    );
};

export default page;
