import React, { Suspense, lazy } from 'react';
import classes from './Projects.module.css';

const Project = lazy(() => import('./Project'));

function Projects({ projects }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul className={classes['projects-container']}>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} />
        ))}
      </ul>
    </Suspense>
  );
};

export default Projects;
