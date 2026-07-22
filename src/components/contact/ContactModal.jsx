import "./ContactModal.css";
import { FiX } from "react-icons/fi";

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal"
          onClick={onClose}
        >
          <FiX />
        </button>

        <h2>
          Connect
          <br />
          with us
        </h2>

        <form className="contact-form">

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Surname</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="+1"
              />
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input type="email" />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Comment</label>
            <textarea rows="3"></textarea>
          </div>

          <div className="form-bottom">

            <button
              type="submit"
              className="submit-modal-btn"
            >
              Contact me
            </button>

            <label className="checkbox">
              <input type="checkbox" />
              <span>I agree with the privacy policy</span>
            </label>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactModal;