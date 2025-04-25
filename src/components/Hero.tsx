import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/images/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-primary/30 opacity-70"></div>
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-3xl rounded-full"
            animate={{
              x: ['-25%', '25%', '-25%'],
              y: ['-25%', '25%', '-25%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: '80%', height: '80%' }}
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Turn Every Package Into a Billboard
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advertise on cardboard packaging that gets delivered to thousands — real-world impressions with every shipment.
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get a Custom Quote
          </motion.button>
        </div>
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img 
              src={logoImage} 
              alt="Branded packaging box example" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 