import React from 'react';
import { Link } from 'react-router-dom';

const StoryCTA = () => {
  return (
    <section className="w-full bg-[#1fa9e4] py-24 flex items-center justify-center border-b-4 border-black relative overflow-hidden">
      
      {/* Background Texture (Dots) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      {/* CTA Button */}
      <div className="relative z-10 px-4 text-center">
        <Link 
          to="/pages/ethicalsourcing" 
          className="inline-block bg-[#000] text-white font-black text-2xl md:text-4xl uppercase tracking-widest py-6 px-12 md:px-16 rounded-full border-4 border-black hover:bg-white hover:text-black hover:-translate-y-2 transition-all duration-300 shadow-[8px_8px_0px_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.5)]"
        >
          Learn More About Our Mission
        </Link>
      </div>
      
    </section>
  );
};

export default StoryCTA;
