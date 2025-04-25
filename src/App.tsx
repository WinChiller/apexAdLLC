import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyItWorks from './components/WhyItWorks';
import AdvertiserBenefits from './components/AdvertiserBenefits';
import BoxMockups from './components/BoxMockups';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <WhyItWorks />
      <AdvertiserBenefits />
      <BoxMockups />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
