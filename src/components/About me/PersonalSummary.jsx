import React from 'react';
import { motion as m } from 'framer-motion';
import classes from './PersonalSummary.module.css';

const PersonalSummary = () => {
    const paragraphs = [
        "I am a 19-year-old student currently residing in Ivano-Frankivsk, Ukraine. Currently pursuing a Bachelor's degree in Informational System and Technologies at Vasyl Stefanyk Precarpathian National University.",
        "Beyond university studying, I actively participate in IT courses and seminars to enhance my practical skills and stay updated with industry trends.",
        "Excellent listening and learning skills. I communicate effectively both in team settings and on an individual basis. My ability to motivate and utilize my skills and talents helps me achieve and exceed set objectives."
    ];

    return (
        <m.article
            className={classes.introduction}
            whileInView={{
                opacity: [0, 1],
                x: [-200, 0]
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1,
                delay: 0.15,
                type: "spring"
            }}
        >
            <h3>Get to know me!</h3>
            <m.div className={classes["info-about-me"]}>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </m.div>
            <button className={classes["custom-button"]}>Download cv</button>
        </m.article>
    );
};

export default PersonalSummary;
