import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"; 
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Navbar = () => {

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <ul className={classes.nav_links}>
          {["Designs", "Sketchbook", "Projects", "About"].map((item) => (
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaFilePdf />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className={classes.icon}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;