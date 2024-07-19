import React, { Suspense, lazy } from 'react';
import { useForm } from '@formspree/react';
import { motion as m } from 'framer-motion';
import formImg from '../../assets/form-photo.png';
import classes from './Form.module.css';

const Input = lazy(() => import('../../UI/Input'));

const Form = () => {
    const [state, handleSubmit] = useForm('mbjnbbve');

    if (state.succeeded) {
        return (
            <m.span
                className={classes['response-form']}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Thank you for reaching out!
            </m.span>
        );
    }

    const formFields = [
        { label: 'Name', type: 'text', name: 'name', id: 'name', placeholder: 'Enter Your Name' },
        { label: 'Email', type: 'email', name: 'email', id: 'email', placeholder: 'Enter Your Email' },
        { label: 'Message', type: 'text', name: 'message', id: 'message', placeholder: 'Enter Your Message', textarea: true },
    ];

    return (
        <m.div
            className={classes['form-container']}
            transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            viewport={{ once: true }}
        >
            <img className={classes['form-image']} src={formImg} alt='Form image' />
            <form className={classes.form} onSubmit={handleSubmit}>
                <Suspense fallback={<div>Loading...</div>}>
                    {formFields.map((field, index) => (
                        <Input
                            key={index}
                            label={field.label}
                            type={field.type}
                            name={field.name}
                            id={field.id}
                            placeholder={field.placeholder}
                            errors={state.errors}
                            textarea={field.textarea}
                        />
                    ))}
                </Suspense>
                <button className={classes.button}>Submit</button>
            </form>
        </m.div>
    );
};

export default Form;
