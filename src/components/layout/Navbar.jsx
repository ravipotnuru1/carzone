import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Cars Classic Autotrader
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/cars" onClick={closeMenu}>
            Cars
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contacts
          </NavLink>
        </nav>

        <a href="tel:+123467578288" className="phone">
          +1 (234) 575 8288
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;