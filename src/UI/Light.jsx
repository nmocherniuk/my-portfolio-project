// Light.jsx
import React from 'react';
import classes from './Light.module.css';

const Light = ({ color }) => {
  return (

      <div className={`${classes.overlay} ${classes[color]}`} />
  );
};

export default Light;
