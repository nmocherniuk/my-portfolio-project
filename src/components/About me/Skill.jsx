import React from 'react';
import classes from "./Skill.module.css";


function Skill({children, imgSrc}) {
    return (
        <div className={classes.skill}>
            <img src={imgSrc} alt={`${children} icon`} />
            <span>{children}</span>
        </div>
    )
}

export default Skill
