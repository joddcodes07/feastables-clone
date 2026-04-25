import React, { useEffect, useState } from 'react';

const StoryIntro = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when user scrolls down a bit
  useEffect(() => {
    const handleScroll = () => {
      // If we've scrolled past 200px from the top, trigger the intro animation
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };
    
    // Check initially in case the user reloads the page halfway down
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full py-32 px-6 flex items-center justify-center overflow-hidden border-b-4 border-black">
      {/* Expanding Radial Background */}
      {/* We use inline styles and template literals to conditionally apply classes based on the 'isVisible' state */}
      <div 
        className={`absolute inset-0 bg-[#ff3b8d] transition-transform duration-1000 ease-out origin-center ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ borderRadius: '50%' }}
      ></div>
      
      {/* Background fill that fades in to cover the gaps of the circle */}
      <div 
        className={`absolute inset-0 bg-[#ff3b8d] transition-opacity duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Content Container */}
      <div 
        className={`relative z-10 max-w-4xl text-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-6">
          Feastables began as a fun, better-for-you snack brand
        </h2>
        <p className="text-xl md:text-3xl font-bold text-white leading-snug">
          inspired by MrBeast's journey with Crohn's and his mission to make great-tasting, accessible snacks.
        </p>
      </div>
    </section>
  );
};

export default StoryIntro;
