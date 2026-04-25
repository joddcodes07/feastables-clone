import React, { useEffect, useState, useRef } from 'react';
import blueBurstBg from '../../images/blue-burst.png';
import card4Bg from '../../images/4thcard.png';
import paperBg from '../../images/paperbg.png';

const StoryStackedCards = () => {
  const [showImages, setShowImages] = useState(false);
  const [showImages2, setShowImages2] = useState(false);
  const [showImages3, setShowImages3] = useState(false);
  const [showImages4, setShowImages4] = useState(false);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!card1Ref.current) return;
      const rect1 = card1Ref.current.getBoundingClientRect();
      // Trigger the image fade-in when the card is well within the viewport
      if (rect1.top < window.innerHeight - 300) {
        setShowImages(true);
      } else {
        setShowImages(false);
      }

      if (card2Ref.current) {
        const rect2 = card2Ref.current.getBoundingClientRect();
        if (rect2.top < window.innerHeight - 300) {
          setShowImages2(true);
        } else {
          setShowImages2(false);
        }
      }

      if (card3Ref.current) {
        const rect3 = card3Ref.current.getBoundingClientRect();
        if (rect3.top < window.innerHeight - 300) {
          setShowImages3(true);
        } else {
          setShowImages3(false);
        }
      }

      if (card4Ref.current) {
        const rect4 = card4Ref.current.getBoundingClientRect();
        if (rect4.top < window.innerHeight - 300) {
          setShowImages4(true);
        } else {
          setShowImages4(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full z-10">
      <div className="w-full px-4 md:px-8">
        {/* CARD 1 */}
        <div className="sticky top-10 w-full flex justify-center mb-[40vh] z-10 transition-transform duration-300">
        <div 
          ref={card1Ref}
          className="w-[calc(100%-20px)] h-[85vh] min-h-[600px] max-h-[800px] rounded-[40px] border-4 border-black p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
          style={{ background: 'linear-gradient(to right, #8ddcf9 15%, #f8a5c2 15%, #f8a5c2 85%, #8ddcf9 85%)' }}
        >
          {/* Animated Images */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/abouts-slides-1-oldbar.png?v=1752181128&width=500" 
            alt="Sea Salt Bar"
            className={`absolute top-10 left-[4%] w-40 md:w-64 lg:w-80 transform -rotate-12 z-0 transition-all duration-1000 ease-out ${showImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          />
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/abouts-slides-1-oldbar2.png?v=1752181301&width=450" 
            alt="Crunch Bar"
            className={`absolute top-10 right-4 w-40 md:w-64 lg:w-80 transform rotate-12 z-0 transition-all duration-1000 delay-150 ease-out ${showImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          />
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/abouts-slides-1-oldbar3.png?v=1752251333" 
            alt="Share Bar"
            className={`absolute -bottom-16 right-[15%] w-40 md:w-64 lg:w-80 transform rotate-[20deg] z-0 transition-all duration-1000 delay-300 ease-out ${showImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          />
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-1-shape1.png?v=1751397606&width=140" 
            alt="Decorative Shape"
            className={`absolute bottom-10 left-[20%] w-24 md:w-32 lg:w-40 transform -rotate-12 z-0 transition-all duration-1000 delay-450 ease-out ${showImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          />

          <div className={`relative z-10 max-w-4xl mx-auto flex flex-col items-center bg-[#f8a5c2]/0 p-4 rounded-2xl transition-all duration-1000 delay-[600ms] ease-out ${showImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* 1. Small text in black, no outline, simple bold */}
            <h4 className="font-bold text-lg md:text-2xl mb-4 tracking-widest uppercase text-black">
              Our First Launch
            </h4>
            
            {/* 2. Large text in vibrant pink */}
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter"
              style={{ color: '#ff2773', textShadow: '-4px 4px 0px #000' }}
            >
              The MrBeast Bar, wasn't
            </h2>
            
            {/* 3. Even larger text in white */}
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter mb-8"
              style={{ color: '#ffffff', textShadow: '-4px 4px 0px #000' }}
            >
              just a chocolate bar
            </h2>
            
            {/* 4. Paragraph in solid black, no outline, simple bold */}
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-snug max-w-3xl">
              It was a flavor-packed adventure, complete with gamified experiences, fan engagement, and over-the-top stunts.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="sticky top-10 w-full flex justify-center mb-[40vh] z-20 transition-transform duration-300">
        <div 
          ref={card2Ref}
          className="w-[calc(100%-20px)] h-[85vh] min-h-[600px] max-h-[800px] rounded-[40px] border-4 border-black p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
          style={{ backgroundImage: `url(${blueBurstBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Animated Images */}
          {/* Image 6: Chocolate Chunk (slides from top-left behind image 1) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-3-chunk1.png?v=1751404861&width=212"
            alt="Chocolate Chunk Behind"
            className={`absolute top-0 left-0 w-24 md:w-36 lg:w-48 transform -rotate-[20deg] z-10 transition-all duration-1000 delay-200 ease-out ${showImages2 ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-[100%] -translate-y-[100%]'}`}
          />
          {/* Image 1: Milk Chocolate (slides from top-left) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-3-newbar.png?v=1751400309&width=600"
            alt="Milk Chocolate Bar"
            className={`absolute top-10 left-[10%] w-48 md:w-72 lg:w-96 transform -rotate-12 z-20 transition-all duration-1000 ease-out ${showImages2 ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-[100%] -translate-y-[100%]'}`}
          />
          {/* Image 2: Cookies & Creme (slides from top-right) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-3-newbar2.png?v=1751401356&width=600"
            alt="Cookies and Creme Bar"
            className={`absolute top-10 right-[10%] w-48 md:w-72 lg:w-96 transform rotate-12 z-20 transition-all duration-1000 delay-100 ease-out ${showImages2 ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[100%] -translate-y-[100%]'}`}
          />
          {/* Image 3: Chocolate Chunk (slides from bottom-left) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-3-chunk1.png?v=1751404861&width=212"
            alt="Chocolate Chunk"
            className={`absolute bottom-20 left-[15%] w-32 md:w-40 lg:w-56 transform rotate-[25deg] z-20 transition-all duration-1000 delay-300 ease-out ${showImages2 ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-[100%] translate-y-[100%]'}`}
          />
          {/* Image 4: Peanut Butter Bar (slides from bottom-middle) */}
          <div className={`absolute -bottom-10 w-full flex justify-center z-20 transition-all duration-1000 delay-400 ease-out ${showImages2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'}`}>
            <img 
              src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-3-newbar3.png?v=1751401497&width=600"
              alt="Peanut Butter Bar"
              className="w-56 md:w-80 lg:w-[400px] transform rotate-[-5deg]"
            />
          </div>
          {/* Image 5: Peanut Butter splash (slides from bottom-right) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/abouts-slides-3-pbexp.png?v=1752176891&width=350"
            alt="Peanut Butter Splash"
            className={`absolute bottom-10 right-[10%] w-40 md:w-56 lg:w-72 transform rotate-12 z-20 transition-all duration-1000 delay-500 ease-out ${showImages2 ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[100%] translate-y-[100%]'}`}
          />

          <div className={`relative z-30 max-w-4xl mx-auto flex flex-col items-center bg-transparent p-4 rounded-2xl transition-all duration-1000 delay-[700ms] ease-out ${showImages2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h4 className="font-bold text-lg md:text-2xl mb-4 tracking-widest uppercase text-black">
              As we grew, so did
            </h4>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter"
              style={{ color: '#ff2773', textShadow: '-4px 4px 0px #000' }}
            >
              Our Standards &
            </h2>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter mb-8"
              style={{ color: '#ffffff', textShadow: '-4px 4px 0px #000' }}
            >
              Our Responsibility
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-bold text-black leading-snug max-w-xl">
              for what we make and what we stand for. We reformulated our recipes for an even bigger, bolder flavor and redesigned our packaging and bars to match.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="sticky top-10 w-full flex justify-center mb-[40vh] z-30 transition-transform duration-300">
        <div 
          ref={card3Ref}
          className="w-[calc(100%-20px)] h-[85vh] min-h-[600px] max-h-[800px] rounded-[40px] border-4 border-black p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
          style={{ backgroundImage: `url(${blueBurstBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Animated Cocopod Images */}
          {/* Image 2 (Right Half - Underneath) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-4-cocopod2.png?v=1751405547&width=550"
            alt="Cocopod Right Half"
            className={`absolute top-1/2 left-1/2 w-32 md:w-48 lg:w-72 transition-all duration-[1500ms] ease-in-out z-30 ${showImages3 ? 'translate-x-[50%] md:translate-x-[100%] lg:translate-x-[150%] -translate-y-1/2 rotate-[15deg]' : '-translate-x-1/2 -translate-y-1/2 rotate-[15deg]'}`}
          />
          {/* Image 1 (Left Half - On Top) */}
          <img 
            src="https://cdn.shopify.com/s/files/1/0551/6060/2784/files/aboutus-slides-4-cocopod.png?v=1751405520&width=550"
            alt="Cocopod Left Half"
            className={`absolute top-1/2 left-1/2 w-32 md:w-48 lg:w-72 transition-all duration-[1500ms] ease-in-out z-40 ${showImages3 ? '-translate-x-[150%] md:-translate-x-[200%] lg:-translate-x-[250%] -translate-y-1/2 -rotate-[15deg]' : '-translate-x-1/2 -translate-y-1/2 rotate-[25deg]'}`}
          />

          {/* Text Container (Fades in when pods separate) */}
          <div className={`relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center bg-transparent p-4 transition-all duration-1000 delay-[800ms] ${showImages3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
            <h4 className="font-bold text-lg md:text-2xl mb-2 tracking-widest uppercase text-black">
              Along the way we uncovered
            </h4>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter"
              style={{ color: '#ff2773', textShadow: '-4px 4px 0px #000' }}
            >
              The Hard Truth Behind
            </h2>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter mb-6"
              style={{ color: '#ffffff', textShadow: '-4px 4px 0px #000' }}
            >
              The Cocoa Industry
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-bold text-black leading-snug max-w-xl">
              and how cocoa is farmed in some regions. 1.5 million kids in child labor, widespread poverty, and systemic injustice.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="sticky top-10 w-full flex justify-center mb-[80vh] z-40 transition-transform duration-300">
        <div 
          ref={card4Ref}
          className="w-[calc(100%-20px)] h-[85vh] min-h-[600px] max-h-[800px] bg-[#c084fc] rounded-[40px] border-4 border-black relative overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
          style={{ backgroundImage: `url(${card4Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className={`absolute top-0 left-0 w-full md:w-[55%] h-full flex flex-col justify-center items-start p-8 md:p-16 lg:p-24 text-left transition-all duration-1000 ease-out ${showImages4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter"
              style={{ color: '#ff2773', textShadow: '-4px 4px 0px #000' }}
            >
              We knew we had
            </h2>
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tighter mb-4"
              style={{ color: '#ffffff', textShadow: '-4px 4px 0px #000' }}
            >
              To take a stand
            </h2>
            <p className="text-sm md:text-base lg:text-xl font-bold text-black leading-snug">
              And change chocolate for good
            </p>
          </div>
        </div>
      </div>
      </div> {/* End of cards wrapper */}

      {/* Simple Black Separation Bar */}
      <div className="w-full border-t-4 border-black relative z-50 mt-[20px]"></div>

      {/* Paper Background Section */}
      <div 
        className="w-full min-h-[100vh] relative z-40"
        style={{ backgroundImage: `url(${paperBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Content for paperbg section will go here */}
      </div>
    </div>
  );
};

export default StoryStackedCards;
