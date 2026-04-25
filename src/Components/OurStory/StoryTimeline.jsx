import React, { useState, useEffect } from 'react';

const StoryTimeline = () => {
  const [activeSection, setActiveSection] = useState('old'); // 'old' or 'new'

  // We use a scroll listener to determine which text block is in view
  // to swap the sticky image
  useEffect(() => {
    const handleScroll = () => {
      // Very simple scroll threshold for the state change
      // In a real app, you might use IntersectionObserver, but this is simpler
      // and fits within basic React concepts.
      const timelineSection = document.getElementById('story-timeline');
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        // If the top of the section is more than halfway up the viewport, switch to 'new'
        if (rect.top < -300) {
          setActiveSection('new');
        } else {
          setActiveSection('old');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="story-timeline" className="w-full bg-[#fceea7] text-black border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12">
        
        {/* Sticky Visual Column */}
        <div className="md:w-1/2 relative h-[50vh] md:h-auto">
          <div className="sticky top-32 w-full aspect-square flex items-center justify-center p-8">
            {/* Visual Container */}
            <div className="w-full h-full relative border-4 border-black rounded-3xl bg-white shadow-[8px_8px_0px_#000] overflow-hidden">
              
              {/* Old Packaging Image Placeholder */}
              <div 
                className={`absolute inset-0 bg-[#e05263] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                  activeSection === 'old' ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <h3 className="text-4xl font-black text-white transform -rotate-12">MRBEAST BAR</h3>
                <p className="font-bold mt-4">Original Packaging</p>
              </div>

              {/* New Packaging Image Placeholder */}
              <div 
                className={`absolute inset-0 bg-[#2b6cb0] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                  activeSection === 'new' ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <h3 className="text-4xl font-black text-white transform -rotate-12">FEASTABLES</h3>
                <p className="font-bold mt-4 text-[#fceea7]">New Formula & Look</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Text Column */}
        <div className="md:w-1/2 flex flex-col justify-center">
          
          {/* Section 1: Old Packaging */}
          <div className="min-h-[70vh] flex flex-col justify-center">
            <h4 className="text-[#e05263] font-black text-xl mb-2 tracking-widest uppercase">Our First Launch</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              The MrBeast Bar, wasn't just a chocolate bar
            </h2>
            <p className="text-xl md:text-2xl font-bold">
              It was a flavor-packed adventure, complete with gamified experiences, fan engagement, and over-the-top stunts.
            </p>
          </div>

          {/* Section 2: New Packaging */}
          <div className="min-h-[70vh] flex flex-col justify-center">
            <h4 className="text-[#2b6cb0] font-black text-xl mb-2 tracking-widest uppercase">As we grew, so did</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              Our Standards & Our Responsibility
            </h2>
            <p className="text-xl md:text-2xl font-bold">
              For what we make and what we stand for. We reformulated our recipes for an even bigger, bolder flavor and redesigned our packaging and bars to match.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
