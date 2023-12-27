import React from 'react';

import {
  About,
  Home,
  NavBar,
  Projects,
  Qualification,
  Skills,
} from './components';
import { getData } from './helpers';
import { ENDPOINTS } from './constants';
import type { ServerProjectsNSTypes } from './api/projects/types';
import type { ServerAboutNSTypes } from './api/about/types';
import type { ServerQualificationNSTypes } from './api/qualification/types';
import type { ServerSkillsNSTypes } from './api/skills/types';

export default async function App() {
  const aboutResponse: ServerAboutNSTypes.Response =
    await getData(ENDPOINTS.ABOUT);

  const projectsResponse: ServerProjectsNSTypes.Response =
    await getData(ENDPOINTS.PROJECTS);

  const qualificationResponse: ServerQualificationNSTypes.Response =
    await getData(ENDPOINTS.QUALIFICATION);

  const skillsResponse: ServerSkillsNSTypes.Response =
    await getData(ENDPOINTS.SKILLS);

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

        {skillsResponse && <Skills data={skillsResponse} />}
      </main>
    </div>
  );
}
