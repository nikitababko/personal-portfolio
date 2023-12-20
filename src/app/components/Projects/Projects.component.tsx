'use client';

import React from 'react';

import { Project, SectionTitle, Tabs } from '../../common';
import type { ProjectsNSTypes } from './Projects.types';
import type { ServerProjectsNSTypes } from '../../api/projects/types';

export const Projects: React.FC<ProjectsNSTypes.Props> = ({
  data,
}) => {
  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Projects" />

        <Tabs<
          ServerProjectsNSTypes.Filter,
          ServerProjectsNSTypes.Project
        >
          data={{
            labels: data.filters,
            content: data.projects,
          }}
          showMore
          renderContent={(content) => {
            return (
              <Project key={content.id} project={content} />
            );
          }}
        />
      </div>
    </section>
  );
};
