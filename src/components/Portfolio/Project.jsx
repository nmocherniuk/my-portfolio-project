import React from "react";
import laptopImg from "../../assets/laptop.png";
import classes from "./Project.module.css";
import Button from "../../UI/Button";
import { FullpageSection } from "@ap.cx/react-fullpage"

function Project({ projectTitle, projectDescription }) {
  return (
    <article className={classes.project}>
      <img className={classes.laptop} src={laptopImg} alt="Laptop" />
      <div className={classes["project-info"]}>
        <h3 className={classes["project-title"]}>{projectTitle}te</h3>
        <p className={classes["project-description"]}>{projectDescription}</p>
        <Button classesButton={classes.button}>See the details</Button>
      </div>
    </article>
  );
}

export default Project;
