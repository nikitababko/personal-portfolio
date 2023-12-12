import type React from 'react';
import type { ServerProjectsNSTypes } from '../../api/projects/types';

export namespace ProjectsContentNSTypes {
  export type Props = {
    data: ServerProjectsNSTypes.ProjectsResponse;
    isPage?: boolean;
  };

  export type UseController = (
    data: ServerProjectsNSTypes.ProjectsResponse,
  ) => {
    selectedFilter: ServerProjectsNSTypes.Filter;
    setSelectedFilter: React.Dispatch<
      React.SetStateAction<ServerProjectsNSTypes.Filter>
    >;
  };
}
