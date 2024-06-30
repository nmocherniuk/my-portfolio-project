import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import burgerIcon from "../../assets/icons/nav-bar-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../../store/navigation-slice";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [animate, setAnimate] = useState(false);
    const dispatch = useDispatch();


    const handleToggleBurger = () => {
        dispatch(toggleMenu())
        setAnimate(state=> !state)
    }

    const handleCloseNavigation = () => {
        dispatch(closeMenu())
        setAnimate(false)
    }


    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="logo" onClick={handleCloseNavigation}/>
            <button className={`${classes.hamburger} ${animate ? classes.active : ''}`} onClick={handleToggleBurger}>
                <span className={classes["first-line"]}></span>
                <span className={classes["second-line"]}></span>
                <span className={classes["third-line"]}></span>
                {animate && <span>back</span>}
                </button>

        </header>
    )
}

export default Header;