'use client';
import React  from "react";
import {
    Mail,
    MapPin,
    Clock,
    MessageSquare,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    ArrowLeft,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Contact from "@/components/section/Contact";
import { IconBrandWhatsappFilled } from "@tabler/icons-react";
import SapmateBot from "@/components/SapmateBot";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ContactPage = () => {
    
    const handleEmailClick = () => {
        window.location.href = "mailto:sadaf.salam@sapmate.com";
    };
    
    const handleWhatsAppClick = () => {
        window.location.href = "https://wa.me/919830334496";
    };

    const contactInfo = [
        {
            icon: IconBrandWhatsappFilled,
            title: "Whatsapp Us",
            details: ["+91 9830334496", "24 X 7 service"],
            onClick: handleWhatsAppClick
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["sadaf.salam@sapmate.com"],
            onClick: handleEmailClick
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: [
                "Dubai Internet City. DIC Building 4,Shaikh Zayed Road,Dubai",
                "Noida one sec 62 Noida Uttar Pradesh, PIN 201309",
            ],
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: [
                "Monday - Sunday: 8:00 AM - 9:00 PM",
            ],
        },
    ];

    const socialLinks = [
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/sapmate" },
        { icon: Twitter, label: "Twitter", href: "#" },
        { icon: Facebook, label: "Facebook", href: "#" },
        { icon: Instagram, label: "Instagram", href: "#" },
    ];
    const router = useRouter();

    return (
        <div className="bg-gradient-to-br from-white to-blue-50">
            {/* Hero Section */}
            <Button variant="outline" onClick={() => router.back()} className="border-b border-2 fixed z-50 top-4 left-4">
                <ArrowLeft className="h-4 w-4"/>
            </Button>
            <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl font-bold text-blue-900">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about our SAP courses? We&apos;re here to help!
                        Choose your preferred way to reach us.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            onClick={info.onClick}
                        >
                            <CardContent className="p-6 text-center">
                                <info.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                                <h3 className="font-semibold text-lg mb-3">
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p
                                        key={idx}
                                        className="text-gray-600 text-sm mb-1"
                                    >
                                        {detail}
                                    </p>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Contact Form and Social Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Contact Form - Takes up 2 columns */}
                    <div className="md:col-span-2">
                        <Card className="overflow-hidden h-full">
                            <CardHeader className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                                <CardTitle>Send Us a Message</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <Contact />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Social Links and FAQ - Takes up 1 column */}
                    <div className="space-y-6">
                        {/* Social Links Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Connect With Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="p-2 rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* FAQ Card */}
                        <Card className="bg-blue-50">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <MessageSquare
                                        className="text-blue-600"
                                        size={24}
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            Have questions?
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Check out our{" "}
                                            <a
                                                href="#"
                                                className="text-blue-600 hover:underline"
                                            >
                                                FAQ section
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Support Hours Banner */}
                <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <Clock size={24} />
                                <div>
                                    <h3 className="font-semibold">
                                        24/7 Support Available
                                    </h3>
                                    <p className="text-sm">
                                        Our technical support team is always here to help
                                    </p>
                                </div>
                            </div>
                           
                        </div>
                    </CardContent>
                </Card>
            </div>
            <SapmateBot />
        </div>
    );
};

export default ContactPage;