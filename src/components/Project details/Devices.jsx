import React, { Fragment, useState } from 'react';
import { motion as m, useAnimationControls } from 'framer-motion';
import classes from './Devices.module.css';
import { useSwipeable } from 'react-swipeable';
import handIcon from '../../assets/hand.png';
import { useMediaQuery } from 'react-responsive';
import laptop from '../../assets/laptop_big.png';
import tablet from '../../assets/iPad-pro.png';
import mobile from '../../assets/iphone.png';

const devices = [
    {
        imgSrc: laptop,
        imgTitle: 'laptop'
    },
    {
        imgSrc: tablet,
        imgTitle: 'tablet'
    },
    {
        imgSrc: mobile,
        imgTitle: 'mobile'
    }
];

const Devices = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 641px)' });
    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
    const controls = useAnimationControls();

    const switchDevice = (index) => {
        setCurrentDeviceIndex(index);
    };

    const handlers = useSwipeable({
        onSwipedRight: () => {
            switchDevice((currentDeviceIndex - 1 + devices.length) % devices.length);
            controls.start({ opacity: [0, 1], x: [-200, 0], duration: 0.7 });
        },
        onSwipedLeft: () => {
            switchDevice((currentDeviceIndex + 1) % devices.length);
            controls.start({ opacity: [0, 1], x: [200, 0], duration: 0.7 });
        }
    });

    return (
        <m.div className={classes.devises} animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.35, type: 'spring' }}>
            {isMobile ? (
                <Fragment>
                    <m.img
                        animate={controls}
                        {...handlers}
                        className={`${classes['is-mobile-devise']} ${classes[devices[currentDeviceIndex].imgTitle]}`}
                        src={devices[currentDeviceIndex].imgSrc}
                        alt={`${devices[currentDeviceIndex].imgTitle}`}
                    />
                    <m.div className={classes['swipe-hint']}>
                        <span className={classes.swipe}>
                            <div className={classes.path}></div>
                            <img src={handIcon} alt='hand icon' className={classes['hand-icon']} />
                        </span>
                        <p>Swipe device to change size here</p>
                    </m.div>
                </Fragment>
            ) : (
                <Fragment>
                    {devices.map((device, index) => (
                        <m.img
                            key={device.imgTitle}
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.05, type: 'spring' }}
                            className={classes[device.imgTitle]}
                            src={device.imgSrc}
                            alt={device.imgTitle}
                        />
                    ))}
                </Fragment>
            )}
        </m.div>
    );
};

export default Devices;
