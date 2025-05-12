import React, { useState } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePopup: React.FC<QuotePopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Brand Identity',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Quote Request*%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Service: ${formData.service}%0A
Message: ${formData.message}`;

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg relative transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-karma font-bold text-dark mb-2">
            Request a <span className="text-primary">Quote</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll get back to you with a custom quote for your project.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-gray-700 font-medium mb-1">Service</label>
              <select
                id="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                {siteConfig.services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-baloo py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Send Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
