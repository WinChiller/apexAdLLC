import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Truck, Globe } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload size={48} className="text-primary" />,
      title: "Upload your ad or let our team design it",
      description: "Share your brand vision or work with our creative team to design the perfect packaging advertisement.",
    },
    {
      icon: <Truck size={48} className="text-primary" />,
      title: "We print and ship your message on thousands of boxes",
      description: "Your designs are printed on premium cardboard packaging and distributed through our nationwide network.",
    },
    {
      icon: <Globe size={48} className="text-primary" />,
      title: "Your brand gets seen nationwide in homes, stores, and hands",
      description: "Real people interact with your brand in physical spaces, creating lasting impressions and higher recall.",
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-background/40 border border-text/10 p-8 rounded-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
              <div className="w-16 h-16 rounded-full bg-background/50 flex items-center justify-center border border-primary/30 text-2xl font-bold mt-6">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 