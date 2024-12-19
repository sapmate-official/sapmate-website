import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const YouTubeCTASection = () => {
  return (
    <div className="bg-[#F5FAFD] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Content Column */}
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience our offerings on YouTube!
            </h2>
            
            <div className="relative group overflow-hidden rounded-xl mb-6">
              <img
                src="https://res.cloudinary.com/dwxm42izp/image/upload/v1734606870/hqdefault_xrubjp.avif"
                alt="SAP CPI Training"
                className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" onClick={() =>window.open('https://www.youtube.com/watch?v=-Q-NEGCg0Pg', '_blank')}>
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg">
              What is SAP CPI? What is Cloud Platform Integration? What is Integration? 
              Why Integration is required? What are the middleware options available? 
              Which middleware to choose? Find answers to these questions and more on our YouTube Channel.
            </p>
          </motion.div>
          
          {/* CTA Column */}
          <motion.div 
            className="md:col-span-4 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg transform transition-transform hover:scale-105"
              onClick={() => window.open('https://www.youtube.com/@sapmate', '_blank')}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Explore YouTube Channel
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCTASection;