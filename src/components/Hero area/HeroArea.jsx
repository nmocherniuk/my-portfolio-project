import React, { Fragment, useContext } from "react";
import { useTypewriter } from 'react-simple-typewriter';
import Light from "../../UI/Light.jsx";
import classes from "./HeroArea.module.css";
import instagramIcon from "../../assets/social-icons/pink-icons/instagram-icon.svg";
import linkedInIcon from "../../assets/social-icons/pink-icons/linkedIn-icon.svg";
import twitterIcon from "../../assets/social-icons/pink-icons/twitter-icon.svg";
import gitHubIcon from "../../assets/social-icons/pink-icons/github-icon.svg";
import teregramIcon from "../../assets/social-icons/pink-icons/telegram-icon.svg";
import Button from "../../UI/Button.jsx";
import { FullpageSection, FullpageContext } from "@ap.cx/react-fullpage";
import { motion, useScroll, useTransform } from 'framer-motion';
import { NewContext } from "../../UI/FullPageScroll.jsx";

const HeroArea = () => {
    const [typeEffect] = useTypewriter({
        words: ['Front-End Developer.'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 130
    });
   
    return (
        <FullpageSection id="home"  style={{ height: '100vh', padding: '1rem 0px' }}>
            <div className={classes.area}>
                <Light color="purple" />
                <div className={classes.container}>
                    <motion.div className={classes["hero-content"]}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25, type: "spring" }}
                        variants={{ hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0} }}
                        >
                        <div>
                            Hello,
                            <h1>I'm Nazar Mocherniuk</h1>
                            And I'm a <span>{typeEffect}</span>
                        </div>
                        <p className={classes["hero-text"]}>
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
                        <NewContext.Consumer>
                {
                  ctx => (
                    <button onClick={() => ctx.goto(ctx.slides[2])}>Goto Last</button>
                  )
                } 
              </NewContext.Consumer>
                        <Button classesButton={classes.button}>Download cv</Button>
                    </motion.div>
                    <div className={classes.photo}>

                    </div>
                </div>

            </div>


        </FullpageSection>

    );
};

export default HeroArea;

