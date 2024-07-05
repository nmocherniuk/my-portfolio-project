import React, { Fragment, useEffect, useRef } from 'react';
import laptop from "../../assets/laptop_big.png";
import iPad from "../../assets/iPad-pro.png";
import iphone from "../../assets/iphone.png";
import Button from '../../UI/Button';
import classes from "./ProjectDetails.module.css";
import Container from '../../UI/Container';
import { FullpageSection } from "@ap.cx/react-fullpage";
import Light from '../../UI/Light';
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';


function ProjectDetails() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <Fragment>
            <section style={{ height: '100vh', padding: '1rem 0px' }} >
                <Light color="yellow" />
                <Container>
                    <motion.h3
                        transition={{ duration: 0.5, delay: 0.15, type: "spring" }}
                        animate={{ opacity: [0, 1], y: [-100, 0] }}
                        className={classes["project-title"]}>Title the website</motion.h3>
                    <motion.p animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud </motion.p>
                    <div className={classes.devises}>
                        <motion.img
                        animate={{opacity: [0, 1], y: [200, -185]}}
                        transition={{ duration: 0.6, delay: 0.35, type: "spring" }}
                        className={classes.ipad} src={iPad} alt="IPad" />
                        <motion.img  animate={{opacity: [0, 1]}}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring" }} className={classes.laptop} src={laptop} alt="Laptop" />
                        <motion.img  animate={{opacity: [0, 1], y: [200, -160]}}
                        transition={{ duration: 0.6, delay: 0.35, type: "spring" }} className={classes.iphone} src={iphone} alt="Iphone" />
                    </div>
                </Container>
            </section>
            <section style={{ height: '100vh', padding: '1rem 0px' }}>
                <Container>
                    <div className={classes["details-container"]}>
                        <motion.div animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : -200
                        }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                type: "spring"
                            }} className={classes["about-project"]}>
                            <h4>About Project</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proi~dent,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </motion.div>
                        <motion.div
                            animate={{
                                opacity: isInView ? 1 : 0,
                                x: isInView ? 0 : 200
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                type: "spring"
                            }}
                            className={classes["technologies-project"]}>
                            <h4>Technologies</h4>
                        </motion.div>
                        <motion.div animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : -200
                        }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                type: "spring"
                            }}
                            className={classes["role-project"]}>
                            <h4>My Role</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </motion.div>
                        <motion.div
                            animate={{
                                opacity: isInView ? 1 : 0,
                                x: isInView ? 0 : 200
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                type: "spring"
                            }}
                            className={classes["website-project"]}>
                            <h4>Website(optional)</h4>
                            <a href="#">https://link.gg.cool.com</a>
                        </motion.div>
                        <motion.div
                            animate={{
                                opacity: isInView ? 1 : 0,
                                x: isInView ? 0 : 200
                            }}
                            transition={{
                                duration: 1.1,
                                delay: 0.15,
                                type: "spring"
                            }} className={classes["github-project"]}>
                            <h4>GitHub</h4>
                            <a href="#">https://link.gg.cool.com</a>
                        </motion.div>
                    </div>
                    <div ref={ref} className={classes.footer}>

                    <motion.button animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} className={classes.button}><Link to="/">Back to home Page</Link></motion.button>
                        <motion.span animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }} className={classes["footer-copyright"]}>Copyright 2024. Mady by Nazar Mocherniuk</motion.span>
                    </div>



                </Container>
            </section>

        </Fragment>
    )
}

export default ProjectDetails;
