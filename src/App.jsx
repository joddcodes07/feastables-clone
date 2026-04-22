import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;