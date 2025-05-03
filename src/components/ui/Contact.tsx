import React from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-karma font-bold text-dark mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Have a project in mind? We'd love to hear from you and discuss how we can bring your ideas to life with our Bengali-inspired designs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info Section */}
              <div className="bg-primary p-8 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-karma text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8 text-off-white/90">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary-light p-3 rounded-full mr-4">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-baloo font-bold mb-1">Phone</h4>
                        <p className="text-off-white">{siteConfig.contact.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-light p-3 rounded-full mr-4">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-baloo font-bold mb-1">Email</h4>
                        <p className="text-off-white">{siteConfig.contact.email}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleWhatsAppClick}
                      className="flex items-center space-x-4 w-full bg-green-500 hover:bg-green-600 transition-colors rounded-lg p-4 animate-pulse hover:animate-none"
                    >
                      <div className="bg-green-600 p-3 rounded-full">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-baloo font-bold mb-1">WhatsApp</h4>
                        <p className="text-white">{siteConfig.contact.whatsapp}</p>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 border-4 border-accent rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 border-4 border-accent rounded-full transform -translate-x-20 translate-y-20"></div>
                </div>
              </div>
              
              {/* Contact Form Section */}
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-off-white/50 transition-all duration-300 group-hover:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-off-white/50 transition-all duration-300 group-hover:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-off-white/50 transition-all duration-300 group-hover:border-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-off-white/50 resize-none transition-all duration-300 group-hover:border-primary"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-primary hover:bg-primary-dark text-white font-baloo py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
                    >
                      Send Message
                      <Send size={16} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;