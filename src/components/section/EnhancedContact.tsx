import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface FloatingElementProps {
  delay: number;
  duration: number;
  position: {
    x: number;
    y: number;
    size: number;
  };
  color: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EnhancedContactProps {
  isVisible?: boolean;
}

// Predefined positions for floating elements to avoid hydration mismatches
// Predefined positions and colors for floating elements
const FLOATING_ELEMENTS = [
  { x: 10, y: 20, size: 180, color: "from-blue-500/30 to-purple-500/30" },
  { x: 70, y: 40, size: 200, color: "from-purple-500/30 to-pink-500/30" },
  { x: 30, y: 70, size: 160, color: "from-blue-400/30 to-indigo-500/30" },
  { x: 80, y: 25, size: 220, color: "from-indigo-500/30 to-purple-500/30" },
  { x: 20, y: 60, size: 190, color: "from-purple-400/30 to-pink-500/30" },
  { x: 60, y: 80, size: 170, color: "from-blue-500/30 to-indigo-500/30" },
] as const;

const FloatingElement: React.FC<FloatingElementProps> = ({ delay, duration, position, color }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      x: [`${position.x}%`, `${position.x + 10}%`, `${position.x}%`],
      y: [`${position.y}%`, `${position.y - 10}%`, `${position.y}%`],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    }}
    className={`absolute rounded-full bg-gradient-to-r ${color} blur-2xl`}
    style={{
      width: `${position.size}px`,
      height: `${position.size}px`,
    }}
  />
);

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {FLOATING_ELEMENTS.map((element, i) => (
        <FloatingElement
          key={i}
          delay={i * 2}
          duration={15 + i * 2}
          position={element}
          color={element.color}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/60 to-purple-50/60 backdrop-blur-[2px]" />
    </div>
  );
};

const EnhancedContact: React.FC<EnhancedContactProps> = ({ isVisible = true }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field: string) => setActiveField(field);
  const handleBlur = () => setActiveField(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
        duration: 5000,
      });

      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'An error occurred',
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const progressWidth = Object.values(formData).filter(Boolean).length * 25;

  if (!isVisible) return null;

  return (
    <div className="relative min-h-screen py-20">
      <BackgroundAnimation />
      <div className="container relative mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let&apos;s Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
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
                gradient: "from-blue-400 to-blue-600"
              },
              {
                Icon: Mail,
                title: "Email Us",
                content: "kabir.khan@sapmate.com",
                gradient: "from-purple-400 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative overflow-hidden group rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/50 backdrop-blur-sm group-hover:opacity-0 transition-all duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="relative p-6">
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
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6">
              {[
                { name: 'name' as const, type: 'text', placeholder: 'Your Name', icon: 'N' },
                { name: 'email' as const, type: 'email', placeholder: 'Your Email', icon: '@' },
                { name: 'phone' as const, type: 'tel', placeholder: 'Your Phone', icon: '#' }
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
                    className="w-full px-6 py-4 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pl-12"
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
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                disabled={loading}
                className="w-full px-6 py-4 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                required
              />

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center justify-center p-4 bg-green-50/80 backdrop-blur-sm rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-green-700">Message sent successfully!</span>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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

export default EnhancedContact;