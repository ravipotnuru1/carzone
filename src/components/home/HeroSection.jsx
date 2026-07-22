import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            Retro cars <br className="mobile-break" />
            1960-1970
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              Vintage retro
              <br />
              cars USA
            </p>

            <Link to="/cars" className="hero-btn">
              <span>Find a car</span>

              <span className="hero-arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M9 7H17V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;