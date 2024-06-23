import React from "react";
import classes from "./Skills.module.css";
import htmlIcon from "../../assets/skills-icons/html-icon.svg";
import cssIcon from "../../assets/skills-icons/css-icon.svg";
import javaScriptIcon from "../../assets/skills-icons/js-icon.svg";
import typeScriptIcon from "../../assets/skills-icons/ts-icon.svg";
import reactJsIcon from "../../assets/skills-icons/react-icon.svg";
import nextJsIcon from "../../assets/skills-icons/next-icon.svg";
import reduxIcon from "../../assets/skills-icons/redux-icon.svg";
import queryIcon from "../../assets/skills-icons/query-icon.svg";
import sassIcon from "../../assets/skills-icons/sass-icon.svg";
import tailwindIcon from "../../assets/skills-icons/tailwind-icon.svg";
import figmaIcon from "../../assets/skills-icons/figma-icon.svg";
import gitIcon from "../../assets/skills-icons/git-icon.svg";

const Skills = () => {
    return (
        <article className={classes["skills-article"]}>
            <h3>My Skills</h3>
            <div className={classes.skills}>
                <div className={classes.skill}>
                    <img src={htmlIcon} alt="HTML icon" />
                    <span>HTML</span>
                </div>
                <div className={classes.skill}><img src={cssIcon} alt="CSS icon" /> <span>CSS</span></div>
                <div className={classes.skill}><img src={javaScriptIcon} alt="Java Script icon" /> <span>Java Script</span></div>
                <div className={classes.skill}><img src={typeScriptIcon} alt="Type Script icon" /> <span>Type Script</span></div>
                <div className={classes.skill}><img src={reactJsIcon} alt="React.js icon" /> <span>React.js</span></div>
                <div className={classes.skill}><img src={nextJsIcon} alt="Next.js icon" /> <span>Next.js</span></div>
                <div className={classes.skill}><img src={reduxIcon} alt="Redux icon" /> <span>Redux</span></div>
                <div className={classes.skill}><img src={queryIcon} alt="TanStack Query icon" /> <span>TanStack Query</span></div>
                <div className={classes.skill}><img src={sassIcon} alt="SASS icon" /> <span>SASS</span></div>
                <div className={classes.skill}><img src={tailwindIcon} alt="TailWind icon" /> <span>TailWind</span></div>
                <div className={classes.skill}><img src={figmaIcon} alt="Figma icon" /> <span>Figma</span></div>
                <div className={classes.skill}><img src={gitIcon} alt="GIT icon" /> <span>GIT</span></div>
            </div>
        </article>
    );
};


export default Skills;