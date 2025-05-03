import React from 'react';
import { Palette, FileText, Sparkles, Image, PenTool } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const serviceIcons = {
  "Brand Identity": <Palette size={32} className="text-primary" />,
  "Wedding Invitations": <Sparkles size={32} className="text-primary" />,
  "Event Collateral": <FileText size={32} className="text-primary" />,
  "Packaging Design": <Image size={32} className="text-primary" />,
  "Illustration": <PenTool size={32} className="text-primary" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-off-white to-off-white-dark opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-md"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-karma font-bold text-dark mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore our range of design services tailored to bring Bengali-inspired aesthetics to your brand and special occasions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/80 rounded-xl shadow-lg p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="relative p-4">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary/30 rounded-tl-xl transition-all duration-300 group-hover:border-primary/60"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary/30 rounded-br-xl transition-all duration-300 group-hover:border-primary/60"></div>
                
                <div className="mb-6 flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
                    {serviceIcons[service.title as keyof typeof serviceIcons]}
                  </div>
                  <h3 className="text-xl md:text-2xl font-karma font-bold text-dark mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 group-hover:text-primary transition-colors">
                      <span className="h-2 w-2 rounded-full bg-accent mr-2 group-hover:scale-125 transition-transform"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 rounded-full text-primary border-2 border-primary font-baloo hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Need a custom service tailored to your specific requirements?
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-baloo py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;