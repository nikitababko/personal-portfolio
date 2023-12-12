import type { ServerProjectsNSTypes } from '../../../api/projects/types';

export namespace GalleryNSTypes {
  export type Props = {
    selectedFilter: ServerProjectsNSTypes.Filter;
    data: ServerProjectsNSTypes.Project[];
    isPage?: boolean;
  };

  export type Projects =
    | ServerProjectsNSTypes.Project[]
    | null;

  export type UseController = (
    selectedFilter: ServerProjectsNSTypes.Filter,
    data: ServerProjectsNSTypes.Project[],
    isPage?: boolean,
  ) => { projects: Projects };
}
