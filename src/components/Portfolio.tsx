import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Invitation Card",
    category: "invitation",
    image: "/Invitation_Card.jpg",
    description: "Traditional invitation design with modern elements",
  },
  {
    id: 2,
    title: "Boutique Clothing Brand",
    category: "branding",
    image: "https://images.pexels.com/photos/6044272/pexels-photo-6044272.jpeg",
    description: "Complete branding solution for a Bengali clothing line",
  },
  {
    id: 3,
    title: "Bengali Restaurant Menu",
    category: "branding",
    image: "/Bengali_Menu.png",
    description: "Menu design with traditional Bengali motifs",
  },
  {
    id: 4,
    title: "Wedding Invitation Suite",
    category: "invitation",
    image: "https://images.pexels.com/photos/6044207/pexels-photo-6044207.jpeg",
    description: "Elegant wedding invitation with Bengali cultural elements",
  },
  {
    id: 5,
    title: "Festival Poster Design",
    category: "poster",
    image: "https://images.pexels.com/photos/6044257/pexels-photo-6044257.jpeg",
    description: "Vibrant poster design for cultural festival",
  },
  {
    id: 6,
    title: "Corporate Identity Package",
    category: "branding",
    image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
    description: "Full branding package with business cards and letterheads",
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeItem, setActiveItem] = useState<number | null>(null);
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-karma font-bold text-dark mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Explore our collection of designs that blend traditional Bengali aesthetics with modern
            sensibilities for various brands and occasions.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {['all', 'branding', 'invitation', 'poster'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-baloo transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Border overlay with pattern */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 rounded-xl pointer-events-none">
                <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-primary rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent p-6 flex flex-col justify-end transform transition-all duration-300 ${
                activeItem === item.id ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}>
                <span className="text-xs uppercase tracking-wider text-primary bg-white/90 rounded-full px-3 py-1 mb-2 inline-block w-fit">
                  {item.category}
                </span>
                <h3 className="text-xl font-karma font-bold text-white mb-2">{item.title}</h3>
                <p className="text-off-white text-sm mb-3">{item.description}</p>
                <a 
                  href="#" 
                  className="flex items-center font-baloo text-white hover:text-accent transition-colors w-fit"
                >
                  View Details <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-baloo transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
