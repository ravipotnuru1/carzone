import Navbar from "../components/layout/Navbar";
import CarGallery from "../components/cars/CarGallery";
import CarInfo from "../components/cars/CarInfo";

import Services from "../components/home/Services";
import FAQSection from "../components/home/FAQSection";
import Location from "../components/home/Location";
import Footer from "../components/home/Footer";

const CarDetails = () => {
  return (
    <>
      <Navbar />

      <main>
        <CarGallery />
        <CarInfo />
        <Services />
        <FAQSection />
        <Location />
      </main>

      <Footer />
    </>
  );
};

export default CarDetails;