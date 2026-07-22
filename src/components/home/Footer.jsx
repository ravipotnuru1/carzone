import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* Left */}
          <div className="footer-brand">
            <h2>Cars Classic Autotrader</h2>

            <Link to="/privacy" className="privacy-link">
              Privacy Policies
            </Link>

            <p className="copyright">
              © Cars Classic Autotrader 2024
            </p>
          </div>

          {/* Center */}
          <div className="footer-links">

            <div>
              <Link to="/cars">Cars</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
            </div>

            <div>
              <Link to="/rent">How to rent</Link>
              <Link to="/contact">Contacts</Link>
            </div>

          </div>

          {/* Right */}
          <div className="footer-contact">

            <h3>+1 (701) 581-1331</h3>

            <p>
              161 Trumpeter Ave,
              Soldotna, Alaska
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;