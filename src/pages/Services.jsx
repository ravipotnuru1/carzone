import Navbar from "../components/layout/Navbar";
import ServicesPage from "../components/services/ServicePage";
import Footer from "../components/home/Footer";

const Services = () => {
  return (
    <>
      <Navbar />

      <main>
        <ServicesPage />
      </main>

      <Footer />
    </>
  );
};

export default Services;