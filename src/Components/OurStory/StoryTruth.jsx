import React, { useEffect, useState } from 'react';

const StoryTruth = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect for the floating cocoa pods
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full py-32 px-6 bg-[#3a1c61] text-white overflow-hidden border-b-4 border-black">
      
      {/* Background Floating Elements (Cocoa Pods Placeholders) */}
      <div 
        className="absolute left-[-5%] top-[20%] w-32 h-48 bg-[#522988] rounded-full opacity-60 blur-md transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.15}px) rotate(45deg)` }}
      ></div>
      
      <div 
        className="absolute right-[5%] bottom-[10%] w-40 h-56 bg-[#251042] rounded-full opacity-60 blur-md transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.25}px) rotate(-30deg)` }}
      ></div>

      <div 
        className="absolute left-[20%] bottom-[-10%] w-24 h-32 bg-[#4a227c] rounded-full opacity-50 blur-sm transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.1}px) rotate(15deg)` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h4 className="text-[#a475e4] font-black text-xl md:text-2xl mb-4 tracking-widest uppercase">
          Along the way we uncovered
        </h4>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-8" style={{ textShadow: '4px 4px 0px #000' }}>
          The Hard Truth Behind<br/>The Cocoa Industry
        </h2>
        
        <p className="text-xl md:text-3xl font-bold leading-snug mx-auto max-w-3xl">
          and how cocoa is farmed in some regions. 1.5 million kids in child labor, widespread poverty, and systemic injustice.
        </p>
      </div>
      
    </section>
  );
};

export default StoryTruth;
