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
import { motion, useScroll, useTransform, useAnimate } from 'framer-motion';
import Container from "../../UI/Container.jsx";

const HeroArea = () => {

    const [typeEffect] = useTypewriter({
        words: ['Front-End Developer.'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 130
    });

    return (
        <section id="home">

            <Light color="purple" />
          <Container>
        
                
                <motion.div className={classes["hero-content"]}
                variants={{ hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25, type: "spring" }}
                    
                >
                    <div className={classes.greeting}>
                        <span>Hello,</span>
                        
                        <h1>I'm Nazar Mocherniuk</h1>
                        <span>And I'm a <span className={classes["text-typing"]}>{typeEffect}</span></span>
                    </div>
                    <p className={classes["hero-text"]}>
                        A dedicated React Developer crafting dynamic web solutions.
                        I specialize in turning design blueprints into responsive,
                        high-performance web applications with React.js.
                    </p>
                    <span className={classes["social-icons"]}>
                        <img src={instagramIcon} alt="Instagram icon" />
                        <img src={linkedInIcon} alt="LinkedIn icon" />
                        <img src={teregramIcon} alt="Telegram icon" />
                        <img src={gitHubIcon} alt="GitHub icon" />
                    </span>
                    <Button classesButton={classes.button}>Download cv</Button>
                </motion.div>
                <motion.div    variants={{ hidden: { opacity: 1, x: -100 }, visible: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25, type: "spring" }}  className={classes.photo}/>
             
            </Container>




        </section>

    );
};

export default HeroArea;

