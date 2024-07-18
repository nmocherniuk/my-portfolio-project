import React from 'react';
import classes from "./Skill.module.css";

const Skill = ({ children, imgSrc }) => {
    return (
        <figure className={classes.skill}>
            <img src={imgSrc} alt={`${children} icon`} />
            <figcaption>{children}</figcaption>
        </figure>
    );
}

export default Skill;
