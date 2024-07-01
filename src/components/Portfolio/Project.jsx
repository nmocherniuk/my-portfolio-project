import React from "react";
import laptopImg from "../../assets/laptop.png";
import classes from "./Project.module.css";
import Button from "../../UI/Button";
import { FullpageSection } from "@ap.cx/react-fullpage"
import { NavLink } from "react-router-dom";

function Project({ title, description }) {
  return (
    <li className={classes.project}>
      <img className={classes.laptop} src={laptopImg} alt="Laptop" />
      <div className={classes["project-info"]}>
        <h3 className={classes["project-title"]}>{title}te</h3>
        <p className={classes["project-description"]}>{description}</p>
        <Button classesButton={classes.button}>
          <NavLink to="/portfolio/details">
          See the details
          </NavLink>
        </Button>
      </div>
    </li>
  );
}

export default Project;
