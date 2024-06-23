import React from "react";

const Button = ({classesButton, children}) => {
    return (
        <button className={`${classesButton}`}>{children}</button>
    );
};


export default Button;