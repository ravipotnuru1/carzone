import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowLeft,
  FiX,
} from "react-icons/fi";

import heroCar from "../assets/images/login/login-bg-image.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  // null | login | register | forgot
  const [activeModal, setActiveModal] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Later connect API
    alert("Account Created Successfully!");

    setActiveModal("login");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Later connect API
    alert("Password reset link sent.");

    setActiveModal("login");
  };

  return (
    <section className="login-page">

      {/* Background */}

      <img
        src={heroCar}
        alt="Classic Car"
        className="hero-bg"
      />

      <div className="hero-overlay"></div>

      {/* Hero */}

      <motion.div
        className="hero-section"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-tag">
          CLASSIC MOTORS • PREMIUM COLLECTION
        </span>

        <h1>
          Drive Legends.
          <br />
          Own History.
        </h1>

        <p>
          Explore a handpicked collection of iconic classic
          automobiles from trusted dealers worldwide.
          Experience timeless elegance, premium quality,
          and secure ownership.
        </p>

        <div className="hero-buttons">

          <button
            className="explore-btn"
            onClick={() => navigate("/home")}
          >
            Explore Collection
          </button>

          <button
            className="signin-btn"
            onClick={() => setActiveModal("login")}
          >
            Member Login
          </button>

        </div>
      </motion.div>

      {/* Authentication Popup */}

      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="login-popup"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setActiveModal(null)}
              >
                <FiX />
              </button>
              {/* ==========================
                  LOGIN
              ========================== */}

              {activeModal === "login" && (
                <>
                  <h2>Welcome Back</h2>

                  <p>
                    Access your account to explore our exclusive
                    collection of timeless classic automobiles.
                  </p>

                  <form onSubmit={handleLogin}>

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

                    <button
                      type="submit"
                      className="login-btn"
                    >
                      Continue
                    </button>

                  </form>

                  <p className="register-link">
                    Don't have an account?{" "}

                    <span
                      onClick={() => setActiveModal("register")}
                      style={{
                        color: "#d8a84d",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Create Account
                    </span>
                  </p>

                  <p className="forgot-link">

                    <span
                      onClick={() => setActiveModal("forgot")}
                      style={{
                        color: "#d8a84d",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Forgot Password?
                    </span>

                  </p>
                </>
              )}
              {/* ==========================
                  REGISTER
              ========================== */}

              {activeModal === "register" && (
                <>
                  <button
                    className="back-btn"
                    onClick={() => setActiveModal("login")}
                  >
                    <FiArrowLeft />
                  </button>

                  <h2>Create Your Account</h2>

                  <p>
                    Join Classic Motors and unlock access to our
                    exclusive collection of timeless automobiles.
                  </p>

                  <form onSubmit={handleRegister}>

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
                        placeholder="Create Password"
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

                    <button
                      type="submit"
                      className="login-btn"
                    >
                      Create Account
                    </button>

                  </form>

                  <p className="register-link">
                    Already a member?{" "}

                    <span
                      onClick={() => setActiveModal("login")}
                      style={{
                        color: "#d8a84d",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Sign In
                    </span>

                  </p>
                </>
              )}

              {/* ==========================
                  FORGOT PASSWORD
              ========================== */}

              {activeModal === "forgot" && (
                <>
                  <button
                    className="back-btn"
                    onClick={() => setActiveModal("login")}
                  >
                    <FiArrowLeft />
                  </button>

                  <h2>Reset Password</h2>

                  <p>
                    Enter your registered email address and we'll
                    send you a password reset link.
                  </p>

                  <form onSubmit={handleForgotPassword}>

                    <div className="input-group">
                      <FiMail className="input-icon" />

                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="login-btn"
                    >
                      Send Reset Link
                    </button>

                  </form>

                  <p className="register-link">
                    Remember your password?{" "}

                    <span
                      onClick={() => setActiveModal("login")}
                      style={{
                        color: "#d8a84d",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Back to Login
                    </span>

                  </p>
                </>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Login;