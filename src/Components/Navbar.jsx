import React from "react";

const Navbar = () => {
  return (
    <div>
        <div className="bg-purple-900 text-center text-white font-bold py-2 text-sm">FREE SHIPPING ON ORDERS $50+</div>
        <nav className="bg-[#6ec1d6] px-6 py-3 flex items-center justify-between">

        <div>
            <img
            src="https://feastables.com/cdn/shop/files/Feastables_Rebrand_Non_Tilted.png?v=1715198993&width=360"
            alt="logo"
            className="h-15"
            />
        </div>

        <div className="hidden md:flex space-x-10 font-bold text-black text-sm tracking-wide">
            <a href="#" className="hover:underline">SHOP</a>
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
    </div>
  );
};

export default Navbar;