import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import burgerIcon from "../../assets/icons/nav-bar-icon.svg";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="logo" />
            <img className={classes["nav-icon"]} src={burgerIcon} alt="burger icon" />
        </header>
    )
}

export default Header;