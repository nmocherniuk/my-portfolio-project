import React from "react";
import laptopImg from "../../assets/laptop.png";
import classes from "./Project.module.css";
import Button from "../../UI/Button";
import { FullpageSection } from "@ap.cx/react-fullpage"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"


function Project({ title, description, isInViewRef, animationRepeat }) {

  return (
    <li className={classes.project}>
  
        <motion.img
          animate={{
            opacity: (!animationRepeat ? (isInViewRef ? 1 : 0) : [0, 1]),
            x: (!animationRepeat ? (isInViewRef ? 0 : -200) : [-200, 0])
          }}
          transition={{
            duration: 1,
            delay: !animationRepeat ? 0.15 : 0.3,
            type: "spring"
          }}
          className={classes.laptop} src={laptopImg} alt="Laptop" />
    

      <div id="project-info">
        <motion.div
          animate={{
            opacity: (!animationRepeat ? (isInViewRef ? 1 : 0) : [0, 1]),
            x: (!animationRepeat ? (isInViewRef ? 0 : 200) : [200, 0])
          }}
          transition={{
            duration: 1,
            delay: !animationRepeat ? 0.15 : 0.3,
            type: "spring"
          }}
          className={classes["project-info"]}>
          <h3 className={classes["project-title"]}>{title}</h3>
          <p className={classes["project-description"]}>{description}</p>
          <Button classesButton={classes.button}>
            <NavLink to="/portfolio/details">
              See the details
            </NavLink>
          </Button>
        </motion.div>
      </div>

    </li>
  );
}

export default Project;
