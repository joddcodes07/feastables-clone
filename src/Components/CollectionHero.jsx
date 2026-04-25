import React, { useState } from 'react';
import ProductCard from './ProductCard';

const CollectionHero = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabs = [
    "ALL",
    "SUPER MARIO",
    "CHOCOLATE",
    "CUPS",
    "GUMMIES",
    "MILK",
    "BUNDLES",
    "LIMITED TIME"
  ];

  const products = [
    {
      image: "https://feastables.com/cdn/shop/files/SourBoosts_Mario_StandardBag.png?v=1770756653&width=790",
      title: "MARIO SOUR BOOSTS",
      subtitle: "12 STANDARD BAGS"
    },
    {
      image: "https://feastables.com/cdn/shop/files/Chocolate_MarioGalaxyCocoaCrunch_60g.png?v=1776111170&width=790",
      title: "MARIO GALAXY COCOA CRUNCH",
      subtitle: "KING SIZE / 10 PACK"
    },
    {
      image: "https://feastables.com/cdn/shop/files/Cups_Eggs_Yoshi_2ct.png?v=1770752129&width=790",
      title: "YOSHI EGGS",
      subtitle: "12 PACK OF 2 CUPS"
    },
    {
      image: "https://feastables.com/cdn/shop/files/Chocolate_Variety_3lb_Box.png?v=1770407475&width=800",
      title: "CHOCOLATE VARIETY BULK BOX",
      subtitle: "3 LBS BOX | $45.00"
    },
    {
      image:"https://feastables.com/cdn/shop/files/Chocolate_Caramel_60g_Carton.png?v=1758826810&width=800",
      title: "CARAMEL",
      subtitle: "KING SIZE / 10 PACK  "
    },
    {
      image:"https://feastables.com/cdn/shop/files/MilkCarton_Chocolate_1.png?v=1758312578&width=800",
      title: "CHOCOLATE MILK",
      subtitle: "2 OPTIONS $14.99 - $39.99"
    },
    {
      image:"https://feastables.com/cdn/shop/files/SourBoosts_Mario_StandardBag.png?v=1770756653&width=800",
      title: "MARIO SOUR BOOSTS",
      subtitle: "12 STANDARD BAGS"
    },
    {
      image:"https://feastables.com/cdn/shop/files/Chocolate_Caramel_60g_Carton.png?v=1758826810&width=800",
      title: "CARAMEL",
      subtitle: "KING SIZE / 10 PACK  "
    },
    {
      image:"https://feastables.com/cdn/shop/files/Chocolate_Caramel_60g_Carton.png?v=1758826810&width=800",
      title: "CARAMEL",
      subtitle: "KING SIZE / 10 PACK  "
    },
    {
      image:"https://feastables.com/cdn/shop/files/Chocolate_Caramel_60g_Carton.png?v=1758826810&width=800",
      title: "CARAMEL", 
      subtitle: "KING SIZE / 10 PACK  "
    },
  ];

  return (
    <div className="pb-24">
      <div 
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center border-b-[4px] border-black"
        style={{ backgroundImage: `url('https://feastables.com/cdn/shop/files/hero-collection-chocolate.svg?v=1706052877&width=3200')` }}
      >
        <h1 
          className="text-7xl md:text-9xl font-black italic tracking-wide text-[#ff5092]"
          style={{ 
            WebkitTextStroke: '4px black',
            textShadow: '4px 4px 0px white, 6px 6px 0px black' 
          }}
        >
          SHOP {activeTab}
        </h1>
      </div>

      <div className="flex border-b-[4px] border-black bg-[#fdf5e6] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 px-6 text-center font-black italic text-xl whitespace-nowrap border-r-[4px] border-black last:border-r-0 transition-colors ${
              activeTab === tab ? 'bg-[#4a2411] text-white' : 'text-[#4a2411] hover:bg-[#f1e6d4]'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-center font-black text-sm mb-8 tracking-wide">21 PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <ProductCard 
              key={idx} 
              image={p.image} 
              title={p.title} 
              subtitle={p.subtitle} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionHero;
