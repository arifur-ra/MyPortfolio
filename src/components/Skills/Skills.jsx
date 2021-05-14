import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { Element } from "react-scroll";
import skillImage from "../../assets/skills.jpg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="main-skills">
      <Element id="skills">
        <h1>IT-Skills</h1>
        <div className="skillContainer">
          <div className="skillContainer__text">
            <h2>SKILLSET</h2>
            <div className="skillContainer__skillSet">
              <h5>JavaScript</h5>
              <div className="skillContainer__slider skillContainer__slider1">
                <LinearProgress variant="determinate" value={75} />
              </div>
            </div>
            <div className="skillContainer__skillSet">
              <h5>HTML</h5>
              <div className="skillContainer__slider skillContainer__slider2">
                <LinearProgress variant="determinate" value={90} />
              </div>
            </div>
            <div className="skillContainer__skillSet">
              <h5>CSS or SASS</h5>
              <div className="skillContainer__slider skillContainer__slider3">
                <LinearProgress variant="determinate" value={85} />
              </div>
            </div>
            <div className="skillContainer__skillSet">
              <h5>ReactJS</h5>
              <div className="skillContainer__slider skillContainer__slider4">
                <LinearProgress variant="determinate" value={80} />
              </div>
            </div>
            <div className="skillContainer__skillSet">
              <h5>NodeJS</h5>
              <div className="skillContainer__slider skillContainer__slider5">
                <LinearProgress variant="determinate" value={70} />
              </div>
            </div>
            <div className="skillContainer__skillSet">
              <h5>ExpressJS</h5>
              <div className="skillContainer__slider skillContainer__slider5">
                <LinearProgress variant="determinate" value={60} />
              </div>
            </div>
            <div className="skillContainer__skillSet">
              <h5>MongoDB</h5>
              <div className="skillContainer__slider skillContainer__slider6">
                <LinearProgress variant="determinate" value={70} />
              </div>
            </div>
          </div>
          <div className="skillContainer__image">
            <img src={skillImage} alt="skillImages" />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Skills;
