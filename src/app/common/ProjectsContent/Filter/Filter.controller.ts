import { useState } from 'react';

import type { ProjectsFilterNSTypes } from './Filter.types';

export const useController: ProjectsFilterNSTypes.UseController =
  () => {
    const [offset, setOffset] =
      useState<ProjectsFilterNSTypes.Offset>({
        offsetLeft: 0,
        offsetTop: 0,
      });

    return {
      offset,
      setOffset,
    };
  };
