import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import React from "react";
import { Element } from "react-scroll";
import "./Experience.css";

const Experience = () => {
  return (
    <Element id="experience">
      <div className="main-experience experience">
        <h1>IT-Experience</h1>
        <div className="ex-info">
          <p>
            <DoubleArrowIcon /> As a Full Stack Web Developer, working on
            multiple practical projects throughout the past year at DCI has
            provided me with extensive knowledge of how to design a user
            friendly and secure website.
          </p>
          <p>
            <DoubleArrowIcon /> I would Like to solve challenges in various ways
            and try new platforms.I am looking for a new challenge within the
            digital industry & would like to gain knowledge of new technologies.
          </p>
          <h3>Looking for professional experience..</h3>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
