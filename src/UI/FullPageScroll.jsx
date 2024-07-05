import React, { useRef, useEffect, useState, useСontex } from 'react';
import { Fullpage, FullPageSections, FullpageNavigation, FullpageContext } from '@ap.cx/react-fullpage';

const FullPageScroll = ({ children }) => {

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
      <FullpageContext.Consumer>
        {children}
        </FullpageContext.Consumer>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
