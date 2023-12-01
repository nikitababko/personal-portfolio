import { useState } from 'react';

import type { FilterNSTypes } from './Filter.types';
import { filters } from './Filter.data';

export const useController: FilterNSTypes.UseController =
  () => {
    const [offset, setOffset] =
      useState<FilterNSTypes.Offset>({
        offsetLeft: 0,
        offsetTop: 0,
      });

    const [selectedFilter, setSelectedFilter] =
      useState<FilterNSTypes.FilterItem>(filters[0]);

    return {
      offset,
      setOffset,
      selectedFilter,
      setSelectedFilter,
    };
  };
