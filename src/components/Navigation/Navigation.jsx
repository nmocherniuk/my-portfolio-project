import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import Container from "../../UI/Container";
import Overlay from "../../UI/Overlay";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/navigation-slice";


const Navigation = () => {
  const dispatch = useDispatch();


  function navigateHandler(slideIndex) {
    dispatch(closeMenu());
  }

  return (
    <Overlay>
      <nav className={classes.navigation}>
        <Container>
          <ul className={classes["nav-container"]}>
            <li onClick={() => navigateHandler(0)}>Home</li>
            <li onClick={() => navigateHandler(1)}>About me</li>
            <li onClick={() => navigateHandler(2)}>Portfolio</li>
            <li onClick={() => navigateHandler(3)}>Contact me</li>
          </ul>
        </Container>
      </nav>
    </Overlay>
  );
}

export default Navigation;
