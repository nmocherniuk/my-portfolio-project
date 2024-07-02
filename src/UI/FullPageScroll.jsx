import React, { useRef, useEffect, useState } from 'react';
import { Fullpage, FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage';

const FullPageScroll = ({ children }) => {

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        {children}
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
