import React, { forwardRef } from 'react';
import { motion as m } from 'framer-motion';
import classes from './SectionDescription.module.css';

const SectionDescription = forwardRef(({ children }, ref) => {
    return (
        <m.p
            className={classes['section-description']}
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            ref={ref}
        >
            {children}
        </m.p>
    );
});

export default SectionDescription;
