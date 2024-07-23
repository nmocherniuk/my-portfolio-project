import React, { lazy, Suspense } from 'react';
import { motion as m } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import classes from './ProjectInfoSection.module.css';
import Skill from '../About me/Skill';

const InfoItem = lazy(() => import('./InfoItem'));
const Container = lazy(() => import('../../UI/Container'));



const ProjectInfoSection = ({ aboutProject, technologies, myRole, websiteUrl, githubUrl }) => {
    const infoItems = [
        {
            title: 'About Project',
            content: (
                <>
                    <p>{aboutProject}</p>
                    {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </>
            ),
            x: [-200, 0],
            className: 'about-project',
            duration: 0.8
        },
        {
            title: 'Technologies',
            content: <div className={classes['skills-container']}>{technologies.map((skill, index) => (<Skill key={index} imgSrc={skill.skillImgRef}>{skill.skillTitle}</Skill>))}</div>,
            x: [200, 0],
            className: 'technologies-project',
            duration: 0.8
        },
        {
            title: 'My Role',
            content: (
                <p>{myRole}</p>
            ),
            x: [-200, 0],
            className: 'role-project',
            duration: 1
        },
        {
            title: 'Website (optional)',
            content: <a href='#'>{websiteUrl}</a>,
            x: [200, 0],
            className: 'website-project',
            duration: 1
        },
        {
            title: 'GitHub',
            content: <a href='#'>{githubUrl}</a>,
            x: [200, 0],
            className: 'github-project',
            duration: 1.1
        }
    ];
    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <Container>
                    <div className={classes['details-container']}>
                        {infoItems.map((item, index) => (
                            <InfoItem key={index}
                                title={item.title}
                                content={item.content}
                                x={item.x}
                                className={item.className}
                                duration={item.duration} />
                        ))}
                    </div>
                    <footer className={classes.footer}>
                        <m.button whileInView={{ opacity: [0, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className={classes.button}>
                            <HashLink to='/#portfolio'>Back to home Page</HashLink>
                        </m.button>
                    </footer>
                </Container>
            </Suspense>
        </section>
    )
}

export default ProjectInfoSection;
