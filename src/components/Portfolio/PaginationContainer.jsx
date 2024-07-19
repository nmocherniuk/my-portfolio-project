import React, { Suspense, lazy } from 'react';
import { motion as m } from 'framer-motion';
import classes from './PaginationContainer.module.css';

const Pagination = lazy(() => import('./Pagination'));

const PaginationContainer = ({ totalProjects, projectperPage, paginate, currentProject }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectperPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <m.nav
      transition={{ duration: 0.5, delay: 0.15, type: 'spring' }}
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      viewport={{ once: true }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <ul className={classes.container}>
          {pageNumbers.map(number => (
            <Pagination key={number} number={number} paginate={paginate} isActive={currentProject === number} />
          ))}
        </ul>
      </Suspense>
    </m.nav>
  );
};

export default PaginationContainer;
