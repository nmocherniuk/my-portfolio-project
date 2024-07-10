import React from 'react'
import FullPageScroll from '../UI/FullPageScroll'
import ProjectDetails from '../components/Project details/ProjectDetails'
import Transition from '../UI/Transition'

function PortfilioPage() {
  return (
    <Transition>
        <FullPageScroll><ProjectDetails /></FullPageScroll>
    </Transition>
  )
}

export default PortfilioPage
