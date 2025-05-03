
const BehindDesign = () => {
  return (
    <section id="process" className="py-16 md:py-24  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 kantha-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-bengali-gold/10 rounded-full filter blur-3xl"></div>
      <div className="absolute left-0 top-0 w-80 h-80 bg-bengali-soft-red/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto padding-10">
        <div className="text-center mb-16">
          <h2 className="font-rozha text-3xl md:text-4xl font-bold mb-4">
            Behind The <span className="text-primary">Design</span>
          </h2>
          <p className="text-bengali-gray max-w-2xl mx-auto">
            Discover how we craft each design with Bengali heritage and artistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <div className="w-full aspect-square bg-white rounded-xl overflow-hidden shadow-lg alpona-border p-4">
              <div className="h-full w-full bg-bengali-soft-red/10 rounded-lg flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Design Process Illustration */}
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                    <defs>
                      <pattern id="alpona" patternUnits="userSpaceOnUse" width="20" height="20">
                        <path d="M0,10 Q5,5 10,10 Q15,15 20,10" fill="none" stroke="#e43e25" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#alpona)" stroke="#e43e25" strokeWidth="1" />
                    <path d="M30,40 Q50,20 70,40 Q50,60 30,40 Z" fill="none" stroke="#e43e25" strokeWidth="1" />
                    <path d="M30,60 Q50,80 70,60 Q50,40 30,60 Z" fill="none" stroke="#e43e25" strokeWidth="1" />
                    <circle cx="50" cy="50" r="5" fill="#FFD700" />
                  </svg>
                  
                  {/* Animated Elements */}
                  <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-bengali-red/20 rounded-full animate-pulse-gentle"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-bengali-gold/30 rounded-full animate-pulse-gentle" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-5 -right-5 w-16 h-16 border-4 border-dotted border-bengali-gold/40 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-5 -left-5 w-12 h-12 border-4 border-dashed border-bengali-red/30 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }}></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-rozha text-2xl font-bold text-primary">Our Creative Process</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary-light/2 flex items-center justify-center shrink-0">
                  <span className="font-bold text-bengali-red">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Understanding Your Story</h4>
                  <p className="text-bengali-gray">We begin by learning about your celebration, needs, and preferences, ensuring each design is uniquely yours.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-bengali-soft-orange flex items-center justify-center shrink-0">
                  <span className="font-bold text-bengali-orange">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Research & Inspiration</h4>
                  <p className="text-bengali-gray">We dive into traditional Bengali art forms, from alpona and kantha to terracotta, finding elements that match your vision.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-bengali-gold/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-bengali-gold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Handcrafted Sketching</h4>
                  <p className="text-bengali-gray">Our artists create initial sketches by hand, blending traditional motifs with contemporary design elements.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-bengali-soft-red flex items-center justify-center shrink-0">
                  <span className="font-bold text-bengali-red">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Digital Refinement</h4>
                  <p className="text-bengali-gray">We transform handcrafted elements into polished digital designs, keeping the authenticity of Bengali artistry.</p>
                </div>
              </div>
            </div>
            
{/*             <Button className="bg-bengali-red hover:bg-bengali-deep-red text-white mt-4">
              Schedule a Design Consultation
            </Button> */}
          </div>
        </div>
        
        {/* Traditional Art Elements Showcase */}
        <div className="mt-16">
          <h3 className="font-rozha text-2xl font-bold text-center mb-8">Bengali Art Elements We Use</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bengali-soft-red/30 flex items-center justify-center mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M20,50 C20,30 40,20 50,20 C60,20 80,30 80,50 C80,70 60,80 50,80 C40,80 20,70 20,50 Z" 
                        fill="none" stroke="#e43e25" strokeWidth="2" />
                  <path d="M30,50 C30,35 40,30 50,30 C60,30 70,35 70,50 C70,65 60,70 50,70 C40,70 30,65 30,50 Z" 
                        fill="none" stroke="#e43e25" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="font-bold">Alpona</h4>
              <p className="text-sm text-bengali-gray">Traditional floor paintings</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bengali-soft-orange/30 flex items-center justify-center mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="#e43e25" strokeWidth="2" />
                  <path d="M40,40 L60,40 L60,60 L40,60 Z" fill="none" stroke="#e43e25" strokeWidth="1.5" />
                  <path d="M25,25 L35,35 M65,35 L75,25 M75,75 L65,65 M35,65 L25,75" stroke="#e43e25" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="font-bold">Kantha</h4>
              <p className="text-sm text-bengali-gray">Embroidery patterns</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bengali-gold/20 flex items-center justify-center mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#e43e25" strokeWidth="2" />
                  <path d="M50,20 L50,80 M20,50 L80,50" stroke="#e43e25" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="#FFD700" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="font-bold">Shankha</h4>
              <p className="text-sm text-bengali-gray">Conch shell motifs</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bengali-soft-red/30 flex items-center justify-center mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M50,20 C60,30 70,20 80,30 C70,40 80,50 70,60 C60,70 50,60 40,70 C30,80 20,70 10,80 C20,70 10,60 20,50 C30,40 20,30 30,20 C40,10 50,20 50,20 Z" 
                        fill="none" stroke="#e43e25" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="font-bold">Terracotta</h4>
              <p className="text-sm text-bengali-gray">Temple art patterns</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-bengali-soft-orange/30 flex items-center justify-center mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M40,80 C20,60 20,30 50,20 C80,30 80,60 60,80 C50,90 50,90 40,80 Z" 
                        fill="none" stroke="#e43e25" strokeWidth="2" />
                  <circle cx="50" cy="40" r="10" fill="#FFD700" fillOpacity="0.5" />
                </svg>
              </div>
              <h4 className="font-bold">Lotus</h4>
              <p className="text-sm text-bengali-gray">Sacred floral patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindDesign;
