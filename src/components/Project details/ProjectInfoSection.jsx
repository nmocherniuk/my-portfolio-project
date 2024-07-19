import React from 'react'
import classes from './ProjectInfoSection.module.css';
import { motion as m } from 'framer-motion';
import InfoItem from './InfoItem';
import Container from '../../UI/Container';
import { HashLink } from 'react-router-hash-link';

const infoItems = [
    {
        title: 'About Project',
        content: (
            <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </>
        ),
        x: [-200, 0],
        className: "about-project",
        duration: 0.8
    },
    {
        title: 'Technologies',
        content: null,
        x: [200, 0],
        className: "technologies-project",
        duration: 0.8
    },
    {
        title: 'My Role',
        content: (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        ),
        x: [-200, 0],
        className: "role-project",
        duration: 1
    },
    {
        title: 'Website (optional)',
        content: <a href="#">https://link.gg.cool.com</a>,
        x: [200, 0],
        className: "website-project",
        duration: 1
    },
    {
        title: 'GitHub',
        content: <a href="#">https://link.gg.cool.com</a>,
        x: [200, 0],
        className: "github-project",
        duration: 1.1
    }
];

const ProjectInfoSection = () => {
    return (
        <section>
            <Container>
                <div className={classes["details-container"]}>
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
                        transition={{ duration: 0.5, delay: 0.3 }} className={classes.button}><HashLink to="/#portfolio">Back to home Page</HashLink></m.button>
                </footer>
            </Container>
        </section>
    )
}

export default ProjectInfoSection
