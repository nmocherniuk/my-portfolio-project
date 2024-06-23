import React from 'react'
import {Fullpage,  FullPageSections} from '@ap.cx/react-fullpage'
function FullPageScroll({children}) {
  return (
    <Fullpage>
        <FullPageSections>
            {children}
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll
