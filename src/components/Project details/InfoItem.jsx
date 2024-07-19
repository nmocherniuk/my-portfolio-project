import React from 'react';
import { motion as m } from 'framer-motion';
import classes from './InfoItem.module.css';

const InfoItem = ({ title, content, x, className, duration }) => {
    return (
        <m.div
            whileInView={{ opacity: [0, 1], x }}
            viewport={{ once: true }}
            transition={{ duration, delay: 0.15, type: 'spring' }}
            className={classes[className]}
        >
            <h4>{title}</h4>
            {content}
        </m.div>
    )
}

export default InfoItem
