import React, { Fragment, useState, useRef } from 'react';
import { motion as m, useAnimationControls } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import laptop from '../../assets/laptop_big.png';
import tablet from '../../assets/iPad-pro.png';
import mobile from '../../assets/iphone.png';
import Light from '../../UI/Light';
import Container from '../../UI/Container';
import SectionDescription from '../../UI/SectionDescription';
import Devices from './Devices';
import classes from './ProjectAdaptiveSection.module.css';
import handIcon from '../../assets/hand.png';

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
    }
];

const ProjectAdaptiveSection = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 641px)' });
    const project = useSelector((state) => state.project.project);
    const swipeRef = useRef(null);



    return (
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
                <Devices />
            </Container>
        </section>
    );
};

export default ProjectAdaptiveSection;
