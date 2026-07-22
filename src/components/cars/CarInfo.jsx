import { Link } from "react-router-dom";
import carDetails from "../../data/carDetails";
import "./CarInfo.css";

const CarInfo = () => {
  const { specs, description } = carDetails;

  return (
    <section className="car-info">
      <div className="car-info-container">

        <div className="specifications">

          <h2>Specifications</h2>

          <div className="spec-grid">

            <div className="spec-row">
              <span>Body</span>
              <strong>{specs.body}</strong>
            </div>

            <div className="spec-row">
              <span>Year</span>
              <strong>{specs.year}</strong>
            </div>

            <div className="spec-row">
              <span>Drive</span>
              <strong>{specs.drive}</strong>
            </div>

            <div className="spec-row">
              <span>VIN</span>
              <strong>{specs.vin}</strong>
            </div>

            <div className="spec-row">
              <span>Fuel</span>
              <strong>{specs.fuel}</strong>
            </div>

            <div className="spec-row">
              <span>Transmission</span>
              <strong>{specs.transmission}</strong>
            </div>

            <div className="spec-row">
              <span>Mileage</span>
              <strong>{specs.mileage}</strong>
            </div>

            <div className="spec-row">
              <span>Power</span>
              <strong>{specs.power}</strong>
            </div>

            <div className="spec-row">
              <span>Engine</span>
              <strong>{specs.engine}</strong>
            </div>

            <div className="spec-row">
              <span>Color</span>
              <strong>{specs.color}</strong>
            </div>

          </div>

        </div>

        <div className="about-car">

          <h2>About the car</h2>

          <p>{description}</p>

          <Link to="/contact" className="rent-car-btn">
            Rent this car
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CarInfo;