import React from "react";
import classes from "./Projects.module.css";
import Project from "./Project";

function Projects({projects}) {
  return (
    <ul className={classes["projects-container"]}>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} />
      ))}
    </ul>
  );
}

export default Projects;
