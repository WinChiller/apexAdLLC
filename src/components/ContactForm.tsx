import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Thank you for your submission! We will be in touch shortly.');
    setFormData({
      name: '',
      company: '',
      email: '',
      budget: '',
      notes: ''
    });
  };

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto bg-background/40 border border-text/10 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to Launch Your Physical Ad Campaign?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/60 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/60 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/60 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Ad Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/60 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="Over $50,000">Over $50,000</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/60 border border-text/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your brand and advertising goals..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-all transform hover:scale-105"
                >
                  <span>Request Custom Quote</span>
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
            
            <p className="text-center text-text-secondary text-sm mt-8">
              We typically respond to quote requests within 1-2 business days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 