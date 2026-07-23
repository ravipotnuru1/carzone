import { motion } from "framer-motion";
import aboutClassicCar from "../../assets/images/about/about-classic-car.png";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Top Content */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">
            About us
            <br />
            in numbers
          </h2>

          <p className="about-text">
            From acquisition to restoration, we specialize in iconic
            automobiles, ensuring each drive is a celebration of timeless
            style. Elevate your journey with our passion for preserving
            automotive heritage.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="stat-circle"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <h3>32</h3>
            <p>Retro car</p>
          </motion.div>

          <motion.div
            className="stat-circle"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <h3>400</h3>
            <p>Satisfied clients</p>
          </motion.div>

          <motion.div
            className="stat-circle"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <h3>
              5 <span>Years</span>
            </h3>
            <p>Delighting our clients</p>
          </motion.div>
        </motion.div>

        {/* Car Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={aboutClassicCar}
            alt="Classic Vintage Car"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;