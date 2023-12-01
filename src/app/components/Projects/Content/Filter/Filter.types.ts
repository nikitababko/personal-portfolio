import type React from 'react';

export namespace FilterNSTypes {
  export type Reference = HTMLDivElement | null;

  export type Offset = {
    offsetLeft: number;
    offsetTop: number;
  };

  export type UseController = () => {
    offset: Offset;
    setOffset: React.Dispatch<React.SetStateAction<Offset>>;
    selectedFilter: FilterItem;
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<FilterItem>
    >;
  };

  export type FilterItem = {
    id: number;
    value:
      | 'All'
      | 'Web app'
      | 'Landings'
      | 'Libs'
      | 'Design';
  };
}
