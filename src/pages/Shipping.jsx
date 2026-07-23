import Navbar from "../components/layout/Navbar";
import ServiceDetails from "../components/services/ServiceDetails";
import Footer from "../components/home/Footer";

import shippingImg from "../assets/images/services/service-shipping.png";

const Shipping = () => {
  return (
    <>
      <Navbar />

      <ServiceDetails
        title="SHIPPING"
        image={shippingImg}
        buttonText="Deliver my car"
        paragraphs={[
          "Our worldwide shipping service ensures your classic vehicle reaches you safely and securely, no matter where you are.",
          "We work with trusted logistics partners who specialize in transporting valuable automobiles using enclosed carriers and professional handling.",
          "From pickup to final delivery, we keep you informed throughout the process so your vehicle arrives in excellent condition."
        ]}
      />

      <Footer />
    </>
  );
};

export default Shipping;
