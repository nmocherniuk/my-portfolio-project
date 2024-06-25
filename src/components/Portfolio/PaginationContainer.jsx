import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import classes from "./PaginationContainer.module.css";

function PaginationContainer({ totalProjects, projectperPage, paginate, currentProject }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectperPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className={classes.container}>
        {pageNumbers.map(number => (
          <Pagination key={number} number={number} paginate={paginate} isActive={currentProject === number}/>
        ))}
      </ul>
    </nav>
  );
}

export default PaginationContainer;
