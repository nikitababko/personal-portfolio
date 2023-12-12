import { useState } from 'react';

import type { ServerProjectsNSTypes } from '../../api/projects/types';
import type { ProjectsContentNSTypes } from './ProjectsContent.types';

export const useController: ProjectsContentNSTypes.UseController =
  (data) => {
    const [selectedFilter, setSelectedFilter] =
      useState<ServerProjectsNSTypes.Filter>(
        data?.filters[0],
      );

    return { selectedFilter, setSelectedFilter };
  };
