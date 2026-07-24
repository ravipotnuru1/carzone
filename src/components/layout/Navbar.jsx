import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/cars", label: "Cars" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contacts" },
  ];

  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password";

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="navbar-container">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <NavLink
            to={isAuthPage ? "/" : "/home"}
            className="logo"
            onClick={closeMenu}
          >
            Cars Classic Autotrader
          </NavLink>
        </motion.div>

        {!isAuthPage && (
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.4,
                }}
              >
                <NavLink to={item.path} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        )}

        <div className="navbar-actions">

          {!isAuthPage && (
            <>
              <motion.a
                href="tel:+123467578288"
                className="phone"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                +1 (234) 575 8288
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.15, rotate: -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/" className="logout-icon">
                  <FiLogOut />
                </Link>
              </motion.div>
            </>
          )}

        </div>

        {!isAuthPage && (
          <motion.button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </motion.button>
        )}

      </div>
    </motion.header>
  );
};

export default Navbar;