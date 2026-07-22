import { Link } from "react-router-dom";
import cars from "../../data/cars";
import CarCard from "./CarCard";
import "./FeaturedCars.css";

const FeaturedCars = () => {
  return (
    <section className="featured-cars">
      <div className="featured-container">
        <div className="cars-grid">
          {cars.map((car, index) => (
            <Link
              key={car.id}
              to={`/cars/${car.id}`}
              className="car-link"
            >
              <CarCard
                car={car}
                isLastCard={index === cars.length - 1}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;