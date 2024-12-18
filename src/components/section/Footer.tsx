import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const quickLinks = [
        { title: 'About Us', href: '/about' },
        { title: 'Courses', href: '/courses' },
        { title: 'Success Stories', href: '/success-stories' },
        { title: 'Contact', href: '/contact' }
    ];

    const courses = [
        { title: 'SAP CPI with SuccessFactors', href: '/courses/sap-cpi-with-sap-successfactors-job-ready-program' },
        { title: 'SAP CPI Interview Prep', href: '/courses/interview-preparation-for-sap-cpi' },
        { title: 'SuccessFactors EC', href: '/courses/sap-successfactors-employee-central' },
        { title: 'SuccessFactors Onboarding', href: '/courses/sap-successfactors-onboarding' }
    ];

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/company/sapmate', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' }
    ];

    return (
        <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6 transform transition-all duration-300 hover:translate-x-2">
                        <div>
                            <h3 className="text-3xl font-bold">SAPMATE</h3>
                            <p className="text-blue-100 mt-2">
                                Empowering careers through expert SAP training
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="font-semibold text-xl">Locations</h4>
                            <address className="text-blue-100 not-italic space-y-4">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <div>
                                        Dubai Internet City<br />
                                        DIC Building 4, Sheikh Zayed Road<br />
                                        Dubai, UAE
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <div>
                                        Noida one sec 62<br />
                                        Noida Uttar pradesh-201309<br />
                                        India
                                    </div>
                                </div>
                            </address>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-xl mb-6">Quick Links</h4>
                        <nav>
                            <ul className="space-y-4 text-blue-100">
                                {quickLinks.map((link) => (
                                    <li key={link.title}>
                                        <Link href={link.href} className="hover:text-white transition-colors">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-semibold text-xl mb-6">Our Courses</h4>
                        <nav>
                            <ul className="space-y-4 text-blue-100">
                                {courses.map((course) => (
                                    <li key={course.title}>
                                        <Link href={course.href} className="hover:text-white transition-colors">
                                            {course.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-xl mb-6">Contact Us</h4>
                            <ul className="space-y-4 text-blue-100">
                                <li className="flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    <a href="mailto:sadaf.salam@sapmate.com" className="hover:text-white transition-colors">
                                        sadaf.salam@sapmate.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    <a href="tel:+919830334496" className="hover:text-white transition-colors">
                                        +91 9830334496
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-xl mb-6">Follow Us</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                        aria-label={`Follow us on ${social.label}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-400/20 mt-12 pt-8 text-center text-blue-100">
                    <p>© {new Date().getFullYear()} SAPMATE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;