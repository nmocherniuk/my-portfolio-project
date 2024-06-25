import React, { useEffect, useState, Fragment } from "react";

import Container from "../../UI/Container";
import FullPageScroll from "../../UI/FullPageScroll";
import Button from "../../UI/Button";
import { FullpageSection } from "@ap.cx/react-fullpage";
import Project from "./Project";
import Pagination from "./Pagination";
import PaginationContainer from "./PaginationContainer";
import Light from "../../UI/Light";
import Projects from "./Projects";

const PROJECTS = [
  {
    title: "Title the website 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    title: "Title the website 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    title: "Title the website 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    title: "Title the website 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(1);
  const [projectPerPage, setProjectPerPage] = useState(1);

  useEffect(() => {
    setProjects(PROJECTS);
  }, []);


  const indexOfLastProject = currentProject * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

    const paginate = (pageNumber) => setCurrentProject(pageNumber)
  return (
    <FullpageSection>
      <Fragment>
        <Light color="yellow" />
        <Container>
          <h2>Portfolio</h2>
          <p className="section-description">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </p>
            <Projects projects={currentProjects}/>
          <PaginationContainer projectperPage={projectPerPage} totalProjects={projects.length} paginate={paginate} currentProject={currentProject}/>
        </Container>
      </Fragment>
    </FullpageSection>
  );
};

export default PortfolioSection;
