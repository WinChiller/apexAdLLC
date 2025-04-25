import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We saw a 34% lift in brand awareness after our ApexAd campaign.",
      name: "Jamie R.",
      title: "CMO of BeanBox"
    },
    {
      quote: "It was like a walking billboard. But smarter.",
      name: "Marco D.",
      title: "Indie Artist"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Advertisers Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-background/40 border border-text/10 p-8 rounded-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12" />
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                  <User className="w-12 h-12 text-text/60" />
                </div>
                <div className="flex-1">
                  <p className="text-xl italic text-text mb-6 relative z-10">{testimonial.quote}</p>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-text-secondary text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 p-8 border border-primary/30 rounded-lg bg-background/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Ready to see your brand on our boxes?</h3>
              <p className="text-text-secondary">Join our growing list of satisfied advertisers and see the difference physical advertising makes.</p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-all transform hover:scale-105">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 