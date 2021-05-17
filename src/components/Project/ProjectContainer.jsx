import React from "react";
import { Element } from "react-scroll";
import Lavilla from "../../assets/projects/lavilla.png";
import ToDoApp from "../../assets/projects/ToDoapp.png";
import todoApp from "../../assets/projects/todoApp.png";
import Project from "./Project";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      img: todoApp,
      title: "todoApp",
      link: "https://arifur-ra.github.io/todoApp/",
      desc: "using HTML CSS JavaScript, React, Material-UI Technology",
    },
    {
      img: ToDoApp,
      title: "ToDoApp",
      link: "https://arifur-ra.github.io/My_WebDev/Java_Script/11_Local_Storae/localstorage/localstorage.html",
      desc: "using HTML CSS JavaScript Technology",
    },
    {
      img: todoApp,
      title: "todoApp",
      link: "https://arifur-ra.github.io/todoApp/",
      desc: "using HTML CSS JavaScript, React, Material-UI Technology",
    },
    {
      img: ToDoApp,
      title: "ToDoApp",
      link: "https://arifur-ra.github.io/My_WebDev/Java_Script/11_Local_Storae/localstorage/localstorage.html",
      desc: "using HTML CSS JavaScript Technology",
    },
    {
      img: todoApp,
      title: "todoApp",
      link: "https://arifur-ra.github.io/todoApp/",
      desc: "using HTML CSS JavaScript, React, Material-UI Technology",
    },
    {
      img: Lavilla,
      title: "La-Villa",
      link: "https://arifur-ra.github.io/My_WebDev/HTML&CSS/Final_Lavilla/public/index.html",
      desc: "using HTML CSS SASS Technology",
    },
  ];
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
              />,
            ];
          })}
        </div>
      </Element>
    </div>
  );
};

export default ProjectContainer;
