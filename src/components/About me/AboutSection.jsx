import React from "react";
import Container from "../../UI/Container.jsx";
import classes from './AboutSection.module.css';
import PersonalSummary from "./PersonalSummary.jsx";
import Skills from "./Skills.jsx";
import Certificates from "./Certificates.jsx";
import { FullpageSection } from "@ap.cx/react-fullpage";

const AboutSection = () => {
    return (
        <FullpageSection>
            <Container>
                <h2>About me</h2>
                <p className="section-description">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
                <div className={classes["article-container"]}>
                    <PersonalSummary />
                    <Skills />
                    {/* <Certificates /> */}
                </div>
            </Container>
        </FullpageSection>
    );
};


export default AboutSection;