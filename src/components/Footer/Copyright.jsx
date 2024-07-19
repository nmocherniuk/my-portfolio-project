import React from 'react';
import { motion as m } from 'framer-motion';
import classes from './Copyright.module.css';

const Copyright = () => {
    return (
        <m.span
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={classes['footer-copyright']}
        >
            Copyright 2024. Made by Nazar Mocherniuk
        </m.span>
    );
};

export default Copyright;
