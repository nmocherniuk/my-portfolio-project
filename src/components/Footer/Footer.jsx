import React from "react";
import classes from "./Footer.module.css";
import Feedbacks from "./Feedbacks.jsx";
import instagramIcon from "../../assets/social-icons/white-icons/instagram-icon.svg";
import linkedInIcon from "../../assets/social-icons/white-icons/linkedIn-icon.svg";
import twitterIcon from "../../assets/social-icons/white-icons/twitter-icon.svg";
import gitHubIcon from "../../assets/social-icons/white-icons/github-icon.svg";
import teregramIcon from "../../assets/social-icons/white-icons/telegram-icon.svg";
import Button from "../../UI/Button.jsx";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes["footer-profile"]}>
          <div>
            <h4>Nazar Mocherniuk</h4>
            <p>A dedicated React Developer crafting dynamic web solutions. I specialize in turning design blueprints into responsive, high-performance web applications with React.js. </p>
          </div>
          <div>
            <h4>View My CV</h4>
            <p>If you enjoyed browsing my site, feel free to check out my CV for more details about my work and experience.</p>
            <Button classesButton={classes.button}>Download cv</Button>
          </div>
          <div>
            <h4>Social Media</h4>
            <span className={classes["social-icons"]}>
              <img src={instagramIcon} alt="Instagram icon" />
              <img src={linkedInIcon} alt="LinkedIn icon" />
              <img src={teregramIcon} alt="Telegram icon" />
              <img src={gitHubIcon} alt="GitHub icon" />
            </span>
          </div>
        </div>
        <Feedbacks />
      </div>
      <span className={classes["footer-copyright"]}>Copyright 2024. Mady by Nazar Mocherniuk</span>
    </footer>
  );
};


export default Footer;