import React from 'react';

const StoryCard = () => {
  return (
    // This section is relative and z-10 so it scrolls OVER the sticky background
    <section className="relative z-10 w-full flex justify-center py-24 pb-48">
      {/* The big pink card */}
      <div className="w-[95%] max-w-6xl bg-[#f8a5c2] rounded-[40px] border-4 border-black p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
        
        {/* Decorative background elements (floating chocolates) */}
        <div className="absolute top-10 left-10 w-24 md:w-40 opacity-90 transform -rotate-12">
          {/* Placeholder for Chocolate Sea Salt */}
          <div className="w-full aspect-[1/2] bg-[#f28e2b] border-4 border-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold rotate-90 whitespace-nowrap text-xs md:text-sm">SEA SALT</span>
          </div>
        </div>
        
        <div className="absolute top-20 right-10 w-24 md:w-48 opacity-90 transform rotate-12">
          {/* Placeholder for Crunch Bar */}
          <div className="w-full aspect-[1/2] bg-[#e05263] border-4 border-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold rotate-90 whitespace-nowrap text-xs md:text-sm">CRUNCH</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h4 className="text-black font-black text-xl md:text-3xl mb-4 tracking-widest uppercase">
            Our First Launch
          </h4>
          
          {/* Main Title with Pink Fill, White Stroke, and Black Shadow */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-8" style={{ color: '#f8a5c2', WebkitTextStroke: '2px black', textShadow: '4px 4px 0px #000' }}>
            The MrBeast Bar, wasn't<br/>just a chocolate bar
          </h2>
          
          <p className="text-xl md:text-3xl font-bold text-black leading-snug">
            It was a flavor-packed adventure, complete with gamified experiences, fan engagement, and over-the-top stunts.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StoryCard;
