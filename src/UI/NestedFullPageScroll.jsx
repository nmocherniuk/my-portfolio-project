import React, { memo, useRef, useEffect, useState } from 'react';
import { Fullpage, FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

const NestedFullPageScroll = ({ children }) => {
    const ref = useRef(null); // Initialize with null
    const [isReady, setIsReady] = useState(false);



    return (
        <Fullpage ref={ref}>
            <FullPageSections>
                {children}
            </FullPageSections>
        </Fullpage>
    );
};

export default NestedFullPageScroll;
