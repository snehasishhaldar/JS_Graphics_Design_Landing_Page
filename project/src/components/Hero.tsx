import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Simulate alpona pattern animation
    const pattern = document.getElementById('alpona-pattern');
    if (pattern) {
      pattern.classList.add('animate-draw');
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-off-white to-off-white-dark overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[32rem] md:h-[32rem] bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div id="alpona-pattern" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 bg-[url('https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg')] bg-no-repeat bg-center bg-contain"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <span className="inline-block px-4 py-1 mb-4 bg-accent/10 text-accent rounded-full font-baloo">
                Graphic Design & Branding
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-karma font-bold text-dark mb-4 leading-tight">
                Designs Rooted in <span className="text-primary relative">
                  Culture
                  <span className="absolute bottom-1 left-0 h-1 w-full bg-accent/30"></span>
                </span>, Crafted with <span className="text-primary">Passion</span>
              </h1>
              <p className="text-gray-700 text-lg mb-8 max-w-xl">
                We blend traditional Bengali aesthetics with modern design principles to create
                stunning visuals for your brand, events, and celebrations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary-dark text-white font-baloo rounded-full py-3 px-8 transition-colors flex items-center">
                  View Portfolio
                  <ChevronRight size={18} className="ml-1" />
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary/5 font-baloo rounded-full py-3 px-8 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative rounded-tl-[100px] rounded-br-[100px] overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlk-SxxixAkEj7QhS8KdYk-LfMsVQZo_0sNwLE_Rw6D23IbnMc" 
                alt="Bengali-inspired design work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-off-white/30 rounded-tl-[100px] rounded-br-[100px]"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-accent/10 rounded-tl-[30px] rounded-br-[30px] animate-float"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary/20 rounded-full animate-float-delay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;