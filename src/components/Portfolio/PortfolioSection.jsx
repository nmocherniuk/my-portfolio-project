import React, { useEffect, useState, Fragment, useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion"
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
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const [rerenderAnimation, setRerenderAnimation] = useState(false)
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

  const paginate = (pageNumber) => {
    setCurrentProject(pageNumber)
    setRerenderAnimation(true)
  }
  return (
    <section style={{ height: '100vh', padding: '1rem 0px' }}>
      <Fragment>
        <Light color="yellow" />
        <Container>
          <motion.h2
            transition={{ duration: 0.5, delay: 0.15, type: "spring" }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
          >Portfolio</motion.h2>
          <motion.p animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="section-description" ref={ref}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </motion.p>
          <Projects key={currentProject} isInViewRef={isInView} projects={currentProjects} animationRepeat={rerenderAnimation}/>
          <PaginationContainer
            isInViewRef={isInView}
            projectperPage={projectPerPage} totalProjects={projects.length} paginate={paginate} currentProject={currentProject} />
        </Container>
      </Fragment>
    </section>

  );
};

export default PortfolioSection;
