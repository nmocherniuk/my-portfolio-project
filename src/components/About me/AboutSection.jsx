import React, { Fragment, useRef } from "react";
import Container from "../../UI/Container.jsx";
import classes from "./AboutSection.module.css";
import PersonalSummary from "./PersonalSummary.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import Light from "../../UI/Light.jsx";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const AboutSection = () => {
  const topRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about"  ref={topRef}>
      <Fragment>
        <Light color="green"/> 
        <Container>
          <motion.h2
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -200 }}
            transition={{ duration: 0.5, delay: 0.15, type: "spring" }}
          >
            About me
          </motion.h2>
          <motion.p
            ref={ref}
            
           whileInView={{ opacity: [0, 1]}}
           viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="section-description"
          >
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </motion.p>
          <div  className={classes["article-container"]}>
            <PersonalSummary  />
            <Skills/>
            {/* <Certificates /> */}
          </div>
        </Container>
      </Fragment>
    </section>
  );
};

export default AboutSection;
