import type React from 'react';

export namespace FilterNSTypes {
  export type Reference = HTMLDivElement | null;

  export type UseController = () => {
    indent: number;
    setIndent: React.Dispatch<React.SetStateAction<number>>;
    indentOfFirstElement?: number;
    selectedFilter: FilterValue;
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<FilterValue>
    >;
    reference: React.MutableRefObject<
      Reference | undefined
    >;
  };

  export type FilterItem = {
    id: number;
    value: FilterValue;
  };

  export type FilterValue = 'All' | 'Web app' | 'Landings';
}
