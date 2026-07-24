import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Warranty from "./pages/Warranty";
import Financing from "./pages/Financing";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.45 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Default Login Page */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        {/* Home */}
        <Route
          path="/home"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        {/* Cars */}
        <Route
          path="/cars"
          element={
            <PageTransition>
              <Cars />
            </PageTransition>
          }
        />

        <Route
          path="/cars/:id"
          element={
            <PageTransition>
              <CarDetails />
            </PageTransition>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />

        <Route
          path="/services/shipping"
          element={
            <PageTransition>
              <Shipping />
            </PageTransition>
          }
        />

        <Route
          path="/services/warranty"
          element={
            <PageTransition>
              <Warranty />
            </PageTransition>
          }
        />

        <Route
          path="/services/financing"
          element={
            <PageTransition>
              <Financing />
            </PageTransition>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        <Route
          path="/register"
          element={
            <PageTransition>
              <Register />
            </PageTransition>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <PageTransition>
              <ForgotPassword />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;