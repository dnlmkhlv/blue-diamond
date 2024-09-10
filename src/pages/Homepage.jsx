import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import MobileApp from "../components/MobileApp";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <ContactForm />
      <FAQ />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default Homepage;
