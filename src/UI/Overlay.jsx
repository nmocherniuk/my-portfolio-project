import React, { Children, Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Overlay.module.css";
import Button from "./Button";
import { motion } from "framer-motion";


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
        ReactDOM.createPortal(<div className={classes.overlay}>{children}</div>, portalElement)
    )
};

export default Overlay;