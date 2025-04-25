import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const runtime = timestamp - startTimeRef.current;
      const relativeProgress = runtime / duration;

      if (runtime < duration) {
        const newCount = Math.round(end * relativeProgress);
        if (newCount !== countRef.current) {
          countRef.current = newCount;
          setCount(newCount);
        }
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const reset = () => {
      setCount(0);
      countRef.current = 0;
      startTimeRef.current = 0;
      frameRef.current = requestAnimationFrame(animate);
    };

    reset();

    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const WhyItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-background/95">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Works</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-text-secondary">
            Unlike digital ads that disappear in seconds, ApexAd puts your message into real hands. 
            Our boxes travel across the country — reaching doorsteps, counters, and storefronts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div 
            className="bg-background/40 border border-text/10 p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-5xl font-bold text-primary mb-4">
              {isVisible && <Counter end={10000} duration={2000} suffix="+" />}
            </h3>
            <p className="text-text-secondary">boxes shipped monthly</p>
          </motion.div>

          <motion.div 
            className="bg-background/40 border border-text/10 p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-5xl font-bold text-primary mb-4">
              {isVisible && <Counter end={92} duration={2000} suffix="%" />}
            </h3>
            <p className="text-text-secondary">of people recall brand logos seen on packaging</p>
          </motion.div>

          <motion.div 
            className="bg-background/40 border border-text/10 p-8 rounded-lg text-center md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-5xl font-bold text-primary mb-4">
              {isVisible && <Counter end={42} duration={2000} suffix="%" />}
            </h3>
            <p className="text-text-secondary">higher brand engagement than digital-only campaigns</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks; 