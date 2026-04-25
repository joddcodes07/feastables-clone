import React from 'react';
import { useCart } from '../CartContext';

const ProductCard = ({ image, title, subtitle }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="border-[4px] border-black rounded-2xl overflow-hidden flex flex-col bg-[#eee6d8]">
      <div className="bg-[#72e2ff] h-72 relative flex items-center justify-center p-8 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-contain h-full relative z-10 drop-shadow-xl hover:scale-105 transition-transform" 
        />
        
        {/* Minimal Curved Divider */}
        <div className="absolute -bottom-8 w-[120%] h-16 bg-[#eee6d8] rounded-t-[100%] border-t-[4px] border-black"></div>
      </div>
      
      <div className="p-6 pt-4 flex flex-col justify-between flex-1 gap-6 relative z-10">
        <div>
          <h3 className="font-black text-2xl uppercase leading-tight text-black">{title}</h3>
          <p className="font-bold text-sm uppercase text-black mt-1">{subtitle}</p>
        </div>
        
        <button 
          onClick={() => addToCart({ image, title, subtitle })}
          className="w-full bg-[#d4ff00] border-[4px] border-black py-3 font-black italic text-xl uppercase rounded-xl hover:bg-[#bce600] transition-colors"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
