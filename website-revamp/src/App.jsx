import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Designs from "./components/Designs/Designs.jsx";
import Sketchbook from "./components/Sketches/Sketches.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/designs" />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/sketchbook" element={<Sketchbook />} />
        <Route path="/projects" element={<h2 className="page">Our Services</h2>} />
        <Route path="/about" element={<h2 className="page">Contact Us</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
