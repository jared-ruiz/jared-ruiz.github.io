import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Designs from "./components/Designs/Designs.jsx";
import Sketchbook from "./components/Sketches/Sketches.jsx";
import About from './components/About/About.jsx';
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/designs" />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/sketchbook" element={<Sketchbook />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
