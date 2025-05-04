const BehindDesign = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white/80  relative overflow-hidden">
      {/* Background Elements */}

      <div className="container mx-auto padding-10">
        <div className="text-center mb-16">
          <h2 className="font-rozha text-3xl md:text-4xl font-bold mb-4">
            Behind The <span className="text-primary">Design</span>
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            Discover how we craft each design with Bengali heritage and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <div className="w-full aspect-square bg-white rounded-xl overflow-hidden shadow-lg p-4">
              
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-rozha text-2xl font-bold text-primary">Our Creative Process</h3>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10  flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Understanding Your Story</h4>
                  <p className="text-gray-600">We begin by learning about your celebration, needs, and preferences, ensuring each design is uniquely yours.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Research & Inspiration</h4>
                  <p className="text-gray-600">We dive into traditional Bengali art forms, from alpona and kantha to terracotta, finding elements that match your vision.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10  flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Handcrafted Sketching</h4>
                  <p className="text-gray-600">Our artists create initial sketches by hand, blending traditional motifs with contemporary design elements.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10  rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Digital Refinement</h4>
                  <p className="text-gray-600">We transform handcrafted elements into polished digital designs, keeping the authenticity of Bengali artistry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Art Elements Showcase */}
{/*         <div className="mt-16 items-center"> */}
{/*           <h3 className="font-rozha text-2xl font-bold text-center mb-8">Bengali Art Elements We Use</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"> 
          <div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full  items-center justify-center mb-4">
              <img width="80" height="80" viewBox="0 0 100 100" style="remove-bg"src="/alpana.png" />
              </div>
              <h4 className="font-bold">Alpona</h4>
              <p className="text-sm text-gray-600">Traditional floor paintings</p>
            </div>
 */}
        

{/*             <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full  flex items-center justify-center mb-4">
                <img width="80" height="80" viewBox="0 0 100 100" src="/pngwing.com.png" />
              </div>
              <h4 className="font-bold">Shankha</h4>
              <p className="text-sm text-gray-600">Conch shell motifs</p>
            </div> */}

{/*             <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full  flex items-center justify-center mb-4">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M50,20 C60,30 70,20 80,30 C70,40 80,50 70,60 C60,70 50,60 40,70 C30,80 20,70 10,80 C20,70 10,60 20,50 C30,40 20,30 30,20 C40,10 50,20 50,20 Z"
                    fill="none" stroke="#e43e25" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="font-bold">Terracotta</h4>
              <p className="text-sm text-gray-600">Temple art patterns</p>
            </div> */}

{/*             <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full  flex items-center justify-center mb-4">
                <img width="80" height="80" viewBox="0 0 100 100" src="/lotus_png.png" />
              </div>
              <h4 className="font-bold">Lotus</h4>
              <p className="text-sm text-gray-600">Sacred floral patterns</p>
             </div> */}
{/*            </div> */}
        // </div>
      </div>
    </section>
  );
};

export default BehindDesign;
