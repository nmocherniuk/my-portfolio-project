import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useInView } from 'framer-motion';

const Light = lazy(() => import('../../UI/Light.jsx'));
const Container = lazy(() => import('../../UI/Container.jsx'));
const AnimatedHeading = lazy(() => import('../../UI/AnimatedHeading.jsx'));
const SectionDescription = lazy(() => import('../../UI/SectionDescription.jsx'));
const Projects = lazy(() => import('./Projects'));
const PaginationContainer = lazy(() => import('./PaginationContainer'));

const PortfolioSection = () => {
  const descriptionRef = useRef(null);
  const isInViewDescription = useInView(descriptionRef, { once: true });
  const [rerenderAnimation, setRerenderAnimation] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(1);
  const [projectPerPage, setProjectPerPage] = useState(1);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const module = await import('../../data/project-data');
        setProjects(module.default);
      } catch (error) {
        console.error('Error loading skills data:', error);
      }
    };

    fetchSkillsData();
  }, []);

  const indexOfLastProject = currentProject * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentProject(pageNumber);
    setRerenderAnimation(true);
  };

  return (
    <section id='portfolio'>
      <Suspense fallback={<div>Loading...</div>}>
        <Light color='yellow' />
        <Container>
          <AnimatedHeading isInView={isInViewDescription}>Portfolio</AnimatedHeading>
          <SectionDescription ref={descriptionRef}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </SectionDescription>
          <Projects
            key={currentProject}
            isInViewRef={isInViewDescription}
            projects={currentProjects}
            animationRepeat={rerenderAnimation}
          />
          <PaginationContainer
            isInViewRef={isInViewDescription}
            projectperPage={projectPerPage}
            totalProjects={projects.length}
            paginate={paginate}
            currentProject={currentProject}
          />
        </Container>
      </Suspense>
    </section>
  );
};

export default PortfolioSection;
