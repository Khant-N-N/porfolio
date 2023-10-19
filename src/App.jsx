import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
