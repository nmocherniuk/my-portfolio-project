import React, { lazy, Suspense } from 'react';
import FullPageScroll from '../UI/FullPageScroll';
import Transition from '../UI/Transition';
import { useParams, useLoaderData } from 'react-router-dom';
import { db } from '../data/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import skillImage from '../data/skills-data.js';

const ProjectAdaptiveSection = lazy(() => import('../components/Project details/ProjectAdaptiveSection'));
const ProjectInfoSection = lazy(() => import('../components/Project details/ProjectInfoSection'));

function PortfolioPage() {
  const project = useLoaderData();

  return (
    <Transition>
      <FullPageScroll>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectAdaptiveSection title={project.title} description={project.description} />
          <ProjectInfoSection
            aboutProject={project.aboutProject}
            technologies={project.technologies}
            myRole={project.myRole}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
          />
        </Suspense>
      </FullPageScroll>
    </Transition>
  );
}

export default PortfolioPage;
export const projectDetailsLoader = async ({ params }) => {
  const { projectId } = params;
  const data = collection(db, 'projects')
  const dataSnap = await getDocs(data)
  const dataList = dataSnap.docs.map(doc => doc.data());
  const project = dataList[projectId - 1];
  const { technologies } = project;

  technologies.forEach(dbSkill => {
    skillImage.forEach(arraySkill => {
      if (arraySkill.title === dbSkill.skillTitle) {
        dbSkill.skillImgRef = arraySkill.imgSrc;
      }
    });
  });

  return dataList[projectId - 1];
};
