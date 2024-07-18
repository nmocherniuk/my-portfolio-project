import React from 'react'
import { motion as m } from 'framer-motion';

const AnimatedHeading = ({ isInView, children }) => {
    return (
        <m.h2
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -200 }}
            transition={{ duration: 0.5, delay: 0.15, type: 'spring' }}
        >
            {children}
        </m.h2>
    );
};

export default AnimatedHeading;
