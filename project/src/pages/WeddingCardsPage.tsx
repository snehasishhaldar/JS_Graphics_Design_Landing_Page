import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const weddingCards = [
  {
    id: 1,
    title: "Royal Bengali Wedding",
    image: "https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg",
    description: "Luxurious design with traditional motifs",
    price: "₹4,500"
  },
  {
    id: 2,
    title: "Modern Minimalist",
    image: "https://images.pexels.com/photos/6044272/pexels-photo-6044272.jpeg",
    description: "Contemporary design with subtle Bengali elements",
    price: "₹3,500"
  },
  {
    id: 3,
    title: "Traditional Elegance",
    image: "https://images.pexels.com/photos/6044239/pexels-photo-6044239.jpeg",
    description: "Classic Bengali wedding card design",
    price: "₹5,000"
  }
];

const WeddingCardsPage: React.FC = () => {
  return (
    <div className="py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-karma font-bold text-dark mb-4">
            Wedding Card <span className="text-primary">Collection</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Explore our exclusive collection of wedding invitation designs that blend
            Bengali traditions with contemporary aesthetics.
          </p>
          <Link 
            to="/invitations"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            View Other Invitations <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingCards.map((card) => (
            <div 
              key={card.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-karma font-bold text-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{card.price}</span>
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

export default WeddingCardsPage;