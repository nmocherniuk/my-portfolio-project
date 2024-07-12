import React, { useRef } from "react";
import classes from "./Footer.module.css";
import Feedbacks from "./Feedbacks.jsx";
import instagramIcon from "../../assets/social-icons/white-icons/instagram-icon.svg";
import linkedInIcon from "../../assets/social-icons/white-icons/linkedIn-icon.svg";
import twitterIcon from "../../assets/social-icons/white-icons/twitter-icon.svg";
import gitHubIcon from "../../assets/social-icons/white-icons/github-icon.svg";
import teregramIcon from "../../assets/social-icons/white-icons/telegram-icon.svg";
import Button from "../../UI/Button.jsx";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { motion, useInView } from "framer-motion"
import Container from "../../UI/Container.jsx";


// style={{ height: '80vh' }}

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-footer" >
      <footer className={classes.footer}>
        <Container>
          <div className={classes["footer-profile"]}>
            <motion.div whileInView={{ opacity: [0, 1] }}
             viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <h4>Nazar Mocherniuk</h4>
              <p>A dedicated React Developer crafting dynamic web solutions. I specialize in turning design blueprints into responsive, high-performance web applications with React.js. </p>
            </motion.div>
            <motion.div whileInView={{ opacity: [0, 1] }}
             viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}>
              <h4 ref={ref}>View My CV</h4>
              <p>If you enjoyed browsing my site, feel free to check out my CV for more details about my work and experience.</p>
              <Button classesButton={classes.button}>Download cv</Button>
            </motion.div>
            <motion.div
             whileInView={{ opacity: [0, 1] }}
             viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h4>Social Media</h4>
              <span className={classes["social-icons"]}>
                <img src={instagramIcon} alt="Instagram icon" />
                <img src={linkedInIcon} alt="LinkedIn icon" />
                <img src={teregramIcon} alt="Telegram icon" />
                <img src={gitHubIcon} alt="GitHub icon" />
              </span>
            </motion.div>
          </div>
          <Feedbacks isInView={isInView} />
        </Container>
        <motion.span whileInView={{ opacity: [0, 1] }}
         viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}  className={classes["footer-copyright"]}>Copyright 2024. Mady by Nazar Mocherniuk</motion.span>
      </footer>
    </section>
  );
};


export default Footer;