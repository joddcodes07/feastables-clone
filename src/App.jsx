import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Threadmill from "./Components/Threadmill";
import ProductCarousel from "./Components/ProductCarousel";
import Mission from "./Components/Mission";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Threadmill />
      <ProductCarousel />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;