import React from "react";
import { useCart } from "../CartContext";

const CartDrawer = ({ isOpen, onClose, onBrowse }) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
  
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[999] transition-opacity"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[450px] max-w-[100vw] bg-[#f2eadd] z-[1000] flex flex-col border-l-[4px] border-black shadow-2xl transform transition-transform duration-300 translate-x-0">
        
        {/* Header */}
        <div className="p-6 pb-2 relative flex flex-col items-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-black w-8 h-8 border-[3px] border-black bg-white flex items-center justify-center hover:bg-gray-200"
          >
            × 
          </button>
          
          <div className="flex items-center gap-2 mt-2">
            <h2 
              className="text-5xl font-black italic text-[#ff74c2] tracking-tighter"
              style={{ textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 4px 4px 0px #000' }}
            >
              YOUR BAG
            </h2>
            <span className="font-black text-sm mt-2">({cartCount} ITEMS)</span>
          </div>
        </div>

        {/* Shipping Progress */}
        <div className="px-8 py-4">
          <div className="flex justify-between text-xs font-black mb-1">
            <span>YOU</span>
            <span>{cartTotal >= 75 ? "FREE SHIPPING UNLOCKED" : "FREE SHIPPING"}</span>
          </div>
          <div className="h-4 w-full border-[3px] border-black bg-white relative">
            <div 
              className="absolute left-0 top-0 h-full bg-[#ff74c2] border-r-[3px] border-black transition-all"
              style={{ width: `${Math.min(100, (cartTotal / 75) * 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs font-black mt-1">
            <span>${cartTotal.toFixed(2)}</span>
            <span>$75</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center mt-[-10vh]">
              <svg className="w-24 h-24 mb-6" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              
              <h3 className="text-3xl font-black mb-6">YOUR BAG IS EMPTY</h3>
              
              <button 
                onClick={onBrowse}
                className="w-full bg-[#ccff00] border-[4px] border-black rounded-lg py-3 text-xl font-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
              >
                BROWSE ALL PRODUCTS
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, idx) => (
                <div key={idx} className="bg-white border-[4px] border-black rounded-xl p-4 flex gap-4 relative">
                  <button onClick={() => removeFromCart(item.title)} className="absolute -top-3 -right-3 w-8 h-8 bg-white border-[3px] border-black rounded-full font-black flex items-center justify-center hover:bg-gray-200">×</button>
                  <div className="w-24 h-24 bg-[#72e2ff] border-[3px] border-black rounded-lg flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-black text-sm uppercase leading-tight">{item.title}</h4>
                      <p className="font-bold text-xs text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border-[3px] border-black rounded-lg overflow-hidden h-8 w-24">
                        <button onClick={() => updateQuantity(item.title, -1)} className="flex-1 font-black bg-[#f2eadd] hover:bg-gray-200">-</button>
                        <span className="flex-1 text-center font-black text-sm border-x-[3px] border-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.title, 1)} className="flex-1 font-black bg-[#f2eadd] hover:bg-gray-200">+</button>
                      </div>
                      <span className="font-black">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#72e2ff] border-t-[4px] border-black p-8 pb-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-black">SUBTOTAL</span>
            <span className="text-2xl font-black">${cartTotal.toFixed(2)}</span>
          </div>
          
          <button className="w-full bg-[#ccff00] border-[4px] border-black rounded-lg py-4 text-xl font-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all mb-3">
            VIEW BAG & CHECKOUT
          </button>
          
          <p className="text-center text-[10px] font-black">
            *TAXES & ALL THAT JAZZ ARE CALCULATED AT CHECKOUT*
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
