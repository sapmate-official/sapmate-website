import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Target, Award } from 'lucide-react';

const BrandedStatsSection = () => {
  const [counts, setCounts] = useState({
    students: 0,
    placement: 0,
    rating: 0
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const animate = () => {
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;

          setCounts({
            students: Math.min(Math.floor(1000 * progress), 100),
            placement: Math.min(Math.floor(92 * progress), 92),
            rating: Number((4.8 * progress).toFixed(1))
          });

          if (currentStep === steps) clearInterval(timer);
        }, interval);
      };

      animate();
    }
  }, [inView]);

  const stats = [
    {
      icon: <UserCheck className="w-12 h-12" />,
      number: `${counts.students}+`,
      label: "Successful Students",
      description: "Trained and industry-ready professionals"
    },
    {
      icon: <Target className="w-12 h-12" />,
      number: `${counts.placement}%`,
      label: "Placement Rate",
      description: "Career success achievement"
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: counts.rating.toFixed(1),
      label: "Student Rating",
      description: "Satisfaction score from alumni"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative p-8 bg-white rounded-2xl border border-blue-100 shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 text-center">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandedStatsSection;