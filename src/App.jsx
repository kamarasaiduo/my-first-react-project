import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Footer from "./pages/Footer.jsx";

export default function App() {
  return (
     <>
    <Router>
      <nav>
        <NavLink to="/" end    className={({ isActive }) => isActive ? "active" : ""}> Home  </NavLink> 
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<main style={{ padding: '1rem' }}><h1>404 - Not Found</h1></main>} />
      </Routes>
    </Router>
    
   
    <Footer/>

    </>

  );
}
