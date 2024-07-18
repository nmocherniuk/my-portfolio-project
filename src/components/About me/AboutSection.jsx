import React, { useRef, lazy, Suspense } from 'react';
import { useInView } from 'framer-motion';
import classes from './AboutSection.module.css';

const Light = lazy(() => import('../../UI/Light.jsx'));
const Container = lazy(() => import('../../UI/Container.jsx'));
const AnimatedHeading = lazy(() => import('../../UI/AnimatedHeading.jsx'));
const SectionDescription = lazy(() => import('../../UI/SectionDescription.jsx'));
const PersonalSummary = lazy(() => import('./PersonalSummary.jsx'));
const Skills = lazy(() => import('./Skills.jsx'));

const AboutSection = () => {
  const descriptionRef = useRef(null);
  const isInViewDescription = useInView(descriptionRef, { once: true });

  return (
    <section id='about'>
      <Suspense fallback={<div>Loading...</div>}>
        <Light color='green' />
        <Container>
          <AnimatedHeading isInView={isInViewDescription}>About me</AnimatedHeading>
          <SectionDescription ref={descriptionRef}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </SectionDescription>
          <div className={classes['article-container']}>
            <PersonalSummary />
            <Skills />
          </div>
        </Container>
      </Suspense>
    </section>
  );
};

export default AboutSection;
