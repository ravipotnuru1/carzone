import Navbar from "../components/layout/Navbar";
import ServiceDetails from "../components/services/ServiceDetails";
import Footer from "../components/home/Footer";

import warrantyImg from "../assets/images/services/service-warranty.png";

const Warranty = () => {
  return (
    <>
      <Navbar />

      <ServiceDetails
        title="WARRANTY PURCHASE"
        image={warrantyImg}
        buttonText="I want to put"
        paragraphs={[
          "Our comprehensive warranty options provide an added layer of protection, ensuring that you can fully enjoy the beauty of your timeless vehicle without worry.",
          "Choose from our range of warranty packages tailored to meet the unique needs of classic car enthusiasts. Our warranties cover essential components, providing you with confidence and assurance in the reliability of your cherished automobile.",
          "With ALL CLASSIC MOTORS VELVA's warranty options, you're not just investing in protection; you're investing in the longevity and continued performance of your classic car. Our commitment to your satisfaction extends beyond the showroom, offering a safety net that aligns with the timeless quality of the vehicles in our collection."
        ]}
      />

      <Footer />
    </>
  );
};

export default Warranty;