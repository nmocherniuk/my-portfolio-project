import React from "react";
import classes from "./Feedbacks.module.css";
import quotationMark from "../../assets/quotation-mark.svg";
import firstPhoto from "../../assets/user-faces/first-photo.png";
import secondPhoto from "../../assets/user-faces/second-photo.png";
import thirdPhoto from "../../assets/user-faces/third-photo.png";
import {motion} from "framer-motion"

const Feedbacks = ({isInView}) => {
    return (
        <div className={classes["feedbacks-container"]}>
            <motion.div animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} className={classes["feedback-item"]}>
                <div className={classes.rectangle} />
                <div className={classes["feedback-content"]}>
                    <img className={classes["quotation-mark"]} src={quotationMark} alt="Quotation mark" />
                    <img className={classes["customer-photo"]} src={firstPhoto} alt="First customer" />
                    <span className={classes["customer-feedback"]}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    </span>
                    <span className={classes.customer}>
                        - Supervisor
                    </span>
                </div>
            </motion.div>
            <motion.div 
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.15 }} 
            className={classes["feedback-item"]}>
                <div className={classes.rectangle} />
                <div className={classes["feedback-content"]}>
                    <img className={classes["quotation-mark"]} src={quotationMark} alt="Quotation mark" />
                    <img className={classes["customer-photo"]} src={secondPhoto} alt="Second customer" />
                    <span className={classes["customer-feedback"]}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </span>
                    <span className={classes.customer}>
                        - Supervisor
                    </span>
                </div>
            </motion.div>
            <motion.div 
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={classes["feedback-item"]}>
                <div className={classes.rectangle} />
                <div className={classes["feedback-content"]}>
                    <img className={classes["quotation-mark"]} src={quotationMark} alt="Quotation mark" />
                    <img className={classes["customer-photo"]} src={thirdPhoto} alt="Third customer" />
                    <span className={classes["customer-feedback"]}>
                        "quis nostrud exercitation ullamco laboris nis  nostrud  nostrud  nostrud  nostrud nostrud”
                    </span>
                    <span className={classes.customer}>
                        - Colleague
                    </span>
                </div>
            </motion.div>
        </div>
    );
};


export default Feedbacks;