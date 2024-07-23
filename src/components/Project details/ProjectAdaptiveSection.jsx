import React, { lazy, Suspense } from 'react';
import { motion as m } from 'framer-motion';
import classes from './ProjectAdaptiveSection.module.css';

const Light = lazy(() => import('../../UI/Light'));
const Container = lazy(() => import('../../UI/Container'));
const SectionDescription = lazy(() => import('../../UI/SectionDescription'));
const Devices = lazy(() => import('./Devices'));

const ProjectAdaptiveSection = ({ title, description }) => {
    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <Light color='yellow' />
                <Container>
                    <m.h3
                        transition={{ duration: 0.5, delay: 0.15, type: 'spring' }}
                        animate={{ opacity: [0, 1], y: [-100, 0] }}
                        className={classes['project-title']}>
                        {title}
                    </m.h3>
                    <SectionDescription>
                        {description}
                    </SectionDescription>
                    <Devices />
                </Container>
            </Suspense>
        </section>
    );
};

export default ProjectAdaptiveSection;
