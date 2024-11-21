import React from 'react'
import { AnimatedTestimonials } from '../ui/Animated-testimonials';
import { motion } from "framer-motion";
const testimonials = [
    {
        quote: "The SAP training program completely transformed my career trajectory. The hands-on experience and industry-focused curriculum gave me the confidence to excel in my role.",
        name: "Shweta  Vats",
        designation: "SAP Consultant at Capgemini",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/v1732085518/WhatsApp_Image_2024-11-18_at_21.33.02_dccbf2dd_qdzlby.jpg"
    },
    {
        quote: "The instructors are incredibly knowledgeable and supportive. They don't just teach SAP, they share real-world experiences that prepare you for actual workplace scenarios.",
        name: "Rahul Verma",
        designation: "SAP FICO Specialist",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730442627/samples/people/smiling-man.jpg"
    },
    {
        quote: "Best investment I've made in my professional development. The practical approach to learning SAP modules made complex concepts easy to understand.",
        name: "Shubham Sharma",
        designation: "SAP Project Lead",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730442635/samples/smile.jpg"
    },
    {
        quote: "The best decision I've made for my professional growth! The hands-on approach to learning SAP modules simplified even the most complex concepts.",
        name: "Ankita Singh",
        designation: "Software Developer",
        src: "https://res.cloudinary.com/dwxm42izp/image/upload/Ankita_Singh_dtken6.jpg"
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
                Hear from our alumni about their transformative learning experience
                and successful career transitions
            </p>
        </motion.div>
    </div>

    {/* Testimonials component */}
    <div className="relative z-10" data-animate="testimonials">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
</div>
  )
}

export default TestimonialWrapper
