import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Threadmill from "./Components/Threadmill";
import ProductCarousel from "./Components/ProductCarousel";
import FlavorBanner from "./Components/FlavorBanner";
import VideoCards from "./Components/VideoCards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Threadmill />
      <ProductCarousel />
      <FlavorBanner />
      <VideoCards />
      <Footer />
    </div>
  );
}

export default App;