import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Designs from "./components/Designs/Designs.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/designs" element={<Designs />} />
        <Route path="/sketchbook" element={<h2 className="page">About Us</h2>} />
        <Route path="/projects" element={<h2 className="page">Our Services</h2>} />
        <Route path="/about" element={<h2 className="page">Contact Us</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
