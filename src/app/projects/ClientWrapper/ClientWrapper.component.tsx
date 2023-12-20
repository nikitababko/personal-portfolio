'use client';

import React from 'react';

import type { ClientWrapperNSTypes } from './ClientWrapper.types';
import type { ServerProjectsNSTypes } from '../../api/projects/types';
import { Project, Tabs } from '../../common';

export const ClientWrapper: React.FC<
  ClientWrapperNSTypes.Props
> = ({ data }) => {
  return (
    <Tabs<
      ServerProjectsNSTypes.Filter,
      ServerProjectsNSTypes.Project
    >
      data={{
        labels: data.filters,
        content: data.projects,
      }}
      renderContent={(content) => {
        return (
          <Project key={content.id} project={content} />
        );
      }}
    />
  );
};
