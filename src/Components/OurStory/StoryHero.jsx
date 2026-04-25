import React, { useEffect, useState } from 'react';

const StoryHero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for a subtle parallax/floating effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-[#93d2f3] overflow-hidden flex flex-col items-center justify-center pt-20 border-b-4 border-black">
      {/* Background Graphic/Texture Placeholder */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '20px 20px' }}></div>
      
      {/* Main Title */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter" style={{ textShadow: '4px 4px 0px #fff' }}>
          Our Cocoa
          <br />
          Story
        </h1>
      </div>

      {/* Floating Chocolate Bars (Parallax Effect) */}
      {/* We use inline styles with the scrollY state to create a simple parallax scroll effect */}
      <div 
        className="absolute left-[10%] top-[30%] w-24 md:w-40 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.2}px) rotate(-15deg)` }}
      >
        {/* Placeholder for Chocolate Bar Image */}
        <div className="w-full aspect-[1/2] bg-[#2a1711] border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] flex items-center justify-center">
          <span className="text-white font-bold rotate-90 whitespace-nowrap">MILK CHOCOLATE</span>
        </div>
      </div>

      <div 
        className="absolute right-[10%] top-[40%] w-32 md:w-48 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.4}px) rotate(20deg)` }}
      >
         {/* Placeholder for Chocolate Bar Image */}
         <div className="w-full aspect-[1/2] bg-[#f93822] border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] flex items-center justify-center">
          <span className="text-white font-bold rotate-90 whitespace-nowrap">PEANUT BUTTER</span>
        </div>
      </div>
      
      <div 
        className="absolute left-[30%] bottom-[-10%] w-40 md:w-56 transition-transform duration-100 ease-out z-20"
        style={{ transform: `translateY(${scrollY * -0.6}px) rotate(-5deg)` }}
      >
         {/* Placeholder for Chocolate Bar Image */}
         <div className="w-full aspect-[1/2] bg-[#00529b] border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] flex items-center justify-center">
          <span className="text-white font-bold rotate-90 whitespace-nowrap">ALMOND</span>
        </div>
      </div>
    </section>
  );
};

export default StoryHero;
