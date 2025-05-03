import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const invitationTemplates = [
  {
    id: 1,
    title: "Traditional Bengali Puja Invitation",
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
    description: "Elegant design with traditional alpona patterns",
    price: "₹2,500"
  },
  {
    id: 2,
    title: "Modern Durga Puja Card",
    image: "https://images.pexels.com/photos/6044237/pexels-photo-6044237.jpeg",
    description: "Contemporary take on traditional elements",
    price: "₹3,000"
  },
  {
    id: 3,
    title: "Minimalist Saraswati Puja",
    image: "https://images.pexels.com/photos/6044207/pexels-photo-6044207.jpeg",
    description: "Clean and modern design with subtle cultural touches",
    price: "₹2,000"
  }
];

const InvitationsPage: React.FC = () => {
  return (
    <div className="py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-karma font-bold text-dark mb-4">
            Invitation <span className="text-primary">Templates</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Choose from our collection of beautifully designed invitation templates
            for various occasions and celebrations.
          </p>
          <Link 
            to="/wedding-cards"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Looking for Wedding Cards? <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {invitationTemplates.map((template) => (
            <div 
              key={template.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-karma font-bold text-dark mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{template.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors">
                    Customize
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvitationsPage;