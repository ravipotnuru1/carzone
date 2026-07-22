import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import cars from "../data/cars";
import Navbar from "../components/layout/Navbar";
import CarCard from "../components/home/CarCard";
import Footer from "../components/home/Footer";

import "./Cars.css";

const Cars = () => {
  // Remove the "All Cars" card used on the Home page
  const baseCars = cars.filter((car) => car.id !== 6);

  // Repeat the cars to match the Figma layout
  const allCars = Array.from({ length: 14 }, (_, index) => ({
    ...baseCars[index % baseCars.length],
    id: index + 1,
  }));

  return (
    <>
      <Navbar />

      <section className="cars-page">
        <div className="cars-container">
          <div className="cars-header">
            <h1>Our cars</h1>

            <button className="filter-btn">
              Cars <FiChevronDown />
            </button>
          </div>

          <div className="cars-grid">
            {allCars.map((car) => (
              <Link
                key={car.id}
                to={`/cars/${car.id}`}
                className="car-link"
              >
                <CarCard
                  car={car}
                  isLastCard={false}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cars;