import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Heart, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-karma font-bold mb-6 flex items-center">
              <span className="text-accent">Trady</span>Bong
            </h3>
            <p className="text-gray-300 mb-6">
              Blending Bengali traditions with modern design aesthetics to create unique visual experiences for brands and special occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-dark-light hover:bg-primary transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-dark-light hover:bg-primary transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-dark-light hover:bg-primary transition-colors p-2 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-dark-light hover:bg-primary transition-colors p-2 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-baloo font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-baloo font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Brand Identity', 'Wedding Invitations', 'Event Collateral', 'Packaging Design', 'Illustration'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-baloo font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates, news, and offers.
            </p>
            <form className="mb-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-dark-light text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent-dark text-white p-1.5 rounded-md transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        {/* Divider with pattern */}
        <div className="relative py-4 mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-dark px-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
            </span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p className="mb-2">
            © {new Date().getFullYear()} TradyBong. All rights reserved.
          </p>
              <p className="mb-2">
           A Brand of JS Group
          </p>
          <p className="text-sm flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-accent" /> in Bangla, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
