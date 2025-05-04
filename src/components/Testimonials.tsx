import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Subinoy Shaw",
    role: "Business Owner",
    image: "https://scontent.fixb1-2.fna.fbcdn.net/v/t39.30808-6/435489980_7709042919175961_2777700491240480625_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XmjenZNY7lYQ7kNvwECpXnJ&_nc_oc=AdmMblQXyGPQaRS_rTOhT6K0_tO6RMs9FKsXUa0zcOdCMZ7nPHVKshEX5B5VFjAxfeaKWa15dut9mEkm6boX0NL-&_nc_zt=23&_nc_ht=scontent.fixb1-2.fna&_nc_gid=47E4JUm5R32pWDFcJsBijw&oh=00_AfGJU5cUeMcOjqnxGFuX_USjcuTxTrh-wy9ZEKsMgKllzA&oe=681DC09C",
    text: "Thank You guys for your lovely work on my business cards and posters",
    rating: 5
  },
  {
    id: 2,
    name: "Lipi Saha",
    role: "Bride",
    image: "https://scontent.fixb1-2.fna.fbcdn.net/v/t39.30808-6/482031777_1732688857315390_8669828855342760191_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=L5YIvrJ9SigQ7kNvwF1kPwh&_nc_oc=Adngp7-PtRFaXEvhuqydDtYj_qclhghAWtQdHzNLhnQZnjU1ApXalq7B0nXRQ24makeoZhTuiCCs3svQokpb6gPE&_nc_zt=23&_nc_ht=scontent.fixb1-2.fna&_nc_gid=puGlRUHBS2H55eY9SI48rA&oh=00_AfG4Dz_eoX8Fb5RCYAg6wdTa7jEvoq2QChp4bveEBxhgxg&oe=681DD4B7",
    text: "Our Weddiing Invitation card done by them.. They Work is just awesome...we really liked the work.. The behaviour of them is also Mindblowing ... Thank You TradyBong ❤️",
    rating: 5
  },
  {
    id: 3,
    name: "Royal Event Managment and Wedding Planner",
    role: "Cultural Event Organizer",
    image: "/royalevm.jpg",
    text: "Currently We are working with TradyBong also.. they done our lot of works...grate Service",
    rating: 4
  },
  {
    id: 4,
    name: "Snehasish Haldar",
    role: "Founder of TradyBong",
    image: "/snehasishHaldar.jpg",
    text: "I am not a customer of TradyBong Guys... I am the Founder of TradyBong... You can get a chance to feature here.. just leave a feedback for us 😎..but try our service first 🤪 ... Love you guys...have a good day ✌️",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-karma font-bold text-dark mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Hear what our clients have to say about our design services and their experiences working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 md:flex hidden">
              <button 
                onClick={handlePrev}
                className="bg-white hover:bg-primary/10 text-primary p-3 rounded-full shadow-md"
                disabled={isAnimating}
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 md:flex hidden">
              <button 
                onClick={handleNext}
                className="bg-white hover:bg-primary/10 text-primary p-3 rounded-full shadow-md"
                disabled={isAnimating}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Testimonial Card */}
            <div 
              className={`bg-white rounded-xl p-6 md:p-10 shadow-lg transform transition-all duration-500 ${
                isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
              }`}
            >
              {/* Decorative border inspired by jute or handpainted borders */}
              <div className="absolute inset-0 border-4 border-dashed border-primary/10 rounded-xl pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 relative">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonials[currentIndex].rating ? "text-accent fill-accent" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-karma font-bold text-dark text-xl">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 md:hidden">
            <button 
              onClick={handlePrev}
              className="bg-white hover:bg-primary/10 text-primary p-3 rounded-full shadow-md"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white hover:bg-primary/10 text-primary p-3 rounded-full shadow-md"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
