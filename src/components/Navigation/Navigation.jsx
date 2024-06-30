import React from "react";
import classes from "./Navigation.module.css";
import Container from "../../UI/Container";
import Overlay from "../../UI/Overlay";

function Navigation() {
  return (
    <Overlay>
      <nav className={classes.navigation}>
        <Container>
          <ul className={classes["nav-container"]}>
            <li>Home</li>
            <li>About me</li>
            <li>Portfolio Projects</li>
            <li>Contact me</li>
          </ul>
        </Container>
      </nav>
    </Overlay>

  );
}

export default Navigation;
