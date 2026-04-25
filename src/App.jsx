import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Threadmill from "./Components/Threadmill";
import ProductCarousel from "./Components/ProductCarousel";
import FlavorBanner from "./Components/FlavorBanner";
import VideoCards from "./Components/VideoCards";
import Footer from "./Components/Footer";
import CollectionHero from "./Components/CollectionHero";
import Cart from "./Components/Cart";
<<<<<<< HEAD
import CartDrawer from "./Components/CartDrawer";
import { useCart } from "./CartContext";
=======
import CartDrawer from "./Components/CartDrawer"; 
import EthicalSourcing from "./Components/EthicalSourcing";
>>>>>>> df76474 (linked the ethical sourcing in navbar)

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <div className="font-sans bg-[#fdf5e6] min-h-screen flex flex-col">
      <Navbar 
        setCurrentPage={setCurrentPage} 
        onProductClick={(product) => setSelectedProduct(product)} 
      />
      
      <div className="flex-grow">
        {selectedProduct ? (
          <Cart product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        ) : currentPage === "super-mario" ? (
          <CollectionHero />
        ) : currentPage === "ethical-sourcing" ? (
          <EthicalSourcing />
        ) : (
          <>
            <Hero />
            <Threadmill />
            <ProductCarousel />
            <FlavorBanner />
            <VideoCards />
          </>
        )}
      </div>
      <Footer />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onBrowse={() => {
          setIsCartOpen(false);
          setCurrentPage("super-mario");
        }}
      />
    </div>
  );
}

export default App;