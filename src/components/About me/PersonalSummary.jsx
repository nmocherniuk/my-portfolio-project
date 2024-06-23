import React from "react";
import classes from "./PersonalSummary.module.css";
import Button from "../../UI/Button";


const PersonalSummary = () => {
    return (
        <article className={classes.introduction}>
            <h3>Get to know me!</h3>
            <div className={classes["info-about-me"]}>
                <p>
                    I am a 19-year-old student currently residing in Ivano-Frankivsk, Ukraine.
                    Currently pursuing a Bachelor's degree in Informational System and Technologies at Vasyl Stefanyk Precarpathian National University.
                </p>
                <p>
                    Beyond university studying, I actively participate in IT courses and seminars to enhance my practical skills and stay updated with industry trends.
                </p>
                <p>
                    Excellent listening and learning skills. I communicate effectively both in team settings and on an individual basis.
                    My ability to motivate and utilize my skills and talents helps me achieve and exceed set objectives.
                </p>
            </div>
            <Button classesButton={classes["custom-button"]}>Download cv</Button>
        </article>
    );
};


export default PersonalSummary;