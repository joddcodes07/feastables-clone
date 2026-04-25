import React, { useState } from "react";

const Cart = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col md:flex-row min-h-[90vh] bg-[#f4ebd0] relative">
      {/* Back button */}
      <div className="absolute top-6 left-6 z-50">
        <button onClick={onBack} className="bg-white border-[3px] border-black rounded-full px-6 py-2 font-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
          ← BACK TO SHOP
        </button>
      </div>

      {/* Left Side: Product Image with starry background */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative flex items-center justify-center p-8 bg-gradient-to-br from-purple-900 via-pink-600 to-blue-500 overflow-hidden">
        {/* Simple starry background using CSS */}
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        
        <img 
          src={product?.image || ""} 
          alt={product?.name || "Product"} 
          className="w-full max-w-lg object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Side: Product Details */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#f4ebd0]">
        
        <div className="mb-4 text-sm font-black tracking-widest text-black">
          LIMITED TIME
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#e43324] leading-none mb-8 uppercase" style={{ textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000' }}>
          {product?.name || "PRODUCT NAME"}
        </h1>

        <div className="border-[4px] border-black rounded-xl overflow-hidden bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          {/* Price Header */}
          <div className="bg-[#f4ebd0] border-b-[4px] border-black p-4 flex justify-between items-center font-black">
            <span>KING SIZE / 10 PACK | $29.99</span>
            <div className="flex text-yellow-400 text-lg">
              {"★".repeat(5)} <span className="text-black ml-2 text-sm">(144)</span>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 font-bold text-sm md:text-base leading-relaxed space-y-4 border-b-[4px] border-black bg-white">
            <p><span className="font-black">A New Bar That's Out Of This World –</span> Smooth milk chocolate with a fluffy cocoa flavored filling and a galaxy of pink, yellow, and purple stardust crunch.</p>
            <p><span className="font-black">Made For The Galaxy, Enjoyed On Earth –</span> Best enjoyed alongside your favorite adventures.</p>
            <p><span className="font-black">Crafted With Ethically Sourced Cocoa –</span> Fairtrade certified & on a mission to end child labor in the cocoa industry.</p>
            <p><span className="font-black">Limited Drop. Unlimited Craving –</span> One bite, and you're light-speeding through flavor galaxies unknown.</p>
          </div>

          {/* Add to Cart Actions */}
          <div className="p-8 bg-[#00529b]">
            <div className="flex gap-4 mb-8">
              <div className="flex items-center bg-white border-[4px] border-black rounded-lg overflow-hidden font-black text-xl w-32">
                <button onClick={decrease} className="flex-1 py-3 hover:bg-gray-200 transition-colors">-</button>
                <div className="flex-1 text-center">{quantity}</div>
                <button onClick={increase} className="flex-1 py-3 hover:bg-gray-200 transition-colors">+</button>
              </div>
              <button className="flex-1 bg-[#ff4f5e] border-[4px] border-black rounded-lg text-white font-black text-2xl hover:bg-[#ff3344] transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
                ADD TO BAG
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-black text-white p-3 border-[4px] border-black rounded-lg font-black text-center mb-6 transform -rotate-2 w-fit shadow-[4px_4px_0px_rgba(255,255,255,1)] relative z-10">
                SHOW YOU CARE HOW <br/> YOUR CHOCOLATE IS SOURCED
              </div>
            </div>

            <div className="text-center font-black text-white mt-8">
              <p className="mb-3">CAN'T WAIT? FIND A STORE NEAR YOU</p>
              <button className="bg-[#ccff00] text-black border-[4px] border-black rounded-lg px-8 py-3 text-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
                FIND A STORE
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 font-black text-sm italic underline cursor-pointer hover:text-gray-700 transition-colors">
          NUTRITION FACTS + INGREDIENTS
        </div>
      </div>
    </div>
  );
};

export default Cart;
