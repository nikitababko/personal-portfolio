import type React from 'react';

import type { ProjectsFilterNSTypes } from '../Filter.types';
import type { ServerProjectsNSTypes } from '../../../../api/projects/types';

export namespace ElementNSTypes {
  export type Reference = HTMLButtonElement | null;

  export type Props = {
    filterItem: ServerProjectsNSTypes.Filter;
    setOffset: React.Dispatch<
      React.SetStateAction<ProjectsFilterNSTypes.Offset>
    >;
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<ServerProjectsNSTypes.Filter>
    >;
  };

  export type UseController = (
    filterItem: ServerProjectsNSTypes.Filter,
    setOffset: ReturnType<ProjectsFilterNSTypes.UseController>['setOffset'],
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<ServerProjectsNSTypes.Filter>
    >,
  ) => {
    reference: React.MutableRefObject<
      Reference | undefined
    >;
    handleClick: () => void;
  };
}
