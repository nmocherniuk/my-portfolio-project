import React, { Children, Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Overlay.module.css";
import Button from "./Button";
import { motion } from "framer-motion";
import { FullpageSection, FullpageContext } from "@ap.cx/react-fullpage";

// const ModalOverlay = props => {
//     return (
//         <motion.aside
//             variants={{
//                 hidden: { opacity: 0, right: '-100%' },
//                 visible: { opacity: 1, right: 0 },
//                 exit: { opacity: 0, right: '-100%' }
//             }}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.6, ease: "easeInOut"}}
//             className={classes.modal}
//         >
//             <div className={classes.content}>{props.children}</div>
//         </motion.aside>
//     );
// };

const portalElement = document.getElementById('overlay')

const Overlay = ({children}) => {
    return (
        ReactDOM.createPortal(<motion.div        variants={{
            hidden: { top: '-100%' },
            visible: { top: 0 },
            exit: { top: '-100%' }
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut"}} className={classes.overlay}> {children} </motion.div>, portalElement)
    )
};

export default Overlay;