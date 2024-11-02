'use client';
import React, { useState, useEffect } from 'react';
import { VisibilityState } from "@/interface/Home";
import { Activity, Scale, Zap } from 'lucide-react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<{ left: number; top: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob transition-opacity duration-1000" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000 transition-opacity duration-1000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000 transition-opacity duration-1000" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-float-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = ({ isVisible }: { isVisible: VisibilityState }) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible.about && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isVisible.about]);

    const features = [
        {
            title: "Industry Experts",
            desc: "Learn from professionals with years of real-world SAP implementation experience. Our instructors bring practical insights directly from the field.",
            stats: "15+ Years Average Experience",
            icon: <Activity className="w-8 h-8" />,
            highlight: "100+ Enterprise Projects Completed"
        },
        {
            title: "Personalized Learning",
            desc: "Small batch sizes ensuring individual attention and better learning outcomes. Get dedicated support tailored to your learning pace.",
            stats: "1:10 Teacher-Student Ratio",
            icon: <Scale className="w-8 h-8" />,
            highlight: "24/7 Support Available"
        },
        {
            title: "Career Support",
            desc: "Comprehensive placement assistance and interview preparation. We're committed to helping you succeed in your SAP career journey.",
            stats: "92% Placement Rate",
            icon: <Zap className="w-8 h-8" />,
            highlight: "500+ Students Placed"
        }
    ];

    return (
        <div id="about" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">

            <AnimatedBackground />
            
            <div className={`container relative mx-auto px-4 z-10 transition-all duration-1000 ${
                isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <div className="text-center mb-16">
                    <div className={`inline-block transition-all duration-1000 ${
                        isVisible.about ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                        <h2 className="text-4xl font-bold mb-4 text-white relative">
                            Why Choose <span className="text-blue-400">SAPMATE</span>?
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/20 rounded-full overflow-hidden">
                                <div className={`h-full bg-blue-400 rounded-full transition-all duration-1000 ease-out ${
                                    isVisible.about ? 'w-full' : 'w-0'
                                }`} />
                            </div>
                        </h2>
                    </div>
                    <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-300 ${
                        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                        Experience excellence in SAP training with our industry-leading program
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-700 ease-out ${
                                isVisible.about 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-16'
                            }`}
                            style={{ 
                                transitionDelay: `${500 + index * 200}ms`,
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`relative bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 h-full transition-all duration-500 group ${
                                hoveredCard === index 
                                    ? 'scale-105 border-blue-400 shadow-xl shadow-blue-500/10' 
                                    : 'hover:border-gray-600'
                            }`}>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl blur-xl" />
                                
                                <div className="flex items-center mb-4">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mr-3 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </div>
                                
                                <p className="text-gray-400 mb-4 transition-colors duration-300 group-hover:text-gray-300">
                                    {feature.desc}
                                </p>
                                
                                <div className="pt-4 border-t border-gray-700 transition-colors duration-300 group-hover:border-gray-600">
                                    <div className="text-sm font-medium text-blue-400 mb-2 transition-colors duration-300 group-hover:text-blue-300">
                                        {feature.stats}
                                    </div>
                                    <div className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                                        {feature.highlight}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;