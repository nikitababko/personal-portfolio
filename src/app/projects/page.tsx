import React from 'react';

import { getData } from '../helpers';
import { ENDPOINTS } from '../constants';
import styles from './styles.module.scss';
import { ButtonBack } from '../common';
import type { ServerProjectsNSTypes } from '../api/projects/types';
import { ClientWrapper } from './ClientWrapper';

export default async function Projects() {
  const projectsResponse: ServerProjectsNSTypes.Response =
    await getData(ENDPOINTS.PROJECTS);

  if (!projectsResponse) {
    return null;
  }

  return (
    <div className="sectionContainer">
      <div className={`sectionInner ${styles.inner}`}>
        <ButtonBack />

        <ClientWrapper data={projectsResponse} />
      </div>
    </div>
  );
}
