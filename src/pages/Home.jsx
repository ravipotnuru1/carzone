import HeroSection from "../components/home/HeroSection";
import FeaturedCars from "../components/home/FeaturedCars";
import AboutSection from "../components/home/AboutSection";
import Services from "../components/home/Services";
import FAQSection from "../components/home/FAQSection";
import Location from "../components/home/Location";
import Footer from "../components/home/Footer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <FeaturedCars />
      <AboutSection />
      <Services />
      <FAQSection />
      <Location />
      <Footer />
    </>
  );
};

export default Home;