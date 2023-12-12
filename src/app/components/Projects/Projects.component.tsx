'use client';

import React from 'react';

import { SectionTitle } from '../SectionTitle/SectionTitle.component';
import type { ProjectsNSTypes } from './Projects.types';
import { ProjectsContent } from '../../common/ProjectsContent/ProjectsContent.component';

export const Projects: React.FC<ProjectsNSTypes.Props> = ({
  data,
}) => {
  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Projects" />

        <ProjectsContent data={data} />
      </div>
    </section>
  );
};
