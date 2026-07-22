import "./AboutSection.css";
import aboutCar from "../../assets/images/about/about-classic-car.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-top">

          <div className="about-left">
            <h1>Who<br />are we?</h1>

            <button className="review-btn">
              Read reviews
            </button>
          </div>

          <div className="about-right">
            <h3>1968 Chevrolet Chevelle SS™ STK 2801</h3>

            <p>
              The 1968 Chevrolet Chevelle SS is one of the most iconic American
              muscle cars, combining timeless styling with outstanding
              performance. Every vehicle in our collection is carefully restored
              and inspected to maintain its originality and driving experience.
            </p>

            <p>
              Our passion is preserving classic automobiles while providing an
              unforgettable ownership experience. Every detail is restored with
              care so each vehicle reflects its original character.
            </p>

            <p>
              From powerful V8 engines to handcrafted interiors, every car in
              our collection tells a unique story and represents automotive
              history.
            </p>
          </div>

        </div>

        <div className="about-stats">

          <div className="circle">
            <h2>32</h2>
            <p>Retro car</p>
          </div>

          <div className="circle">
            <h2>400</h2>
            <p>Satisfied clients</p>
          </div>

          <div className="circle">
            <h2>5 <span>Years</span></h2>
            <p>Delighting our clients</p>
          </div>

          <img
            src={aboutCar}
            alt="Classic Car"
            className="about-car-image"
          />

        </div>

      </div>
    </section>
  );
};

export default AboutSection;