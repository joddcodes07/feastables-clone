import React from "react";
import { useCart } from "../CartContext";

const productData = [
  {
    name: "Mario Galaxy Cocoa Crunch",
    price: "$29.99",
    img: "https://feastables.com/cdn/shop/files/Chocolate_MarioGalaxyCocoaCrunch_60g_1.png?v=1770756016&width=560", 
    buttonText: "ADD TO BAG",
    buttonColor: "bg-[#ef404a]"
  },
  {
    name: "Yoshi Eggs",
    price: "$29.99",
    img: "https://feastables.com/cdn/shop/files/Cups_Eggs_Yoshi_1.png?v=1770752129&width=560",
    buttonText: "FIND A STORE",
    buttonColor: "bg-[#f26522]"
  },
  {
    name: "Mario Sour Boosts",
    price: "$34.99",
    img: "https://feastables.com/cdn/shop/files/SourBoosts_Mario_1.png?v=1770756653&width=560", 
    buttonText: "ADD TO BAG",
    buttonColor: "bg-[#ef404a]"
  },
  {
    name: "Chocolate Variety Box",
    price: "$29.99",
    img: "https://feastables.com/cdn/shop/files/holiday-snack-size-variety-bag-card-hover.png?v=1770669741&width=560",
    buttonText: "ADD TO BAG",
    buttonColor: "bg-[#ef404a]"
  }
];

const ProductCarousel = () => {
  const { addToCart } = useCart();
  return (
    
    <section className="w-full bg-[#72e2ff] py-16 px-6 overflow-hidden">
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
            {productData.map((product, index) => (
              <div 
                key={index}
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl p-6 flex flex-col items-center snap-center shadow-md"
              >
                <div className="w-full h-[200px] flex items-center justify-center mb-6">
                  <img src={product.img} alt={product.name} className="max-h-full object-contain" />
                </div>
                <h3 className="text-2xl font-black uppercase text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold mb-6">
                  {product.price}
                </p>
                <button 
                  onClick={() => {
                    if (product.buttonText === "ADD TO BAG") {
                      addToCart({ image: product.img, title: product.name });
                    }
                  }}
                  className={`w-full ${product.buttonColor} text-white py-3 rounded-xl font-black text-xl uppercase hover:scale-105 active:scale-95 transition-transform`}
                >
                  {product.buttonText}
                </button>
              </div>
            ))}
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
