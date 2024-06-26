import React from "react";
import classes from "./Navigation.module.css";
import Container from "../../UI/Container";

function Navigation() {
  return (
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
  );
}

export default Navigation;
