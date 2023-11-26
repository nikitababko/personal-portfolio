import { useEffect, useRef, useState } from 'react';

import type { FilterNSTypes } from './Filter.types';

export const useController: FilterNSTypes.UseController =
  () => {
    const reference = useRef<FilterNSTypes.Reference>();
    const [indent, setIndent] = useState<number>(0);
    const [indentOfFirstElement, setIndentOfFirstElement] =
      useState<number | undefined>(0);
    const [selectedFilter, setSelectedFilter] =
      useState<FilterNSTypes.FilterValue>('All');

    useEffect(() => {
      setIndentOfFirstElement(
        reference?.current?.getBoundingClientRect().left,
      );
    }, []);

    return {
      indent,
      indentOfFirstElement,
      setIndent,
      selectedFilter,
      setSelectedFilter,
      reference,
    };
  };
