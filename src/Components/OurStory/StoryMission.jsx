import React from 'react';

const StoryMission = () => {
  return (
    <section className="relative w-full bg-[#f4f1ea] text-black overflow-hidden pb-20">
      
      {/* Torn Paper Edge effect (CSS only simulation) */}
      <div className="w-full h-8 bg-[#3a1c61] border-b-4 border-black" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>

      <div className="max-w-6xl mx-auto px-6 pt-24 flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-16 tracking-tighter" style={{ textShadow: '3px 3px 0px #fff' }}>
          We knew we had <br className="hidden md:block"/>
          to take a stand <br className="hidden md:block"/>
          and change <br className="hidden md:block"/>
          <span className="text-[#e05263]">chocolate for good</span>
        </h2>

        {/* Scrapbook / Polaroid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full mt-8">
          
          {/* Text Content */}
          <div className="text-left space-y-6 md:pr-12">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-black">
              Eradicate child labor in the cocoa industry.
            </h3>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              Our cocoa is 100% Fairtrade certified. We pay farmers the living income reference price or the market price, whatever is higher! And we only partner with farms that actively protect children. And there’s more to come.
            </p>
            <p className="text-xl md:text-2xl font-bold leading-relaxed text-[#2b6cb0]">
              From chocolate bars to cups and beyond, every bite helps build a better future for the people behind it.
            </p>
          </div>

          {/* Polaroids / Images Container */}
          <div className="relative h-[400px] w-full flex justify-center items-center">
            
            {/* Polaroid 1 */}
            <div className="absolute top-0 right-10 w-48 md:w-64 bg-white p-4 pb-12 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] border-2 border-gray-200 transform rotate-6 hover:rotate-12 transition-transform duration-300 z-20">
              <div className="w-full aspect-square bg-[#7ebc89] flex items-center justify-center">
                <span className="font-bold text-white uppercase tracking-widest">Farmers</span>
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="absolute bottom-0 left-4 w-48 md:w-64 bg-white p-4 pb-12 shadow-[8px_8px_0px_rgba(0,0,0,0.2)] border-2 border-gray-200 transform -rotate-12 hover:-rotate-6 transition-transform duration-300 z-10">
              <div className="w-full aspect-square bg-[#eaaa54] flex items-center justify-center">
                <span className="font-bold text-white uppercase tracking-widest">Community</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StoryMission;
