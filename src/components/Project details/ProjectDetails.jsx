import React, { Fragment, useEffect, useRef, useState } from 'react';
import laptop from "../../assets/laptop_big.png";
import tablet from "../../assets/iPad-pro.png";
import mobile from "../../assets/iphone.png";
import Button from '../../UI/Button';
import classes from "./ProjectDetails.module.css";
import Container from '../../UI/Container';
import { FullpageSection } from "@ap.cx/react-fullpage";
import Light from '../../UI/Light';
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { useSwipeable } from 'react-swipeable';
import { MdSwipe } from "react-icons/md";
import handIcon from "../../assets/hand.png"
function ProjectDetails() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 481px)' });

    const swipeRef = useRef(null)

    const devices = [
        {
            imgSrc: laptop,
            imgTitle: 'laptop'
        }, {
            imgSrc: tablet,
            imgTitle: 'tablet'
        }, {
            imgSrc: mobile,
            imgTitle: 'mobile'
        }];

        console.log(2222222222);
        
        useEffect(() => {
            if (swipeRef.current) {
                const element = swipeRef.current.getBoundingClientRect();
        
        
                console.log(element);
            }
          }, []);

    const switchDevice = (index) => {
        setCurrentDeviceIndex(index);
    };


    const handlers = useSwipeable({
        onSwipedRight: () => switchDevice((currentDeviceIndex - 1 + devices.length) % devices.length),
        onSwipedLeft: () => switchDevice((currentDeviceIndex + 1) % devices.length)
    })


    return (
        <Fragment>
            <section>
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
                        {/* <FaArrowAltCircleLeft size={'10vw'} className={classes.arrow}/> */}

                        <motion.img {...handlers}
                            
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 0.6, delay: 0.35, type: "spring" }}
                            className={classes[`${devices[currentDeviceIndex].imgTitle}`]} src={devices[currentDeviceIndex].imgSrc} alt={`${devices[currentDeviceIndex].imgTitle}`} />
                        <motion.div   animate={{ opacity: [0, 1] }}
                            transition={{ duration: 0.6, delay: 0.35, type: "spring" }} className={classes["swipe-hint"]} ref={swipeRef}>

                            <div className={classes.swipe}>
                                <div className={classes.path}></div>
                                <img src={handIcon} alt="hand icon" className={classes['hand-icon']} />
                            </div>
                            Swipe devise
                        </motion.div>
                        {/* <motion.img  animate={{opacity: [0, 1]}}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring" }} className={classes.laptop} src={laptop} alt="Laptop" />
                        <motion.img  animate={{opacity: [0, 1]}}
                        transition={{ duration: 0.6, delay: 0.35, type: "spring" }} className={classes.iphone} src={iphone} alt="Iphone" /> */}
                        {/* <FaArrowAltCircleRight size={'10vw'} color={'#333333'} className={classes.arrow}/> */}
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className={classes["details-container"]}>
                        <motion.div  animate={{
                            opacity: isInView ? 1 : 0,
                            x: isInView ? 0 : -200
                        }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                type: "spring"
                            }} className={classes["about-project"]}>
                            <h4 >About Project</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proi~dent,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </motion.div>
                        <motion.div
                         ref={ref}
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
                            <h4  >Technologies</h4>
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
                    <div  className={classes.footer}>

                        <motion.button animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }} className={classes.button}><HashLink to="/#portfolio">Back to home Page</HashLink></motion.button>
                        <motion.span animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }} className={classes["footer-copyright"]}>Copyright 2024. Mady by Nazar Mocherniuk</motion.span>
                    </div>



                </Container>
            </section>

        </Fragment>
    )
}

export default ProjectDetails;
{/* <motion.img
animate={{opacity: [0, 1], y: [200, -185]}}
transition={{ duration: 0.6, delay: 0.35, type: "spring" }}
className={classes.ipad} src={iPad} alt="IPad" />
<motion.img  animate={{opacity: [0, 1]}}
transition={{ duration: 0.6, delay: 0.3, type: "spring" }} className={classes.laptop} src={laptop} alt="Laptop" />
<motion.img  animate={{opacity: [0, 1], y: [200, -160]}}
transition={{ duration: 0.6, delay: 0.35, type: "spring" }} className={classes.iphone} src={iphone} alt="Iphone" /> */}