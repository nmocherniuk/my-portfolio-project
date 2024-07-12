import React from "react";
import classes from "./Skills.module.css";
import SKILLS_DATA from "../../data/skills-data";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = ({ isInViewRef }) => {
    return (
        <motion.article className={classes["skills-article"]}
        whileInView={{
            opacity: [0, 1],
            x: [200, 0]
        }}
        viewport={{ once: true }}
        transition={{
            duration: 1,
            delay: 0.15,
            type: "spring"
        }}>
            <h3>My Skills</h3>
            <motion.div
         

                className={classes.skills}>
                {SKILLS_DATA.map(skill => (
                    <Skill key={skill.title} imgSrc={skill.imgSrc}>{skill.title}</Skill>
                ))}
            </motion.div>
        </motion.article>
    );
};


export default Skills;