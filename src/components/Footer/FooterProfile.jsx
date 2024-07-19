import React, { lazy, Suspense } from 'react';
import classes from './Footer.module.css';

const FooterSection = lazy(() => import('./FooterSection'));

const FooterProfile = ({ footerData }) => {
    return (
        <div className={classes['footer-profile']}>
            <Suspense fallback={<div>Loading...</div>}>
                {footerData.map((item, index) => (
                    <FooterSection
                        key={index}
                        title={item.title}
                        content={item.content}
                        delay={item.delay}
                    >
                        {item.button && (
                            <button className={classes.button}>
                                {item.button}
                            </button>
                        )}
                        {item.icons && item.icons}
                    </FooterSection>
                ))}
            </Suspense>
        </div>
    );
};

export default FooterProfile;
