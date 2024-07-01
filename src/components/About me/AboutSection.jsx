import React, { Fragment } from "react";
import Container from "../../UI/Container.jsx";
import classes from "./AboutSection.module.css";
import PersonalSummary from "./PersonalSummary.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import { FullpageSection } from "@ap.cx/react-fullpage";
import Light from "../../UI/Light.jsx";

const AboutSection = () => {
  return (
    <FullpageSection id="about" style={{ height: '100vh'}}>
      <Fragment>
        <Light color="green"/> 
        <Container>
          <h2>About me</h2>
          <p className="section-description">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
          <div className={classes["article-container"]}>
            <PersonalSummary />
            <Skills />
            {/* <Certificates /> */}
          </div>
        </Container>
      </Fragment>
    </FullpageSection>
  );
};

export default AboutSection;
