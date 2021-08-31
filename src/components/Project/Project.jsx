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
      <button href={githubLink}>gitHub</button>
    </div>
  );
};

export default Project;
