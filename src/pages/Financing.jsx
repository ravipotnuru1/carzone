import Navbar from "../components/layout/Navbar";
import ServiceDetails from "../components/services/ServiceDetails";
import Footer from "../components/home/Footer";

import financingImg from "../assets/images/services/service-financing.png";

const Financing = () => {
  return (
    <>
      <Navbar />

      <ServiceDetails
        title="FINANCING"
        image={financingImg}
        paragraphs={[
          "Our financing options are designed to accommodate various budgets and preferences. Whether you are a seasoned collector or a first-time buyer, our team is dedicated to finding a financing plan that suits your needs. Benefit from competitive interest rates and straightforward terms that align with the timeless value of the classic car you desire.",
          "Applying for financing with us is a hassle-free process. Our knowledgeable team is ready to guide you through the application, ensuring that you have a clear understanding of the terms and conditions. We believe in transparency, and our commitment is to provide you with a financing solution that enhances your enjoyment of the classic car of your dreams.",
          "Take the next step in your journey to classic car ownership by exploring our financing options. ALL CLASSIC MOTORS VELVA is here to make your dream car a reality, with financing plans that reflect our dedication to your satisfaction and the preservation of automotive history."
        ]}
        buttonText="Deliver the car"
      />

      <Footer />
    </>
  );
};

export default Financing;