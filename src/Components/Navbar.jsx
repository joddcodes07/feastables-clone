import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ setCurrentPage, onProductClick }) => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("CHOCOLATE");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = [
    "CHOCOLATE", "CUPS", "GUMMIES", "MILK", "BUNDLES"
  ];

  const chocolates = [
    { name: "MARIO GALAXY COCOA CRUNCH", image: "https://feastables.com/cdn/shop/files/Chocolate_MarioGalaxyCocoaCrunch_60g.png?v=1776111170&width=790" },
    { name: "COOKIES & CREME", image: "https://feastables.com/cdn/shop/files/Chocolate_CookiesCreme_60g_Carton.png?v=1745519325&width=790" },
    { name: "CARAMEL", image: "https://feastables.com/cdn/shop/files/Chocolate_Caramel_60g_Carton.png?v=1758826810&width=790" },
    { name: "MILK CHOCOLATE", image: "https://feastables.com/cdn/shop/files/Chocolate_Milk_60g_Carton.png?v=1728500121&width=790" },
    { name: "MILK CRUNCH", image: "https://feastables.com/cdn/shop/files/Chocolate_Milk_Crunch_60g_Carton.png?v=1728500159&width=790" },
    { name: "PEANUT BUTTER", image: "https://feastables.com/cdn/shop/files/Chocolate_PB_60g_Carton.png?v=1728500199&width=790" },
    { name: "ALMOND", image: "https://feastables.com/cdn/shop/files/Chocolate_Almond_60g_Carton.png?v=1728499681&width=790" },
    { name: "DARK CHOCOLATE", image: "https://feastables.com/cdn/shop/files/Chocolate_Dark_60g_Carton.png?v=1728499954&width=790" },
    { name: "DARK CHOCOLATE SEA SALT", image: "https://feastables.com/cdn/shop/files/Chocolate_Dark_SeaSalt_60g_Carton.png?v=1728500071&width=790" },
  ];

  const cups = [
    { name: "YOSHI EGGS", image: "https://feastables.com/cdn/shop/files/Cups_Eggs_Yoshi_2ct.png?v=1770752129&width=790" },
    { name: "PEANUT BUTTER CUPS", image: "https://feastables.com/cdn/shop/files/Cups_PB_2ct_2026.png?v=1772842146&width=790" },
    { name: "HAZELNUT CUPS", image: "https://feastables.com/cdn/shop/files/Cups_HN_1ct.png?v=1750094979&width=790" },
  ];

  const gummies = [
    { name: "MARIO SOUR BOOSTS", image: "https://feastables.com/cdn/shop/files/SourBoosts_Mario_StandardBag.png?v=1770756653&width=790" },
    { name: "ASSORTED", image: "https://feastables.com/cdn/shop/files/SourStrikes_Assorted_LargeBag_0.png?v=1770234966&width=790" },
    { name: "RASPBERRY", image: "https://feastables.com/cdn/shop/files/SourStrikes_Raspberry_LargeBag_0.png?v=1770235224&width=790" },
  ];

  const milk = [
    { name: "CHOCOLATE MILK", image: "https://feastables.com/cdn/shop/files/MilkCarton_Chocolate_1.png?v=1758312578&width=790" },
  ];

  const bundles = [
    { name: "CHOCOLATE VARIETY BULK BOX", image: "https://feastables.com/cdn/shop/files/Chocolate_Variety_3lb_Box.png?v=1770407475&width=800" },
    { name: "SAMPLER PACK", image: "https://feastables.com/cdn/shop/files/SamplerPack_2x_4b677e6c-1a70-4407-8687-adbdc5431b15.png?v=1731697145&width=800" },
    { name: "MILK CHOCOLATE PACK", image: "https://feastables.com/cdn/shop/files/MilkChocolate_35g_5ct_2x_1dd90a89-8c1f-4a3d-bd7e-8627a0b521f7.png?v=1763579926&width=800" },
    { name: "MILK CRUNCH PACK", image: "https://feastables.com/cdn/shop/files/Milk-Crunch-5-Pack-PDP-Main.png?v=1744742328&width=800" },
    { name: "SNACK-SIZE VARIETY BAG", image: "https://feastables.com/cdn/shop/files/VarietyBag_12g_28ct_2x_bf27b629-df44-4aa8-9c1b-d25688ec49e6.png?v=1759269759&width=800" },
  ];

  const activeProducts = 
    activeCategory === "CUPS" ? cups : 
    activeCategory === "GUMMIES" ? gummies : 
    activeCategory === "MILK" ? milk :
    activeCategory === "BUNDLES" ? bundles :
    activeCategory === "CHOCOLATE" ? chocolates : [];

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="bg-[#5a3182] text-white font-bold py-2 text-sm flex justify-center items-center relative">
        FREE SHIPPING ON ORDERS $50+
        <button className="absolute right-4 top-1/2 -translate-y-1/2 font-normal text-lg">✕</button>
      </div>
      
      <nav className="bg-[#72e2ff] px-6 py-3 flex items-center justify-between border-b-[3px] border-black">
        <a href="#" onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage("home"); }}>
          <img
            src="https://feastables.com/cdn/shop/files/Feastables_Rebrand_Non_Tilted.png?v=1715198993&width=360"
            alt="logo"
            className="h-12"
          />
        </a>

        <div className="hidden md:flex gap-8 font-black italic text-lg uppercase text-black">
          <button onClick={() => setIsShopOpen(!isShopOpen)} className="hover:underline">SHOP</button>
          <a href="#" onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage("home"); }} className="hover:underline">OUR STORY</a>
          <a href="#" onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage("home"); }} className="hover:underline">ETHICAL SOURCING</a>
          <a href="#" onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage("super-mario"); setIsShopOpen(false); }} className="hover:underline">SUPER MARIO GALAXY</a>
        </div>

        <div className="flex items-center gap-4 text-black">
          <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <img src="https://flagcdn.com/w40/us.png" alt="US Flag" className="w-8 h-8 rounded-full border-2 border-black cursor-pointer object-cover" />
          <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div className="relative cursor-pointer">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute top-[10px] left-1/2 -translate-x-1/2 text-[10px] font-black">0</span>
          </div>
        </div>
      </nav>

      {isShopOpen && (
        <div className="absolute top-full left-0 w-full z-40 flex justify-center mt-0 px-4">
          <div className="bg-[#f2eadd] border-[4px] border-black w-full max-w-6xl flex shadow-lg mt-2">
            {/* Sidebar */}
            <div className="w-48 border-r-[4px] border-black flex flex-col font-black text-lg italic">
              {categories.map((cat, idx) => (
                <button 
                  key={idx} 
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`p-6 text-left hover:bg-black hover:text-white transition-colors ${activeCategory === cat ? 'bg-black text-white' : 'text-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Main Area */}
            <div className="flex-1 p-8 bg-[#f2eadd]">
              <div className="grid grid-cols-5 gap-6">
                {activeProducts.slice(0, 5).map((prod, idx) => (
                  <div key={idx} onClick={() => { if (onProductClick) onProductClick(prod); setIsShopOpen(false); }} className="border-[4px] border-black rounded-xl overflow-hidden flex flex-col h-64 bg-[#f2eadd] cursor-pointer hover:scale-105 transition-transform duration-200">
                    <div className="bg-[#72e2ff] h-3/5 flex items-center justify-center p-4 relative overflow-hidden">
                      <div className="absolute bottom-[-15px] w-[120%] h-12 bg-[#f2eadd] rounded-t-[50%] border-t-[4px] border-black z-0"></div>
                      <img src={prod.image} alt={prod.name} className="object-contain h-24 w-full relative z-10" />
                    </div>
                    <div className="bg-[#f2eadd] flex-1 p-3 flex items-center justify-center text-center font-black text-sm leading-tight z-10">
                      {prod.name}
                    </div>
                  </div>
                ))}
              </div>
              {activeProducts.length > 5 && (
                <div className="grid grid-cols-4 gap-6 mt-8 justify-center mx-auto w-4/5">
                  {activeProducts.slice(5).map((prod, idx) => (
                    <div key={idx} onClick={() => { if (onProductClick) onProductClick(prod); setIsShopOpen(false); }} className="border-[4px] border-black rounded-xl overflow-hidden flex flex-col h-64 bg-[#f2eadd] cursor-pointer hover:scale-105 transition-transform duration-200">
                      <div className="bg-[#72e2ff] h-3/5 flex items-center justify-center p-4 relative overflow-hidden">
                        <div className="absolute bottom-[-15px] w-[120%] h-12 bg-[#f2eadd] rounded-t-[50%] border-t-[4px] border-black z-0"></div>
                        <img src={prod.image} alt={prod.name} className="object-contain h-24 w-full relative z-10" />
                      </div>
                      <div className="bg-[#f2eadd] flex-1 p-3 flex items-center justify-center text-center font-black text-sm leading-tight z-10">
                        {prod.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;