import React from "react";
import "./Project.css";

const Project = ({ img, link, title, desc, githubLink }) => {
  return (
    <div className="project-content">
      <a href={link}>
        <img src={img} alt="img" />
      </a>
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href={githubLink}>gitHubLink</a>
    </div>
  );
};

export default Project;
