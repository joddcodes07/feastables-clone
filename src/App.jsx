import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Threadmill from "./Components/Threadmill";
import ProductCarousel from "./Components/ProductCarousel";
import FlavorBanner from "./Components/FlavorBanner";
import VideoCards from "./Components/VideoCards";
import Footer from "./Components/Footer";
import CollectionHero from "./Components/CollectionHero";
import Cart from "./Components/Cart";
import CartDrawer from "./Components/CartDrawer";
import { useCart } from "./CartContext";
import EthicalSourcing from "./Components/EthicalSourcing";
import OurStory from "./Pages/OurStory";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <Router>
      <div className="font-sans bg-[#fdf5e6] min-h-screen flex flex-col">
        <Navbar 
          setCurrentPage={setCurrentPage} 
          onProductClick={(product) => setSelectedProduct(product)} 
        />
        
        <div className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                selectedProduct ? (
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
                )
              } 
            />
            <Route path="/pages/our-cocoa-story" element={<OurStory />} />
          </Routes>
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
    </Router>
  );
}

export default App;