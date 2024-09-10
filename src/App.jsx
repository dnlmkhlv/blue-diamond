import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
