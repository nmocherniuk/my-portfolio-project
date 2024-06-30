import React from "react";
import classes from "./Skills.module.css";
import SKILLS_DATA from "../../data/skills-data";
import Skill from "./Skill";


const Skills = () => {
    return (
        <article className={classes["skills-article"]}>
            <h3>My Skills</h3>
            <div className={classes.skills}>
                {SKILLS_DATA.map( skill => (
                    <Skill imgSrc={skill.imgSrc}>{skill.title}</Skill>
                )) }
            </div>
        </article>
    );
};


export default Skills;