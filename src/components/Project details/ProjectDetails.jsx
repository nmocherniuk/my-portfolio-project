import React, { Fragment, useEffect, useRef, useState } from 'react';
import { motion as m, useInView, useAnimationControls } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HashLink } from 'react-router-hash-link';
import { useSwipeable } from 'react-swipeable';
import laptop from '../../assets/laptop_big.png';
import tablet from '../../assets/iPad-pro.png';
import mobile from '../../assets/iphone.png';
import classes from './ProjectDetails.module.css';
import Container from '../../UI/Container';
import Light from '../../UI/Light';
import handIcon from '../../assets/hand.png';
import SectionDescription from '../../UI/SectionDescription';

function ProjectDetails() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 641px)' });
    const controls = useAnimationControls()

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




    const switchDevice = (index) => {
        setCurrentDeviceIndex(index);
    };






    const handlers = useSwipeable({
        onSwipedRight: () => {
            switchDevice((currentDeviceIndex - 1 + devices.length) % devices.length)
            controls.start({ opacity: [0, 1], x: [-200, 0], duration: 0.7 });
        },
        onSwipedLeft: () => {
            switchDevice((currentDeviceIndex + 1) % devices.length)
            controls.start({ opacity: [0, 1], x: [200, 0], duration: 0.7 });
        }
    })

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    let mobileContent = <Fragment>   <m.img animate={controls} {...handlers}


        className={`${classes['is-mobile-devise']} ${classes[devices[currentDeviceIndex].imgTitle]}`} src={devices[currentDeviceIndex].imgSrc} alt={`${devices[currentDeviceIndex].imgTitle}`} />
        <m.div className={classes['swipe-hint']}>

            <span className={classes.swipe}>
                <div className={classes.path}></div>
                <img src={handIcon} alt='hand icon' className={classes['hand-icon']} />
            </span>
            Swipe devise
        </m.div></Fragment>

    const notMobileContent = (
        <Fragment>
            {devices.map((device, index) => (
                <m.img
                    key={device.imgTitle}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05, type: 'spring' }}
                    className={classes[device.imgTitle]}
                    src={device.imgSrc}
                    alt={device.imgTitle}
                />
            ))}
        </Fragment>
    );

    return (
        <Fragment>
            <section>
                <Light color='yellow' />
                <Container>
                    <m.h3
                        transition={{ duration: 0.5, delay: 0.15, type: 'spring' }}
                        animate={{ opacity: [0, 1], y: [-100, 0] }}
                        className={classes['project-title']}>Title the website</m.h3>
                    <SectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud </SectionDescription>
                    <m.div className={classes.devises} animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.6, delay: 0.35, type: 'spring' }}>

                        {isMobile && mobileContent}
                        {!isMobile && notMobileContent}

                    </m.div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className={classes["details-container"]}>
                        <m.div whileInView={{
                            opacity: [0, 1],
                            x: [-200, 0]
                        }}
                            viewport={{ once: true }}
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
                        </m.div>
                        <m.div
                            ref={ref}
                            whileInView={{
                                opacity: [0, 1],
                                x: [200, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                                type: "spring"
                            }}
                            className={classes["technologies-project"]}>
                            <h4  >Technologies</h4>
                        </m.div>
                        <m.div whileInView={{
                            opacity: [0, 1],
                            x: [-200, 0]
                        }}
                            viewport={{ once: true }}
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
                        </m.div>
                        <m.div
                            whileInView={{
                                opacity: [0, 1],
                                x: [200, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                type: "spring"
                            }}
                            className={classes["website-project"]}>
                            <h4>Website(optional)</h4>
                            <a href="#">https://link.gg.cool.com</a>
                        </m.div>
                        <m.div
                            whileInView={{
                                opacity: [0, 1],
                                x: [200, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.1,
                                delay: 0.15,
                                type: "spring"
                            }} className={classes["github-project"]}>
                            <h4>GitHub</h4>
                            <a href="#">https://link.gg.cool.com</a>
                        </m.div>
                    </div>
                    <div className={classes.footer}>

                        <m.button whileInView={{ opacity: [0, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }} className={classes.button}><HashLink to="/#portfolio">Back to home Page</HashLink></m.button>

                    </div>



                </Container>
            </section>

        </Fragment>
    )
}

export default ProjectDetails;
