import { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
// import useState from 'react';
import Nav from "./Components/Nav";
import Designs from "./Components/Designs";
import UX from "./Components/UX";
import About from "./Components/About";
import Contact from "./Components/Contact";



function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<Designs/>} />
          <Route path="/ux" element={<UX/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
   </>
  );
}

export default App;
