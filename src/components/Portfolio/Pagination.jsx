import React, { useEffect, useState } from 'react'
import classes from "./Pagination.module.css";


function Pagination({number, paginate, isActive}) {



  return (
    <li className={`${classes.pagination} ${isActive ? classes.active : ''}`} onClick={() => paginate(number)}>
      {number}
    </li>
  )
}

export default Pagination
