import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-10 bg-background/95 border-t border-text/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary">ApexAd</h3>
              <p className="text-text-secondary mt-2">Turning packages into billboards.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-text-secondary">
                  123 Innovation Lane<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-text-secondary">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@apexad.com" className="text-text-secondary hover:text-primary transition-colors">
                  info@apexad.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-text-secondary mb-4">
              Subscribe to our newsletter for the latest updates on sustainable advertising.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-background/60 border border-text/10 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary flex-1"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary text-background font-medium rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-text/10 text-center text-text-secondary text-sm">
          <p>© 2025 ApexAd. All rights reserved.</p>
          
          {/* Future Add-ons Comments */}
          {/* 
            Future Add-ons:
            - Advertiser dashboard for campaign tracking
            - QR tracking on boxes
            - Analytics & heatmaps of box destinations
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 