import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import PromoBanner from '../components/PromoBanner';
import Services from '../components/Services';
import BehindDesign from '../components/BehindDesign';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <PromoBanner />
      <Services />
       <BehindDesign />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
