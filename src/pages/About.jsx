import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/about/AboutSection";
import FAQSection from "../components/home/FAQSection";
import Footer from "../components/home/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <main>
        <AboutSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
};

export default About;