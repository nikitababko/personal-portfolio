import React from 'react';

import {
  About,
  Home,
  NavBar,
  Projects,
  Qualification,
} from './components';
import { getData } from './helpers';
import { ENDPOINTS } from './constants';
import type { ServerProjectsNSTypes } from './api/projects/types';
import type { ServerAboutNSTypes } from './api/about/types';
import type { ServerQualificationNSTypes } from './api/qualification/types';

export default async function App() {
  const aboutResponse: ServerAboutNSTypes.Response =
    await getData(ENDPOINTS.ABOUT);

  const projectsResponse: ServerProjectsNSTypes.Response =
    await getData(ENDPOINTS.PROJECTS);

  const qualificationResponse: ServerQualificationNSTypes.Response =
    await getData(ENDPOINTS.QUALIFICATION);

  return (
    <div className="app">
      <NavBar />

      <main>
        <Home />

        {aboutResponse && <About data={aboutResponse} />}

        {projectsResponse && (
          <Projects data={projectsResponse} />
        )}

        {qualificationResponse && (
          <Qualification data={qualificationResponse} />
        )}
      </main>
    </div>
  );
}
