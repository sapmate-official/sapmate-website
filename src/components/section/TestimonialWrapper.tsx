import React from "react";
import { AnimatedTestimonials } from "../ui/Animated-testimonials";
import { motion } from "framer-motion";
const testimonials = [
    {
        quote: "The comprehensive SAP training at Sapmate was a game-changer for me. The structured approach and practical insights made me industry-ready in no time, helping me secure a role at Capgemini with a 33 LPA package.",
        name: "Shweta Vats",
        designation: "SAP CPI Consultant at Capgemini",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/v1732085518/WhatsApp_Image_2024-11-18_at_21.33.02_dccbf2dd_qdzlby.jpg",
    },
    {
        quote: "From day one, the training was designed to address real-world challenges. The expertise of the instructors was evident in every session. I landed a role at TCS with a 12 LPA package.",
        name: "Mehboob Azam",
        designation: "SF Employee Central Consultant at TCS",
        src: "https://res.cloudinary.com/diacb8luh/image/upload/v1732391726/oswyas6mifyxi9oe0ouk.jpg",
    },
    {
        quote: "The personalized attention and expert guidance provided in this program set it apart. It gave me the confidence to take on complex projects. I am now working at Accenture with a 13 LPA package.",
        name: "Beauty Kumari",
        designation: "SAP CPI Consultant at Capgemini",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/v1735735727/hai7iyotouayihxtrf9e.jpg",
    },
    {
        quote: "Sapmate’s training equipped me with both technical skills and practical knowledge. Landing a role at Deloitte was a dream come true, with a 14 LPA package!",
        name: "Swatilekha Majumder",
        designation: "SAP Consultant at Deloitte",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/swatilekha_majumdar_cm3q4u.jpg",
    },
    {
        quote: "The in-depth coverage of SAP tools and technologies was incredible. I feel confident tackling the most complex integrations in my role. I am now working at American Movil with a 17,711 USD package.",
        name: "Julio Alvarez",
        designation: "SAP CPI Consultant in American Movil",
        src: "https://res.cloudinary.com/diacb8luh/image/upload/v1732392941/prhyu0yfrqddzaq6xlcj.jpg",
    },
    {
        quote: "Thanks to Sapmate, I secured my dream job at EY as an SAP SuccessFactors Consultant with a 16,534 USD package. Their expert guidance and resources were exceptional!",
        name: "Irina Slobodchikova",
        designation: "SAP SuccessFactors Consultant at EY",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/v1732459253/am3if3ewmzonq9apeadt.jpg",
    },
    {
        quote: "This course was instrumental in helping me land my dream job at PwC Kolkata as a Data and Tech Consultant with a 14 LPA package. The practical training and expert guidance made all the difference!",
        name: "Shah Waqarul Haque",
        designation: "Data and Tech Consultant at PwC Kolkata",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/v1732459431/qlg7dug2ee64qxgpktfl.jpg",
    }
];


const TestimonialWrapper = () => {
    return (
        <div className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Section header */}
            <div className="relative text-center mb-12">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Students Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Hear from our alumni about their transformative learning
                        experience and successful career transitions
                    </p>
                </motion.div>
            </div>

            {/* Testimonials component */}
            <div className="relative z-10" data-animate="testimonials">
                <AnimatedTestimonials
                    testimonials={testimonials}
                    autoplay={true}
                />
            </div>
        </div>
    );
};

export default TestimonialWrapper;
