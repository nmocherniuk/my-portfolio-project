import React from 'react'
import { motion as m } from 'framer-motion';

const FooterSection = ({ title, content, children, delay }) => {
    return (
        <m.div
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <h4>{title}</h4>
            {content && <p>{content}</p>}
            {children}
        </m.div>
    );
};

export default FooterSection
