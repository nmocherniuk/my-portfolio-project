import React, { Fragment } from "react";
import { useTypewriter } from 'react-simple-typewriter';
import Light from "../../UI/Light.jsx";
import classes from "./HeroArea.module.css";
import instagramIcon from "../../assets/social-icons/pink-icons/instagram-icon.svg";
import linkedInIcon from "../../assets/social-icons/pink-icons/linkedIn-icon.svg";
import twitterIcon from "../../assets/social-icons/pink-icons/twitter-icon.svg";
import gitHubIcon from "../../assets/social-icons/pink-icons/github-icon.svg";
import teregramIcon from "../../assets/social-icons/pink-icons/telegram-icon.svg";
import Button from "../../UI/Button.jsx";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { motion, useScroll, useTransform } from 'framer-motion';


const HeroArea = () => {
    const { scrollY } = useScroll();
    const yArea = useTransform(scrollY, [0, 200], [0, -120]);
    const scaleText = useTransform(scrollY, [0, 300, 500], [0.9, 1, 1.1]);
    const opacityArea = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    const [typeEffect] = useTypewriter({
        words: ['Front-End Developer.'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 130
    });

    return (  
        <FullpageSection id="hero">
            <div className={classes.area}>
            <Light color="purple"/>
                    <div className={classes.container}>
                        <motion.div className={classes["hero-content"]}
                         initial="hidden"
                         animate="visible"
                         transition={{ duration: 0.5, delay: 0.25 }}
                         variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                         style={{ y: yArea, scale: scaleText, opacity: opacityArea }}>
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