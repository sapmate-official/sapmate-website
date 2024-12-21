'use client'
import React from "react";
import { CourseOverview } from "./section/CourseOverview";
import { CourseCurriculum } from "./section/CourseCurriculum";
// import { InstructorProfile } from "./section/InstructorProfile";
import { StudentTestimonials } from "./section/StudentTestimonial";
import { CourseRequirements } from "./section/CourseRequirements";
import { CourseComparison } from "./section/CourseComparison";
import { PricingSection } from "./section/PricingSection";
import { ScheduleSection } from "./section/ScheduleSection";
import { FAQSection } from "./section/FAQsection";
import Footer from "@/components/section/Footer";
import HeroSection from "./section/HeroSection";
import Navbar from "./section/Navbar";
import Link from "next/link";

const ClientPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation - Consider adding sticky nav */}
            <Navbar/>

            {/* Main Content */}
            <main className="pt-16">
                {/* Hero Section */}
                <section id="hero">
                    <HeroSection />
                </section>

                {/* Course Overview */}
                <section id="overview">
                    <CourseOverview />
                </section>

                {/* Course Curriculum */}
                <section id="curriculum" className="bg-gray-50">
                    <CourseCurriculum />
                </section>

                {/* Instructor Profile */}
                {/* <section id="instructor">
                    <InstructorProfile />
                </section> */}

                {/* Student Testimonials */}
                <section id="testimonials" className="bg-gray-50">
                    <StudentTestimonials />
                </section>

                {/* Course Requirements */}
                <section id="requirements">
                    <CourseRequirements />
                </section>

                {/* Course Comparison */}
                <section id="comparison" className="bg-gray-50">
                    <CourseComparison />
                </section>

                {/* Pricing Section */}
                <section id="pricing">
                    <PricingSection />
                </section>

                {/* Schedule Section */}
                <section id="schedule" className="bg-gray-50">
                    <ScheduleSection />
                </section>

                {/* FAQ Section */}
                <section id="faq">
                    <FAQSection />
                </section>
            </main>

            {/* Footer */}
            <Footer/>

            {/* Floating CTA */}
            <div className="fixed bottom-4 right-4 z-50">
                <Link href={"/contact-us"} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                    Book Free Demo
                </Link>
            </div>  
        </div>
    );
};

export default ClientPage;
