import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import laptopImg from '../../assets/laptop.png';
import classes from './Project.module.css';

const Project = ({ title, description, projectIndex }) => {

  return (
    <li className={classes.project}>
      <m.img
        whileInView={{
          opacity: [0, 1],
          x: [-200, 0]
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
        }}
        className={classes.laptop}
        src={laptopImg}
        alt="Laptop"
      />

      <m.div
        whileInView={{
          opacity: [0, 1],
          x: [200, 0],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
        }}
        className={classes["project-info"]}
      >
        <h3 className={classes["project-title"]}>{title}</h3>
        <p className={classes["project-description"]}>{description}</p>
        <NavLink to={`${projectIndex}`} className={classes.button}>
          See the details
        </NavLink>
      </m.div>
    </li>
  );
}

export default Project;
