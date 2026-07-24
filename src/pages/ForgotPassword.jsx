import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <motion.section
      className="forgot-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="forgot-container">
        <motion.div
          className="forgot-card"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Forgot Password?</h1>

          <p>
            Enter your email address below and we'll send you a password reset
            link.
          </p>

          <form className="forgot-form">
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="forgot-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Reset Link
            </motion.button>
          </form>

          <p className="back-login">
            Remember your password?{" "}
            <Link to="/login">
              Back to Login
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ForgotPassword;