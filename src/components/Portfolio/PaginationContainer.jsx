import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import classes from "./PaginationContainer.module.css";
import {motion} from "framer-motion"


function PaginationContainer({ totalProjects, projectperPage, paginate, currentProject, isInViewRef }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectperPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <motion.nav
   
    transition={{duration: 0.5, delay: 0.15, type: "spring"}}
    whileInView={{ opacity: [0, 1], y: [100, 0]}}
    viewport={{ once: true }}
    >
      <ul className={classes.container}>
        {pageNumbers.map(number => (
          <Pagination key={number} number={number} paginate={paginate} isActive={currentProject === number}/>
        ))}
      </ul>
    </motion.nav>
  );
}

export default PaginationContainer;
