import CodeIcon from "@material-ui/icons/Code";
import ForwardIcon from "@material-ui/icons/Forward";
import React from "react";
import { Element } from "react-scroll";
import ProfilePhoto from "../../assets/profile.jpg";
import "./AboutMe.css";

const Aboutme = () => {
  return (
    <div className="main-aboutme">
      <Element id="aboutme">
        <h1>About Me</h1>

        <div className="main-content">
          <div className="img">
            <img src={ProfilePhoto} alt="ProfilePhoto" />
            <h2>Arifur Rahman Arif</h2>
            <h4>
              <CodeIcon /> Full Stack Web Developer <CodeIcon />
            </h4>
          </div>
          <div className="about-info">
            <p>
              Hello good People, <br />
              <ForwardIcon className="icon" /> Recently,I have completed my One
              years Course from at Digital Career Institute gGmbh in Berlin as a
              <span> Full Stack Web Developer</span> .
            </p>
            <p>
              <ForwardIcon className="icon" /> Confident and positive minded
              individual with great communication and interpersonal skills who
              recently graduated an one year full-time training in Full stack
              Web Development with programming skills in
              <span>
                {" "}
                JavaScript, HTML5, CSS3, BootStrap, NodeJS, ExpressJS, and
                MongoDB.
              </span>{" "}
              Curious about new technologies and looking for a new challenge
              within the digital industry.
            </p>
            <p>
              <ForwardIcon className="icon" /> Throughout the whole courses, I
              was working with version control
              <span> Git & Github</span> for collaboration the project with
              others team member.
            </p>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Aboutme;
