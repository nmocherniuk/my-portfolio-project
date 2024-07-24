import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useInView } from 'framer-motion';
import { db } from '../../data/firebaseConfig.js';
import { getDocs, collection } from 'firebase/firestore';

const Light = lazy(() => import('../../UI/Light.jsx'));
const Container = lazy(() => import('../../UI/Container.jsx'));
const AnimatedHeading = lazy(() => import('../../UI/AnimatedHeading.jsx'));
const SectionDescription = lazy(() => import('../../UI/SectionDescription.jsx'));
const Projects = lazy(() => import('./Projects'));
const PaginationContainer = lazy(() => import('./PaginationContainer'));

const PortfolioSection = () => {
  const descriptionRef = useRef(null);
  const isInViewDescription = useInView(descriptionRef, { once: true });
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(1);
  const [projectPerPage, setProjectPerPage] = useState(1);
  const indexOfLastProject = currentProject * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const data = collection(db, 'projects')
        const dataSnap = await getDocs(data)
        const dataList = dataSnap.docs.map(doc => doc.data());
        console.log(dataList);
        setProjects(dataList);
      } catch (error) {
        console.error('Error loading skills data:', error);
      }
    };

    fetchSkillsData();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentProject(pageNumber);
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
            projectIndex={currentProject}
            projects={currentProjects}
          />
          <PaginationContainer
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
