import { useCallback, useEffect, useState } from 'react';

import type { GalleryNSTypes } from './Gallery.types';
import { useMediaQuery } from '../../../hooks';

export const useController: GalleryNSTypes.UseController = (
  selectedFilter,
  data,
  isPage,
) => {
  const [projects, setProjects] =
    useState<GalleryNSTypes.Projects>(null);

  const getSelectedProjects = useCallback(() => {
    return data.filter((element) => {
      return element.tags.includes(selectedFilter.tag);
    });
  }, [data, selectedFilter.tag]);

  const mediaMin768 = useMediaQuery('(min-width: 768px)');
  const mediaMin992 = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    if (isPage) {
      setProjects(getSelectedProjects());
    } else if (mediaMin992) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setProjects(getSelectedProjects().slice(0, 12));
    } else if (mediaMin768) {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setProjects(getSelectedProjects().slice(0, 8));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      setProjects(getSelectedProjects().slice(0, 6));
    }
  }, [
    getSelectedProjects,
    mediaMin768,
    mediaMin992,
    selectedFilter,
    isPage,
  ]);

  return { projects };
};
