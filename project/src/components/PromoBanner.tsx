import React, { useEffect, useRef } from 'react';
import { Gift } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const PromoBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const banner = bannerRef.current;
      if (!banner) return;
      
      const rect = banner.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        banner.classList.add('animate-banner-glow');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-16 px-4 overflow-hidden">
      <div 
        ref={bannerRef}
        className="relative mx-auto max-w-5xl bg-gradient-to-r from-primary/90 to-primary rounded-xl md:rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
      >
        {/* Decorative elements inspired by pandal arch */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse delay-150"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg')] bg-repeat opacity-5"></div>
        
        <div className="relative py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Gift size={24} className="text-off-white mr-2 animate-bounce" />
              <span className="font-baloo text-off-white text-lg">Special Offer</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-karma font-bold text-white mb-4 leading-tight">
              {siteConfig.promoOffer.title}
            </h3>
            <p className="text-off-white/90 max-w-md">
              {siteConfig.promoOffer.description}
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white text-primary text-center px-6 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <span className="block text-sm font-medium mb-1">Use Code</span>
              <span className="block text-2xl font-baloo font-bold tracking-wider border-dashed border-2 border-primary/30 px-4 py-2 rounded">
                {siteConfig.promoOffer.code}
              </span>
            </div>
            <button className="mt-6 bg-accent hover:bg-accent-dark text-white font-baloo py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;