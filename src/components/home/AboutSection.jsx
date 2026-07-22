import aboutClassicCar from "../../assets/images/about/about-classic-car.png";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Top Content */}
        <div className="about-header">

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

        </div>

        {/* Statistics */}
        <div className="about-stats">

          <div className="stat-circle">
            <h3>32</h3>
            <p>Retro car</p>
          </div>

          <div className="stat-circle">
            <h3>400</h3>
            <p>Satisfied clients</p>
          </div>

          <div className="stat-circle">
            <h3>
              5 <span>Years</span>
            </h3>
            <p>Delighting our clients</p>
          </div>

        </div>

        {/* Car Image */}

        <div className="about-image">
          <img
            src={aboutClassicCar}
            alt="Classic Vintage Car"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;