import React, { useEffect, useState, useRef } from 'react';

const StoryCardsBg = () => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Trigger the first 2 lines when the section scrolls into view
      if (rect.top < window.innerHeight - 200) {
        setShowLine1(true);
      } else {
        setShowLine1(false);
      }

      // Trigger the 3rd and 4th lines when scrolled a bit more
      if (rect.top < window.innerHeight - 450) {
        setShowLine2(true);
      } else {
        setShowLine2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Sticky background with 4px top border for separation
    <section ref={sectionRef} className="w-full sticky top-0 h-screen flex flex-col z-0 border-t-[4px] border-black overflow-hidden bg-[#2bafe5]">

      <img
        src="https://feastables.com/cdn/shop/files/aboutus-storycards-bg-web.png?v=1752096299&width=2560"
        alt="Feastables Story Cards Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* The Overlaid Text Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-end pr-[2%] md:pr-[5%] pt-[10%]">

        <div className="max-w-5xl flex flex-col items-center">

          {/* First 2 lines with a smooth fade and slide up animation */}
          <div className={`text-center transition-all duration-700 ease-out ${showLine1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter"
              style={{
                color: '#ff2773',
                textShadow: '-4px 4px 0px #000'
              }}
            >
              Feastables began as a fun,
            </h2>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter mb-6"
              style={{
                color: '#ffffff',
                textShadow: '-4px 4px 0px #000'
              }}
            >
              better-for-you snack brand
            </h2>
          </div>

          {/* 3rd and 4th lines with the same smooth animation */}
          <p
            className={`text-sm md:text-lg lg:text-xl font-bold text-black text-center transition-all duration-700 ease-out ${showLine2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            inspired by MrBeast's journey with Crohn's and his<br />mission to make great-tasting, accessible snacks.
          </p>

        </div>
      </div>
    </section>
  );
};

export default StoryCardsBg;
