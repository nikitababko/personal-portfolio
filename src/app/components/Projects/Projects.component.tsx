'use client';

import React, { useState } from 'react';

import { SectionTitle } from '../SectionTitle/SectionTitle.component';
import type { ProjectsNSTypes } from './Projects.types';
import styles from './Projects.styles.module.scss';
import { Filter } from './Filter';
import { Gallery } from './Gallery';
import type { ServerProjectsNSTypes } from '../../api/projects/types';

export const Projects: React.FC<ProjectsNSTypes.Props> = ({
  data,
}) => {
  const [selectedFilter, setSelectedFilter] =
    useState<ServerProjectsNSTypes.Filter>(
      data?.filters[0],
    );

  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Projects" />

        <div className={styles.content}>
          <Filter
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
            filters={data.filters}
          />

          <Gallery
            selectedFilter={selectedFilter}
            data={data.projects}
          />
        </div>
      </div>
    </section>
  );
};
