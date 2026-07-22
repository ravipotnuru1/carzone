import "./ServicePage.css";
import { Link } from "react-router-dom";

import shippingImg from "../../assets/images/services/service-shipping.png";
import warrantyImg from "../../assets/images/services/service-warranty.png";
import financingImg from "../../assets/images/services/service-financing.png";

const services = [
  {
    id: "01",
    title: "Shipping",
    image: shippingImg,
    path: "/services/shipping",
  },
  {
    id: "02",
    title: "Warranty Purchase",
    image: warrantyImg,
    path: "/services/warranty",
  },
  {
    id: "03",
    title: "Financing",
    image: financingImg,
    path: "/services/financing",
  },
];

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="services-container">

        <div className="services-header">
          <h1>Services</h1>

          <button className="services-btn">
            Submit your application
          </button>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="service-link"
            >
              <div className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="service-overlay">
                  <h3>
                    {service.id} / {service.title.toUpperCase()}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;