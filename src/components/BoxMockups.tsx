import React from 'react';
import { motion } from 'framer-motion';
import mockup1Image from '../assets/images/mockup1.png';
import logoImage from '../assets/images/logo.png';

const BoxMockups: React.FC = () => {
  const mockups = [
    {
      image: mockup1Image,
      caption: 'Example: Coffee Brand Ad',
      description: 'Specialty coffee subscription box featuring minimalist brand design'
    },
    {
      image: logoImage, // Using logo.png as a placeholder for mockup2
      caption: 'Example: Music Album Promo',
      description: 'Limited edition album release with QR code for exclusive digital content'
    },
    {
      image: logoImage, // Using logo.png as a placeholder for mockup3
      caption: 'Example: Fashion Brand Packaging',
      description: 'Eco-conscious clothing brand with sustainable messaging on delivery boxes'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Box Mockups</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See how your brand could look on our premium cardboard packaging. These examples showcase the creative possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockups.map((mockup, index) => (
            <motion.div 
              key={index}
              className="bg-background/40 border border-text/10 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-[300px] bg-primary/20 flex items-center justify-center">
                <img 
                  src={mockup.image} 
                  alt={mockup.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{mockup.caption}</h3>
                <p className="text-text-secondary">{mockup.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-all transform hover:scale-105">
            Request Sample Boxes
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BoxMockups; 