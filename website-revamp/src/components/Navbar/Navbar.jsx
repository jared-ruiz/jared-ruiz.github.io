import classes from "./Navbar.module.css"; 
import { NavLink } from "react-router-dom";

import resume from '../../../public/Resume_Jared_Ruiz(2026).pdf'

import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaTimes, FaBars, FaArchive} from "react-icons/fa";
// import resume from '../../assets/documents/resume/Resume - Jared Ruiz - 2025.pdf';
import { useState } from 'react';

const Navbar = () => {

  //mobile hamburger nav state
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // state for copying email text to clipboard
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'Jared707@gmail.com';

  // handles setting clipboard to coied email text
  function copyToClipboard() {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  //put inline syling to avoid FOUC
  return (
    <nav className={classes.navbar} style={{display: 'none'}}>
      <div className={classes.container}>

      <button className={classes.hamburger_icon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`${classes.nav_links} ${isOpen ? classes.hide_links : ''}`}>
          {["Designs", "Sketchbook", "About"].map((item) => (
            <li key={item}>
              <NavLink to={item.toLowerCase()} className={({ isActive }) =>
                  `${classes["nav_item"]} ${isActive ? classes.active : ""}`
                }>
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={classes.social_icons}>
        {copiedEmail && <span className={classes.copied_text}>Email Copied!</span>}


          <a href="https://drive.google.com/drive/folders/1wam9Oo4IDDXOXjhImSbFNroGUdy4pFeC?usp=sharing" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaArchive />
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaFilePdf />
          </a>
          <a href="https://github.com/jared-ruiz" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/jaredruiz/" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaLinkedin />
          </a>
          <a className={classes.icon} onClick={copyToClipboard}>
            <FaEnvelope />
          </a>


          <div className={`${classes.sidebar} ${isOpen ? classes.show_sidebar : ""}`}>
            <button className={classes.close_btn} onClick={closeMenu}>
              <FaTimes />
            </button>
            <ul className={classes.nav_links}>
            {["Designs", "Sketchbook", "Projects", "About"].map((item) => (
              <li key={item}>
                <NavLink to={item.toLowerCase()} className={({ isActive }) =>
                    `${classes["nav_item"]} ${isActive ? classes.active : ""}`
                  } onClick={closeMenu}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          </div>

        </div>
        {isOpen && <div className={classes.overlay} onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;