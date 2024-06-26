import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css";
import Button from "./Button";
import { motion } from "framer-motion";


const Backdrop = props => {
    return ( 
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}


const ModalOverlay = props => {
    return (
        <motion.aside
            variants={{
                hidden: { opacity: 0, right: '-100%' },
                visible: { opacity: 1, right: 0 },
                exit: { opacity: 0, right: '-100%' }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut"}}
            className={classes.modal}
        >
            <div className={classes.content}>{props.children}</div>
        </motion.aside>
    );
};

const portalElement = document.getElementById('overlay')

const Modal = props => {

    return ( 
        <Fragment>
            ( {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)})
           
        </Fragment>
    )
};

export default Modal;