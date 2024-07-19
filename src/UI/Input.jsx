import React from 'react';
import classes from './Input.module.css';

const Input = ({ label, name, id, placeholder, errors, type = null, textarea = false }) => {
    return (
        <div className={classes['form-input']}>
            <label htmlFor={id}>{label}</label>
            {!textarea && <input type={type} name={name} id={id} placeholder={placeholder} />}
            {textarea && <textarea name={name} id={id} placeholder={placeholder} cols='30' rows='5' />}
            {errors && errors[name] && (
                <span className={classes['error-message']}>{errors[name]}</span>
            )}
        </div>
    );
};

export default Input;
