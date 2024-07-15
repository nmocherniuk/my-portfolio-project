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
         whileInView={{ opacity: [0, 1],   x: [-200, 0]}}
         viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring"
          }}
          className={classes.laptop} src={laptopImg} alt="Laptop" />
    


        <motion.div
          whileInView={{
            opacity: [0, 1],
            x: [200, 0]
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
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


    </li>
  );
}

export default Project;
