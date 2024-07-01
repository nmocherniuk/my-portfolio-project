import React from 'react'
import Overlay from '../../UI/Overlay'
import laptop from "../../assets/laptop.png";
import iPad from "../../assets/iPad-pro.png";
import iphone from "../../assets/iphone.png";
import Button from '../../UI/Button';
import classes from "./ProjectDetails.module.css";
import Container from '../../UI/Container';

function ProjectDetails() {
    return (
        <Overlay>
            <Container>
                <h3 className={classes["project-title"]}>Title the  website</h3>
                <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud </p>
                <div>
                    <img src={iPad} alt="IPad" />
                    <img src={laptop} alt="Laptop" />
                    <img src={iphone} alt="Iphone" />
                </div>
                <div className={classes["details-container"]}>
                    <div className={classes["about-project"]}>
                        <h4>About Project</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                    <div className={classes["technologies-project"]}>
                        <h4>Technologies</h4>

                    </div>
                    <div className={classes["role-project"]}>
                        <h4>My Role</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    </div>
                    <div className={classes["website-project"]}>
                        <h4>Website(optional)</h4>
                        <a href="#">https://link.gg.cool.com</a>
                    </div>
                    <div className={classes["github-project"]}>
                        <h4>GitHub</h4>
                        <a href="#">https://link.gg.cool.com</a>
                    </div>
                </div>
                <Button>Back to home Page</Button>
                <span>Copyright 2024. Mady by Nazar Mocherniuk</span>
            </Container>

        </Overlay>
    )
}

export default ProjectDetails
