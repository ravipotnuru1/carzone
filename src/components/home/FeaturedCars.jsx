import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cars from "../../data/cars";
import CarCard from "./CarCard";
import "./FeaturedCars.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturedCars = () => {
  return (
    <section className="featured-cars">
      <div className="featured-container">
        <motion.div
          className="cars-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/cars/${car.id}`}
                className="car-link"
              >
                <CarCard
                  car={car}
                  isLastCard={index === cars.length - 1}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCars;