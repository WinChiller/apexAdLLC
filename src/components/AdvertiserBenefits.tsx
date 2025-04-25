import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Leaf, Palette, Brain } from 'lucide-react';

const AdvertiserBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Nationwide Reach",
      description: "Our distribution network spans all 50 states, putting your brand in homes across America."
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Sustainable Materials",
      description: "100% recycled and recyclable packaging that aligns with eco-conscious brand values."
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Creative Flexibility",
      description: "Full-color, edge-to-edge printing with custom shapes and designs available."
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Hyper-Physical Brand Recall",
      description: "Tangible advertisements create 35% higher recall than digital-only impressions."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Brands Choose ApexAd</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-background/40 border border-text/10 p-8 rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-text-secondary mb-8">
            Join the brands that are breaking through the digital noise with physical advertising experiences.
          </p>
          <button className="px-8 py-4 bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-all transform hover:scale-105">
            Learn More About Our Process
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertiserBenefits; 