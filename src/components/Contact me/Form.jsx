import React, { Fragment } from "react";
import classes from "./Form.module.css";
import formImg from "../../assets/form-photo.png";
import Button from "../../UI/Button";
import { useForm } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("mbjnbbve");
    if (state.succeeded) {
        return <span className={classes['response-form']}>Thank you for reaching out!</span>;
    }
    return (
        <Fragment>
            <div className={classes["form-container"]}>
                <img className={classes["form-image"]} src={formImg} alt="Notebook image" />
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes["form-input"]}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" prefix="Name" errors={state.errors} />
                    </div>
                    <div className={classes["form-input"]}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" prefix="Email" errors={state.errors}/>
                    </div>
                    <div className={classes["form-input"]}>
                        <label htmlFor="message">Massage</label>
                        <textarea name="message" id="message" placeholder="Enter Your Name" cols="30" rows="5" prefix="Message" errors={state.errors}/>
                    </div>
                    <Button classesButton={classes.button}>Submit</Button>
                </form>
            </div>
        </Fragment>
    );
};


export default Form;