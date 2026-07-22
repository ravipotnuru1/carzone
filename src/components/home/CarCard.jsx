import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "./CarCard.css";

const CarCard = ({ car, isLastCard = false }) => {
  if (isLastCard) {
    return (
      <div className="car-card all-cars-card">
        <img src={car.image} alt={car.name} />

        <div className="overlay dark"></div>

        <div className="all-cars-content">
          <div className="bottom-buttons">
            <Link to="/cars" className="rent-btn">
              All cars <FiArrowUpRight />
            </Link>

            <span className="miles-pill">
              29 more cars
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="car-card">

      <img
        src={car.image}
        alt={car.name}
      />

      <div className="overlay"></div>

      <div className="car-content">

        <span className="price">
          {car.price}
        </span>

        <div className="bottom-content">

          <h3>
            {car.year}
            <br />
            {car.name}
          </h3>

          <div className="bottom-buttons">

            <button className="rent-btn">
              Rent
              <FiArrowUpRight />
            </button>

            <span className="miles-pill">
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CarCard;