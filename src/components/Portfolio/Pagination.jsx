import React from 'react'
import classes from "./Pagination.module.css";


function Pagination({number}) {
  return (
    <div className={classes.pagination}>
      {number}
    </div>
  )
}

export default Pagination
