import React from 'react'
import Pagination from './Pagination'
import classes from "./PaginationContainer.module.css";



function PaginationContainer() {
  return (
    <div className={classes.container}>
      {[1, 2, 3, 4].map((number, index) => (
        <Pagination key={index} number={number}/>
      )) }      
    </div>
  )
}

export default PaginationContainer;
