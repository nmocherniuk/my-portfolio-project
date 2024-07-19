import React from 'react'
import FullPageScroll from '../UI/FullPageScroll'
import ProjectDetails from '../components/Project details/ProjectDetails'
import Transition from '../UI/Transition'
import ProjectAdaptiveSection from '../components/Project details/ProjectAdaptiveSection'
import ProjectInfoSection from '../components/Project details/ProjectInfoSection'

function PortfilioPage() {
  return (
    <Transition>
      {/* <FullPageScroll><ProjectDetails /></FullPageScroll> */}
      <FullPageScroll><ProjectAdaptiveSection /><ProjectInfoSection /></FullPageScroll>
    </Transition>
  )
}

export default PortfilioPage
