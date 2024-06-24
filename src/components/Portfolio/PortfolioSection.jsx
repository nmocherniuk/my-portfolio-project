import React, { Fragment } from "react";
import Container from "../../UI/Container";
import classes from "./PortfolioSection.module.css";
import FullPageScroll from "../../UI/FullPageScroll";
import Button from "../../UI/Button";
import { FullpageSection } from "@ap.cx/react-fullpage";
import Project from "./Project";
import Pagination from "./Pagination";
import PaginationContainer from "./PaginationContainer";
import Light from "../../UI/Light";

const PROJECTS = [
  {
    title: "Title the website 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  //   {
  //     title: "Title the website 2",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  //   },
  //   {
  //     title: "Title the website 3",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  //   },
  //   {
  //     title: "Title the website 4",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  //   },
];

const PortfolioSection = () => {
  return (
    <FullpageSection>
      <Fragment>
        <Light color="yellow"/>
        <Container>
          <h2>Portfolio</h2>
          <p className="section-description">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </p>
          <div className={classes["projects-container"]}>
            {PROJECTS.map((project, index) => (
              <Project
                key={index}
                projectTitle={project.title}
                projectDescription={project.description}
              />
            ))}
          </div>
          <PaginationContainer />
        </Container>
      </Fragment>
    </FullpageSection>
  );
};

export default PortfolioSection;
