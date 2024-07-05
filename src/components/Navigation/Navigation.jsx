import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import Container from "../../UI/Container";
import Overlay from "../../UI/Overlay";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import scrollSection from "../../utils/scrollSection";
import { useDispatch, useSelector } from "react-redux";
import {closeMenu } from "../../store/navigation-slice";
import {FullpageContext} from "@ap.cx/react-fullpage"

function Navigation() {
  const dispatch = useDispatch();
  const fullpageContext = useContext(FullpageContext);
  function navigateHandler(){
    dispatch(closeMenu())
  }
  return (
    <Overlay>
      <nav className={classes.navigation}>
        <Container>
          <ul className={classes["nav-container"]}>
            <li onClick={navigateHandler}><HashLink to="/#home">Home</HashLink></li>
            <li onClick={navigateHandler}><HashLink to="/#about">About me</HashLink></li>
            <li onClick={navigateHandler}><HashLink to="/#portfolio">Portfolio</HashLink></li>
            <li onClick={navigateHandler}><HashLink to="/#contact">Contact me</HashLink></li>
          </ul>
        </Container>
      </nav>
    </Overlay>

  );
}

export default Navigation;


{/* <li><HashLink to={"#home"}>Home</HashLink></li>
<li><HashLink to={"#about"}>About me</HashLink></li>
<li><HashLink to={"#portfolio"}>Portfolio</HashLink></li>
<li><HashLink to={"#contact"}>Contact me</HashLink></li> */}

{/* <li>Home</li>
<li>About me</li>
<li>Portfolio</li>
<li>Contact me</li> */}