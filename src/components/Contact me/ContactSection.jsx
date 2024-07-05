import React, { useRef } from "react";
import Container from "../../UI/Container";
import Form from "./Form";
import { FullpageSection } from "@ap.cx/react-fullpage";
import Light from "../../UI/Light";
import { motion, useInView } from "framer-motion"


const ContactSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    return (
        <section style={{ height: '100vh', padding: '1rem 0px' }}>
            <Light color="turquoise" style={{ height: '100vh' }} />
            <Container>
                <motion.h2
                    transition={{ duration: 0.5, delay: 0.15, type: "spring" }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
                >Contact with me</motion.h2>
                <motion.p animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }} className="section-description" ref={ref}>Get in touch or shoot me an email directly on <span className='bold'>nazar.mocherniuk@gmail.com</span>.
                    I will get back to you as soon as possible</motion.p>
                <Form isInViewRef={isInView}/>
            </Container>
        </section>
    );
};


export default ContactSection;