import React from "react";
import { Element } from "react-scroll";
import Typed from "react-typed"; // react library for animation
import CV from "../../assets/CV_Arifur.pdf";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Home.css";

const Header = () => {
  return (
    <div className="header-wraper">
      <Element id="home" marginHeight="6rem">
        <div className="main-info">
          <h1>Welcome To My Portfolio</h1>
          <Typed
            className="typed-text"
            strings={[
              "I am Arifur Rahman Aarif",
              "Full-Stack-Developer",
              "FrontEnd-Developer",
            ]}
            typeSpeed={40}
            backSpeed={60}
          />
          <div className="anchor">
            <a href={CV} className="cv">
              Veiw My-CV
            </a>
          </div>
          <SocialMedia />
        </div>
      </Element>
    </div>
  );
};

export default Header;
