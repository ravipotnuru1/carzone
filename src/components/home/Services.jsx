import { Link } from "react-router-dom";
import shippingImg from "../../assets/images/services/service-shipping.png";
import warrantyImg from "../../assets/images/services/service-warranty.png";
import financingImg from "../../assets/images/services/service-financing.png";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "01 / SHIPPING",
    image: shippingImg,
    path: "/services/shipping",
  },
  {
    id: 2,
    title: "02 / WARRANTY PURCHASE",
    image: warrantyImg,
    path: "/services/warranty",
  },
  {
    id: 3,
    title: "03 / FINANCING",
    image: financingImg,
    path: "/services/financing",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <h2>Services</h2>

          <Link to="/contact" className="services-btn">
            Submit your application
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="service-card"
            >
              <img
                src={service.image}
                alt={service.title}
              />

              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;