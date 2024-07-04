import React, { Fragment, useRef } from "react";
import Container from "../../UI/Container.jsx";
import classes from "./AboutSection.module.css";
import PersonalSummary from "./PersonalSummary.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import { FullpageSection } from "@ap.cx/react-fullpage";
import Light from "../../UI/Light.jsx";
import { motion } from "framer-motion";
import { useInView } from "framer-motion"


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  return (
    <FullpageSection id="about" style={{ height: '100vh', padding: '1rem 0px'}}>
      <Fragment>
        <Light color="green"/> 
        <Container>
          <motion.h2
            transition={{duration: 0.5, delay: 0.15, type: "spring"}}
            animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : -100}}
                >
          About me</motion.h2>
          <motion.p animate={{opacity: isInView ? 1 : 0}} 
          transition={{duration: 0.5, delay: 0.3}}
          className="section-description" ref={ref}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </motion.p>
          <div className={classes["article-container"]}>
            <PersonalSummary isInViewRef={isInView}/>
            <Skills isInViewRef={isInView}/>
            {/* <Certificates /> */}
          </div>
        </Container>
      </Fragment>
    </FullpageSection>
  );
};

export default AboutSection;
