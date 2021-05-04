import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Logo />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "orange" }} />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <Link to="home" smooth={true} duration={800}>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <HomeIcon style={{ marginTop: "-.5rem" }} />
                </a>
              </li>
            </Link>
            <Link to="aboutme" smooth={true} duration={800}>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About me
                </a>
              </li>
            </Link>
            <Link to="skills" smooth={true} duration={800}>
              <li class="nav-item">
                <a className="nav-link" href="#">
                  Skills
                </a>
              </li>
            </Link>
            <Link to="projects" smooth={true} duration={800}>
              <li class="nav-item">
                <a className="nav-link" href="#">
                  Project
                </a>
              </li>
            </Link>
            <Link to="experience" smooth={true} duration={800}>
              <li class="nav-item">
                <a className="nav-link" href="#">
                  IT-Experience
                </a>
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={800}>
              <li class="nav-item">
                <a className="nav-link" href="#">
                  Contact
                  {/* <ContactMailIcon /> */}
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
