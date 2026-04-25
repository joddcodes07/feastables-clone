const Hero = () => {
  return (
    <section className="w-full flex justify-center p-4 md:p-8 bg-[#f9f8f4] overflow-hidden">
      {/* Container for Image and Button to keep them locked together */}
      <div className="relative w-full max-w-[1400px]">
        
        {/* Background Image */}
        <img 
          src="https://feastables.com/cdn/shop/files/super-mario-hero-desktop.jpg?v=1772736823&width=3200" 
          alt="Super Mario Galaxy Feastables" 
          className="w-full h-auto min-h-[400px] object-cover object-top rounded-2xl md:rounded-3xl border-[3px] md:border-4 border-[#1c1c1c] shadow-sm"
        />
        
        {/* Overlay Content - Locked to the image container */}
        <div className="absolute top-[28%] md:top-[54%] left-1/2 -translate-x-1/2 flex justify-center">
          {/* BUY NOW Button */}
          <button 
            className="bg-[#e4252d] text-white px-8 py-3 md:px-12 md:py-4 rounded-xl font-black text-2xl md:text-3xl italic uppercase border-[3px] border-white hover:scale-105 hover:bg-[#ff2f38] active:scale-95 transition-all duration-200 shadow-[0_6px_0px_#000,0_10px_20px_rgba(0,0,0,0.5)]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;