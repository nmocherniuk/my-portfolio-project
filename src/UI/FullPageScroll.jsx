import React, { useRef, useEffect } from 'react';
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

const FullPageScroll = ({ children }) => {

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections >
        {children}
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
