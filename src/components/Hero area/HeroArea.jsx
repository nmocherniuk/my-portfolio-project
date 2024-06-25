import React, { Fragment } from "react";
import Light from "../../UI/Light.jsx";
import classes from "./HeroArea.module.css";
import instagramIcon from "../../assets/social-icons/pink-icons/instagram-icon.svg";
import linkedInIcon from "../../assets/social-icons/pink-icons/linkedIn-icon.svg";
import twitterIcon from "../../assets/social-icons/pink-icons/twitter-icon.svg";
import gitHubIcon from "../../assets/social-icons/pink-icons/github-icon.svg";
import teregramIcon from "../../assets/social-icons/pink-icons/telegram-icon.svg";
import Button from "../../UI/Button.jsx";
import { FullpageSection } from "@ap.cx/react-fullpage";

const HeroArea = () => {
    return (  
        <FullpageSection>
            <div className={classes.area} id="hero">
            <Light color="purple"/>
                    <div className={classes.container}>
                        <div className={classes["hero-content"]}>
                            <div>
                                Hello,
                                <h1>I'm Nazar Mocherniuk</h1>
                                And I'm a <span>Front-End Developer.</span>
                            </div>
                            <p>
                                A dedicated React Developer crafting dynamic web solutions.<br />
                                I specialize in turning design blueprints into responsive,<br />
                                high-performance web applications with React.js.
                            </p>
                            <span className={classes["social-icons"]}>
                                <img src={instagramIcon} alt="Instagram icon" />
                                <img src={linkedInIcon} alt="LinkedIn icon" />
                                <img src={teregramIcon} alt="Telegram icon" />
                                <img src={gitHubIcon} alt="GitHub icon" />
                            </span>
                                <Button classesButton={classes.button}>Download cv</Button>
                        </div>
                        <div className={classes.photo}>

                        </div>
                    </div>
                
            </div>


        </FullpageSection>

    );
};

export default HeroArea;