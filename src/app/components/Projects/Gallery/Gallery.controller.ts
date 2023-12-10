import { useCallback, useEffect, useState } from 'react';

import type { GalleryNSTypes } from './Gallery.types';
import type { ServerProjectsNSTypes } from '../../../api/projects/types';

export const useController: GalleryNSTypes.UseController = (
  selectedFilter,
  data,
) => {
  const [projects, setProjects] =
    useState<ServerProjectsNSTypes.Project[]>(data);

  const getSelectedProjects = useCallback(() => {
    return data.filter((element) => {
      return element.tags.includes(selectedFilter.tag);
    });
  }, [data, selectedFilter.tag]);

  useEffect(() => {
    setProjects(getSelectedProjects());
  }, [getSelectedProjects, selectedFilter]);

  return { projects };
};
