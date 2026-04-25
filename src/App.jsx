import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Threadmill from "./Components/Threadmill";
import ProductCarousel from "./Components/ProductCarousel";
import FlavorBanner from "./Components/FlavorBanner";
import VideoCards from "./Components/VideoCards";
import Footer from "./Components/Footer";
import CollectionHero from "./Components/CollectionHero";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="font-sans bg-[#fdf5e6] min-h-screen flex flex-col">
      <Navbar setCurrentPage={setCurrentPage} />
      
      <div className="flex-grow">
        {currentPage === "super-mario" ? (
          <CollectionHero />
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
    </div>
  );
}

export default App;