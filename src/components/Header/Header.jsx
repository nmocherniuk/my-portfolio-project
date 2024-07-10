import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../../store/navigation-slice";
import { scroller } from 'react-scroll';
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent, useAnimate} from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const overlay = useSelector(state => state.navigation.isOpen);
    const [scope, animate] = useAnimate();


   
    const dispatch = useDispatch();

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 481px)' });

  
    console.log(overlay);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(scrollY);
        const previous = scrollY.getPrevious();
        if(latest > previous) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    useEffect(()=> {
        const enterAnimation = async () => {
            await animate(scope.current, {opacity: [0, 1]}, {duration: 1.5, delay: 0.4})
        }

        enterAnimation();
    }, [overlay])

    const handleToggleBurger = () => {
        dispatch(toggleMenu());
    
    }

    const handleCloseNavigation = () => {
        dispatch(closeMenu());

    }

    const scrollTo = (element) => {
        scroller.scrollTo(element, {
            duration: 150,
            delay: 0,
            smooth: true,
            containerId: "container"
        });
    }

    return (
        <motion.header variants={{
            visible: {y: 0},
            hidden: {y: "-100%"}
        }} animate={hidden ? "hidden" : "visible"} 
        transition={{duration: 0.35, ease: "easeInOut"}}
        
        className={classes.header} >
     <Link to="/">
     <img
                className={classes.logo}
                src={logo}
                alt="logo"
                onClick={() => {
                    handleCloseNavigation();
                    scrollTo('home');
                }}
            />
     </Link>      
            <motion.button ref={scope}
                className={`${classes.hamburger} ${overlay ? classes.active : ''}`}
                onClick={handleToggleBurger}
            >   
            {overlay ? <IoArrowBackCircleSharp size={45} color="#D9D9D9"/> : <RxHamburgerMenu size={45} color="#D9D9D9"/>}
          
            </motion.button>
        </motion.header>
    );
}

export default Header;
