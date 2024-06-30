import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView} from "framer-motion";

const SlideControl = ({ children }) => {
    const ref = useRef();
    const slideControl = useAnimation();
    const isInView = useInView(ref, {once: true});
   
    useEffect(() => {
        if (isInView) {
            slideControl.start("visible")
        }
    }, [isInView]);
    
    return (
        <motion.div ref={ref} variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
        }}
            initial="hidden"
            animate={slideControl}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "#008081cc",
                zIndex: 20
            }}
        >
            {children}
        </motion.div>
    )
}

export default SlideControl;