import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Services</h2>

          <Link to="/contact" className="services-btn">
            Submit your application
          </Link>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;