import React from "react";
import Container from "../../UI/Container";
import classes from "./PortfolioSection.module.css";
import laptopImg from "../../assets/laptop.png";
import Button from "../../UI/Button";
import { FullpageSection } from "@ap.cx/react-fullpage";
const PortfolioSection = () => {
    return (
      
        <FullpageSection>
              <Container>
           
                <h2>Portfolio</h2>
                <p className="section-description"> Here you will find some of the personal and clients projects that I created with each
                    project containing its own case study.</p>
            <div className={classes["projects-container"]}>
                <article className={classes.project}>
                    <img className={classes.laptop} src={laptopImg} alt="Laptop" />
                    <div className={classes["project-info"]}>
                    <h3>Title the website</h3>
                    <p className={classes["project-description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <Button classesButton={classes.button}>See the details</Button> 
                    </div>  
                </article>

                <article className={classes.project}>
                    <img className={classes.laptop} src={laptopImg} alt="Laptop" />
                    <div className={classes["project-info"]}>
                    <h3>Title the website</h3>
                    <p className={classes["project-description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <Button classesButton={classes.button}>See the details</Button> 
                    </div>  
                </article>
                <article className={classes.project}>
                    <img className={classes.laptop} src={laptopImg} alt="Laptop" />
                    <div className={classes["project-info"]}>
                    <h3>Title the website</h3>
                    <p className={classes["project-description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <Button classesButton={classes.button}>See the details</Button> 
                    </div>  
                </article>
                <article className={classes.project}>
                    <img className={classes.laptop} src={laptopImg} alt="Laptop" />
                    <div className={classes["project-info"]}>
                    <h3>Title the website</h3>
                    <p className={classes["project-description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    <Button classesButton={classes.button}>See the details</Button> 
                    </div>  
                </article>
            </div>
            </Container>
        </FullpageSection>
     
    );
};


export default PortfolioSection;