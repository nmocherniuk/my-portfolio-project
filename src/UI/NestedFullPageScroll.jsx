import React, { useRef, useEffect } from 'react';
import { Fullpage, FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

const NestedFullPageScroll = ({ children }) => {


  return (
    <Fullpage>
      <FullPageSections>
        {children}
      </FullPageSections>
    </Fullpage>
  );
};

export default NestedFullPageScroll;
