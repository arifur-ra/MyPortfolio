import React from "react";
import { Element } from "react-scroll";
import Project from "./Project";
import "./ProjectContainer.css";
import projects from "./Projects.js";

const ProjectContainer = () => {
  return (
    <div className="main-project">
      <h1>My Project</h1>
      <Element id="projects">
        <div className="projectContainer">
          {projects.map((project, index) => {
            return [
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
                githubLink={project.githubLink}
              />,
            ];
          })}
        </div>
      </Element>
    </div>
  );
};

export default ProjectContainer;
