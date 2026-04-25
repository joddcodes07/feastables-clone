import React from 'react';

const EthicalSourcing = () => {
  return (
    <div className="flex flex-col w-full bg-[#a2ebff]">
      {/* Hero Section */}
      <div 
        className="w-full h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://feastables.com/cdn/shop/files/EthicalSourcing-Hero-WebContent.jpg?v=1748627990&width=3200')" }}
      >
        {/* Background image contains the text */}
      </div>

      {/* Mission Section */}
      <div className="relative w-full py-20 px-4 flex flex-col md:flex-row items-center justify-center overflow-hidden gap-8 md:gap-0">
        
        {/* Left Images (Desktop Absolute, Mobile Relative) */}
        <div className="md:absolute md:left-4 lg:left-12 md:top-1/2 md:-translate-y-1/2 z-20 flex flex-col items-center gap-4">
           {/* You provided the same image link twice, so rendering it once with the tilted styling. */}
           <img 
             src="https://feastables.com/cdn/shop/files/Feastables-Milk-Crunch-35g_35e67c75-c4bd-41d7-afe3-167280e901ea.png?v=1748373872&width=400" 
             alt="Milk Crunch" 
             className="w-40 md:w-56 transform -rotate-12 drop-shadow-xl hover:scale-105 transition-transform"
           />
        </div>

        {/* Center Blue Box */}
        <div className="bg-[#0096ff] border-[4px] border-black rounded-xl p-8 md:p-12 max-w-4xl text-white text-center shadow-[6px_6px_0px_rgba(0,0,0,1)] relative z-10 transform md:-rotate-1">
          <h2 className="text-3xl md:text-[42px] leading-tight font-black uppercase mb-6 tracking-wide drop-shadow-md">
            WE'RE ON A MISSION TO END CHILD<br className="hidden md:block" /> LABOR IN THE COCOA INDUSTRY
          </h2>
          <p className="text-lg md:text-2xl font-bold italic leading-snug drop-shadow-sm px-4">
            At Feastables, ethical sourcing is at our core.<br className="hidden md:block" />
            Through our three pillars, we help move kids out<br className="hidden md:block" />
            of cocoa fields and into classrooms—driving our<br className="hidden md:block" />
            mission to eradicate child labor in chocolate.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:absolute md:right-4 lg:right-12 md:top-1/2 md:-translate-y-1/2 md:translate-y-10 z-20">
          <img 
            src="https://feastables.com/cdn/shop/files/ethicalsourcing-fairtrade-logo.png?v=1751303290&width=334" 
            alt="Fairtrade" 
            className="w-40 md:w-64 drop-shadow-2xl hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default EthicalSourcing;
