import { React, useState } from "react";
import { Link } from "react-router-dom";

import burger from "../../Assets/Icons/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import x_icon from "../../Assets/Icons/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

function Nav() {
    const [navBarActive, setNavBarActive] = useState(false);
  
    const toggleNavBar = () => {
      setNavBarActive((prev) => !prev);
    };
  
    return (
      <nav className="navbar">
        {/* Regular navigation links (hidden when sidebar is active) */}
        <ul className={`nav-links ${navBarActive ? "hidden" : ""}`}>
          <li><Link to="/">Designs</Link></li>
          <li><Link to="/ux">UX/UI</Link></li>
          <li><Link to="/sketchbook">Sketchbook</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
  
        {/* Burger icon to open sidebar */}
        {!navBarActive && (
          <div className="burger-div" onClick={toggleNavBar}>
            <img src={burger} id="burger" alt="Open sidebar" />
          </div>
        )}
  
        {/* Sidebar for mobile view */}
        <div className={`sidebar ${navBarActive ? "active" : ""}`}>
          <div className="close-icon" onClick={toggleNavBar}>
            <img src={x_icon} id="x_icon" alt="Close sidebar" />
          </div>
          <ul>
            <li><Link to="/" onClick={toggleNavBar}>Designs</Link></li>
            <li><Link to="/ux" onClick={toggleNavBar}>UX/UI</Link></li>
            <li><Link to="/sketchbook" onClick={toggleNavBar}>Sketchbook</Link></li>
            <li><Link to="/about" onClick={toggleNavBar}>About</Link></li>
            <li><Link to="/contact" onClick={toggleNavBar}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;