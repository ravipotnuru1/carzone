import { useState } from "react";
import "./ContactSection.css";
import mapImage from "../../assets/images/contact/contact-map.png";
import ContactModal from "./ContactModal";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Desktop Header */}
        <div className="contact-top">
          <h1 className="contact-title">Contacts</h1>

          <div className="contact-info">
            <h2>+1 (701) 581-1331</h2>

            <p>
              161 Trumpeter Ave,
              <br />
              Soldotna, Alaska
            </p>

            <button
              className="contact-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Submit your application
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="map-wrapper">
          <img src={mapImage} alt="Location Map" />
        </div>

        {/* Mobile Contact Info */}
        <div className="mobile-contact">
          <h2>
            Where
            <br />
            to find us
          </h2>

          <h3>+1 (701) 581-1331</h3>

          <p>
            161 Trumpeter Ave,
            <br />
            Soldotna, Alaska
          </p>

          <button
            className="contact-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Submit your application
          </button>
        </div>

        {/* Contact Modal */}
        {isModalOpen && (
          <ContactModal
            onClose={() => setIsModalOpen(false)}
          />
        )}

      </div>
    </section>
  );
};

export default ContactSection;