import React, { Fragment } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import classes from './HeroText.module.css';

function HeroText() {

    const [typeEffect] = useTypewriter({
        words: ['Front-End Developer.'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 130
    });

    return (
        <Fragment>
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
        </Fragment>
    );
};

export default HeroText;
