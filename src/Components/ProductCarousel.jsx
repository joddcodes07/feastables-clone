const ProductCarousel = () => {
  return (
    <section className="w-full bg-[#6fd7fa] py-16 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side Text */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-6">
            Shop Our<br className="hidden lg:block"/> World's Best<br className="hidden lg:block"/> Chocolate
          </h2>
          <p className="text-xl font-bold mb-8 max-w-sm">
            Show you care how your chocolate is sourced
          </p>
          <button className="bg-[#126fa6] text-white px-10 py-3 rounded-xl font-black italic text-2xl uppercase border-[3px] border-black">
            Shop All
          </button>
        </div>

        {/* Right Side Carousel */}
        <div className="lg:w-2/3 w-full relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Card 1 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl p-6 flex flex-col items-center snap-center shadow-md">
              <div className="w-full h-[200px] flex items-center justify-center mb-6">
                <img src="https://feastables.com/cdn/shop/files/Chocolate_MarioGalaxyCocoaCrunch_60g_1.png?v=1770756016&width=560" alt="Mario Galaxy Cocoa Crunch" className="max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black uppercase text-center mb-2">
                Mario Galaxy Cocoa Crunch
              </h3>
              <p className="text-lg font-bold mb-6">
                $29.99
              </p>
              <button className="w-full bg-[#ef404a] text-white py-3 rounded-xl font-black text-xl uppercase hover:scale-105 active:scale-95 transition-transform">
                ADD TO BAG
              </button>
            </div>

            {/* Card 2 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl p-6 flex flex-col items-center snap-center shadow-md">
              <div className="w-full h-[200px] flex items-center justify-center mb-6">
                <img src="https://feastables.com/cdn/shop/files/Cups_Eggs_Yoshi_1.png?v=1770752129&width=560" alt="Yoshi Eggs" className="max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black uppercase text-center mb-2">
                Yoshi Eggs
              </h3>
              <p className="text-lg font-bold mb-6">
                $29.99
              </p>
              <button className="w-full bg-[#f26522] text-white py-3 rounded-xl font-black text-xl uppercase hover:scale-105 active:scale-95 transition-transform">
                FIND A STORE
              </button>
            </div>

            {/* Card 3 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl p-6 flex flex-col items-center snap-center shadow-md">
              <div className="w-full h-[200px] flex items-center justify-center mb-6">
                <img src="https://feastables.com/cdn/shop/files/SourBoosts_Mario_1.png?v=1770756653&width=560" alt="Mario Sour Boosts" className="max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black uppercase text-center mb-2">
                Mario Sour Boosts
              </h3>
              <p className="text-lg font-bold mb-6">
                $34.99
              </p>
              <button className="w-full bg-[#ef404a] text-white py-3 rounded-xl font-black text-xl uppercase hover:scale-105 active:scale-95 transition-transform">
                ADD TO BAG
              </button>
            </div>

            {/* Card 4 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl p-6 flex flex-col items-center snap-center shadow-md">
              <div className="w-full h-[200px] flex items-center justify-center mb-6">
                <img src="https://feastables.com/cdn/shop/files/holiday-snack-size-variety-bag-card-hover.png?v=1770669741&width=560" alt="Chocolate Variety Box" className="max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black uppercase text-center mb-2">
                Chocolate Variety Box
              </h3>
              <p className="text-lg font-bold mb-6">
                $29.99
              </p>
              <button className="w-full bg-[#ef404a] text-white py-3 rounded-xl font-black text-xl uppercase hover:scale-105 active:scale-95 transition-transform">
                ADD TO BAG
              </button>
            </div>

          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-[18px] h-[18px] rounded-full border-[3px] border-black bg-[#126fa6]"></div>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-[18px] h-[18px] rounded-full border-[3px] border-black bg-white"></div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductCarousel;
