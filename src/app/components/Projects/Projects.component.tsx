'use client';

import React from 'react';

import {
  ProjectsContent,
  SectionTitle,
} from '../../common';
import type { ProjectsNSTypes } from './Projects.types';

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
