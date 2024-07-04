import React from 'react';

function scrollSection(elmRef) {
  console.log(elmRef);
  if (elmRef && elmRef.current) {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  }
}

export default scrollSection;
