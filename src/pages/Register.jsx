import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import "./Register.css";

const Register = () => {
  return (
    <motion.section
      className="register-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="register-container">
        <motion.div
          className="register-card"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Create Account</h1>
          <p>Join Classic Autotrader and start your journey today.</p>

          <form className="register-form">

            <div className="input-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="register-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Create Account
            </motion.button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Register;