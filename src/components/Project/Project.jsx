import React from "react";
import "./Project.css";

const Project = ({ img, link, title, desc }) => {
  return (
    <div className="project-content">
      <a href={link}>
        <img src={img} alt="img" />
      </a>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Project;
