import React, { Suspense, lazy } from 'react';
import { motion as m } from 'framer-motion';
import classes from './HeroSection.module.css';

const Light = lazy(() => import('../../UI/Light.jsx'));
const Container = lazy(() => import('../../UI/Container.jsx'));
const HeroText = lazy(() => import('./HeroText.jsx'));
const SocialIcons = lazy(() => import('../../UI/SocialIcons.jsx'));

const HeroSection = () => {
    return (
        <section id='home'>
            <Suspense fallback={<div>Loading...</div>}>
                <Light color='purple' />
                <Container>
                    <m.div
                        className={classes['hero-content']}
                        animate={{ opacity: [0, 1], x: [-200, 0] }}
                        transition={{ duration: 0.5, delay: 0.25, type: 'spring' }}
                    >
                        <HeroText />
                        <SocialIcons />
                        <button className={classes.button} href='/path/to/cv.pdf' download>
                            Download CV
                        </button>
                    </m.div>
                    <m.div
                        className={classes.photo}
                        animate={{ opacity: [0, 1], x: [200, 0] }}
                        transition={{ duration: 0.5, delay: 0.25, type: 'spring' }}
                    />
                </Container>
            </Suspense>
        </section>
    );
};

export default HeroSection;
