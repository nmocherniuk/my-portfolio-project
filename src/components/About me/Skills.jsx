import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion as m } from 'framer-motion';
import classes from './Skills.module.css';

const Skill = lazy(() => import('./Skill'));

const Skills = () => {
    const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        const fetchSkillsData = async () => {
            try {
                const module = await import('../../data/skills-data.js');
                setSkillsData(module.default);
            } catch (error) {
                console.error('Error loading skills data:', error);
            }
        };

        fetchSkillsData();
    }, []);

    return (
        <m.article
            className={classes['skills-article']}
            whileInView={{
                opacity: [0, 1],
                x: [200, 0]
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1,
                delay: 0.15,
                type: 'spring'
            }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <h3>My Skills</h3>
                <div className={classes.skills}>
                    {skillsData ? (
                        skillsData.map((skill) => (
                            <Skill key={skill.title} imgSrc={skill.imgSrc}>
                                {skill.title}
                            </Skill>
                        ))
                    ) : (
                        <div>Loading skills...</div>
                    )}
                </div>
            </Suspense>
        </m.article>
    );
};

export default Skills;
