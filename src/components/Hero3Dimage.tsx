import React, { useState } from 'react';


import { motion } from 'framer-motion';

const Hero3DImage = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateXVal = -((y - centerY) / 10);
    const rotateYVal = (x - centerX) / 10;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div 
      className="w-full lg:w-96 h-[500px] relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: { duration: 0.3 }
      }}
    >
      <div 
        className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dwxm42izp/image/upload/v1734499484/xms7k6dvowe0s3ohyrf6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
      </div>
      
      {/* Floating elements for depth */}
      <motion.div
        className="absolute -right-4 -top-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        animate={{
          transform: `translateZ(50px) rotateX(${-rotateX * 1.5}deg) rotateY(${-rotateY * 1.5}deg)`,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -left-4 -bottom-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"
        animate={{
          transform: `translateZ(30px) rotateX(${-rotateX * 1.2}deg) rotateY(${-rotateY * 1.2}deg)`,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Hero3DImage;