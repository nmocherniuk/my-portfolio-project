import React from "react";
import classes from "./Projects.module.css";
import Project from "./Project";

function Projects({projects, isInViewRef, animationKey, animationRepeat}) {

  return (
    <ul className={classes["projects-container"]}>
      {projects.map((project, index) => (
        <Project key={`${animationKey}-${index}`} isInViewRef={isInViewRef} title={project.title} description={project.description} animationRepeat={animationRepeat} />
      ))}
    </ul>
  );
}

export default Projects;
