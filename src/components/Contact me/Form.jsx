import React, { Fragment } from "react";
import classes from "./Form.module.css";
import formImg from "../../assets/form-photo.png";
import Button from "../../UI/Button";

const Form = () => {
    return (
        <Fragment>
            <div className={classes["form-container"]}>
            <img className={classes["form-image"]} src={formImg} alt="Form image" />
            <form className={classes.form}>
                <div className={classes["form-input"]}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" />
                </div>
                <div className={classes["form-input"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                </div>
                <div className={classes["form-input"]}>
                    <label htmlFor="message">Massage</label>
                    <textarea name="message" id="message" placeholder="Enter Your Name" cols="30" rows="5" />
                </div>
            <Button classesButton={classes.button}>Submit</Button>
            </form>
            </div>
 
        </Fragment>
    );
};


export default Form;