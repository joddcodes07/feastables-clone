import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
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
        <div className="bg-purple-900 text-center text-white font-bold py-2 text-sm">FREE SHIPPING ON ORDERS $50+</div>
        <nav className="bg-[#72e2ff] px-6 py-3 flex items-center justify-between">

        <div>
            <a href="/">
              <img
              src="https://feastables.com/cdn/shop/files/Feastables_Rebrand_Non_Tilted.png?v=1715198993&width=360"
              alt="logo"
              className="h-15"
              />
            </a>
        </div>

        <div className="hidden md:flex space-x-10 font-bold text-black text-sm tracking-wide">
            <button onClick={() => setIsShopOpen(!isShopOpen)} className="hover:underline uppercase focus:outline-none font-bold">SHOP</button>
            <a href="#" className="hover:underline">OUR STORY</a>
            <a href="#" className="hover:underline">ETHICAL SOURCING</a>
            <a href="#" className="hover:underline">SUPER MARIO GALAXY</a>
        </div>

        <div className="flex items-center space-x-5 text-black text-xl">

            <span className="border-2 border-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">?</span>

            <img
            src="https://flagcdn.com/w40/us.png"
            className="w-6 h-6 rounded-full cursor-pointer"
            />

            <span className="border-2 border-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
        
            </span>

            <span className="cursor-pointer">📍</span>
            <span className="cursor-pointer">👜</span>

        </div>

        </nav>
        <div className="bg-black h-1"></div>

        {isShopOpen && (
          <div className="absolute top-full left-0 w-full z-40 flex justify-center mt-0 px-4">
            <div className="bg-[#f2eadd] border-[4px] border-black w-full max-w-6xl flex shadow-lg mt-2">
              {/* Sidebar */}
              <div className="w-[200px] border-r-[4px] border-black flex flex-col font-black text-lg italic bg-[#f2eadd]">
                {categories.map((cat, idx) => (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setActiveCategory(cat)}
                    className={`py-6 px-6 cursor-pointer hover:bg-black hover:text-white transition-colors ${activeCategory === cat ? 'bg-black text-white' : 'text-black'}`}
                  >
                    {cat}
                  </div>
                ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 p-8 bg-[#f2eadd]">
                <div className="grid grid-cols-5 gap-6">
                  {activeProducts.slice(0, 5).map((prod, idx) => (
                    <div key={idx} className="border-[4px] border-black rounded-xl overflow-hidden flex flex-col h-64 bg-[#f2eadd]">
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
                      <div key={idx} className="border-[4px] border-black rounded-xl overflow-hidden flex flex-col h-64 bg-[#f2eadd]">
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