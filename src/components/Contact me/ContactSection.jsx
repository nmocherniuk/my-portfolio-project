import React, { useRef, lazy, Suspense } from 'react';
import { useInView } from 'framer-motion';

const Light = lazy(() => import('../../UI/Light.jsx'));
const Container = lazy(() => import('../../UI/Container.jsx'));
const Form = lazy(() => import('./Form'));
const SectionDescription = lazy(() => import('../../UI/SectionDescription.jsx'));
const AnimatedHeading = lazy(() => import('../../UI/AnimatedHeading.jsx'));

const ContactSection = () => {
    const descriptionRef = useRef(null);
    const isInViewDescription = useInView(descriptionRef, { once: true });

    return (
        <section id='contact'>
            <Suspense fallback={<div>Loading...</div>}>
                <Light color='turquoise' />
                <Container>
                    <AnimatedHeading isInView={isInViewDescription}>Contact with me</AnimatedHeading>
                    <SectionDescription ref={descriptionRef}>
                        Get in touch or shoot me an email directly on <span className='bold'>nazar.mocherniuk@gmail.com</span>.
                        I will get back to you as soon as possible.
                    </SectionDescription>
                    <Form />
                </Container>
            </Suspense>
        </section>
    );
};

export default ContactSection;
