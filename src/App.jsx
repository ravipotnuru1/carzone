import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Warranty from "./pages/Warranty";
import Financing from "./pages/Financing";

// Temporary pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/shipping" element={<Shipping />} />
        <Route path="/services/warranty" element={<Warranty />} />
        <Route path="/services/financing" element= {<Financing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;