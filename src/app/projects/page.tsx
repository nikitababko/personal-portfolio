import React from 'react';

import { getData } from '../helpers';
import { ENDPOINTS } from '../constants';
import styles from './styles.module.scss';
import { ButtonBack, ProjectsContent } from '../common';

export default async function Projects() {
  const projectsResponse = await getData(
    ENDPOINTS.PROJECTS,
  );

  if (!projectsResponse) {
    return null;
  }

  return (
    <div className="sectionContainer">
      <div className={`sectionInner ${styles.inner}`}>
        <ButtonBack />

        <ProjectsContent data={projectsResponse} isPage />
      </div>
    </div>
  );
}
