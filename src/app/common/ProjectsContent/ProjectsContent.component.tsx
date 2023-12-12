'use client';

import React from 'react';

import styles from './Projects.styles.module.scss';
import type { ProjectsContentNSTypes } from './ProjectsContent.types';
import { useController } from './ProjectsContent.controller';
import { Filter } from './Filter';
import { Gallery } from './Gallery';

export const ProjectsContent: React.FC<
  ProjectsContentNSTypes.Props
> = ({ data, isPage }) => {
  const { selectedFilter, setSelectedFilter } =
    useController(data);

  return (
    <div className={styles.content}>
      <Filter
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
        filters={data.filters}
      />

      <Gallery
        selectedFilter={selectedFilter}
        data={data.projects}
        isPage={isPage}
      />
    </div>
  );
};
