import { Link } from "react-router-dom";
import contactMap from "../../assets/images/contact/contact-map.png";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-container">

        <div className="location-header">

          <h2>
            Where
            <br />
            to find us
          </h2>

          <div className="location-info">

            <h3>+1 (701) 581-1331</h3>

            <p>
              161 Trumpeter Ave,
              <br />
              Soldotna, Alaska
            </p>

            <Link to="/contact" className="location-btn">
              Submit your application
            </Link>

          </div>

        </div>

        <div className="location-map">
          <img
            src={contactMap}
            alt="Location Map"
          />
        </div>

      </div>
    </section>
  );
};

export default Location;