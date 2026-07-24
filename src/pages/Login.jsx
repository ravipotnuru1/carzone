import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login (no backend)
    navigate("/home");
  };

  return (
    <motion.section
      className="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="login-container">
        <motion.div
          className="login-card"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Welcome Back</h1>
          <p>Sign in to continue exploring classic cars.</p>

          <form className="login-form" onSubmit={handleLogin}>
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

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <motion.button
              type="submit"
              className="login-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Login
            </motion.button>
          </form>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Login;