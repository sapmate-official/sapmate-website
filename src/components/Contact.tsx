import React, { useState } from "react";
import {
    Mail,
    Phone,
    Send,
    Loader2,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
type ContactForm = {
    [key: string]: string;
    name: string;
    email: string;
    phone: string;
    message: string;
  };


const Contact = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFocus = (field: string) => setActiveField(field);
    const handleBlur = () => setActiveField(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok)
                throw new Error(data.error || "Failed to send message");

            setSubmitted(true);
            toast({
                title: "Message Sent!",
                description: "We'll get back to you soon.",
                duration: 5000,
            });

            // Reset form after 2 seconds
            setTimeout(() => {
                setFormData({ name: "", email: "", phone: "", message: "" });
                setSubmitted(false);
            }, 2000);
        } catch (error: { message: string } | unknown) {
            console.log(error);
                toast({
                    title: "Error",
                    description: "Failed to send message, Try with contact information given beside.",
                    variant: "destructive",
                    duration: 5000,
                });
        
        } finally {
            setLoading(false);
        }
    };

    const progressWidth = Object.values(formData).filter(Boolean).length * 25;

    return (
        <div id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                    Let&apos;s Connect
                </h2>
                <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {[
                            {
                                Icon: Phone,
                                title: "Call Us",
                                content: "+91 9830334496",
                                gradient: "from-blue-400/90 to-blue-600/90",
                            },
                            {
                                Icon: Mail,
                                title: "Email Us",
                                content: "sadaf.salam@sapmate.com",
                                gradient: "from-purple-400/90 to-purple-600/90",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="relative overflow-hidden group rounded-xl shadow-lg"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                                />

                                {/* Content container */}
                                <div className="relative p-6 bg-white group-hover:bg-opacity-0 transition-all duration-300">
                                    <div className="flex items-center relative z-10">
                                        <item.Icon className="w-6 h-6 mr-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        <div>
                                            <h3 className="font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${progressWidth}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
                        >
                            {[
                                {
                                    name: "name",
                                    type: "text",
                                    placeholder: "Your Name",
                                    icon: "N",
                                },
                                {
                                    name: "email",
                                    type: "email",
                                    placeholder: "Your Email",
                                    icon: "@",
                                },
                                {
                                    name: "phone",
                                    type: "tel",
                                    placeholder: "Your Phone",
                                    icon: "#",
                                },
                            ].map((field) => (
                                <div key={field.name} className="relative">
                                    <motion.input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus(field.name)}
                                        onBlur={handleBlur}
                                        disabled={loading}
                                        className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pl-12"
                                        required
                                    />
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        {field.icon}
                                    </span>
                                    {activeField === field.name && (
                                        <motion.span
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.span>
                                    )}
                                </div>
                            ))}

                            <motion.textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => handleFocus("message")}
                                onBlur={handleBlur}
                                disabled={loading}
                                className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                required
                            />

                            <AnimatePresence>
                                {submitted ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center justify-center p-4 bg-green-50 rounded-lg"
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                                        <span className="text-green-700">
                                            Message sent successfully!
                                        </span>
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
