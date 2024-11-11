import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ handleScrollTo }: { handleScrollTo: (elementId: string) => void }) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Wait for complete page load before enabling animations
    if (document.readyState === 'complete') {
      setPageLoaded(true);
    } else {
      window.addEventListener('load', () => setPageLoaded(true));
    }

    return () => window.removeEventListener('load', () => setPageLoaded(true));
  }, []);

  // Static content for initial render - No animations, no motion components
  if (!pageLoaded) {
    return (
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Transform Your Career with
          <span className="text-blue-400"> SAP Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Join India&apos;s premier SAP training institute and learn from industry experts
        </p>
        <button 
          onClick={() => handleScrollTo("contact")}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Journey
        </button>
      </div>
    );
  }

  // Animated version only after complete page load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center max-w-4xl"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
      >
        Transform Your Career with
        <motion.span 
          variants={itemVariants}
          className="text-blue-400"
        >
          {" "}SAP Excellence
        </motion.span>
      </motion.h1>
      <motion.p 
        variants={itemVariants}
        className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
      >
        Join India&apos;s premier SAP training institute and learn from industry experts
      </motion.p>
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        onClick={() => handleScrollTo("contact")}
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Start Your Journey
      </motion.button>
    </motion.div>
  );
};

export default Hero;