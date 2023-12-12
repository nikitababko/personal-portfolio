import type React from 'react';

import type { ServerProjectsNSTypes } from '../../../api/projects/types';

export namespace ProjectsFilterNSTypes {
  export type Props = {
    selectedFilter: ServerProjectsNSTypes.Filter;
    filters: ServerProjectsNSTypes.Filter[];
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<ServerProjectsNSTypes.Filter>
    >;
  };

  export type Reference = HTMLDivElement | null;

  export type Offset = {
    offsetLeft: number;
    offsetTop: number;
  };

  export type UseController = () => {
    offset: Offset;
    setOffset: React.Dispatch<React.SetStateAction<Offset>>;
  };
}
