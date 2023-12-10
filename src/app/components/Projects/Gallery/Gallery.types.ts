import type { ServerProjectsNSTypes } from '../../../api/projects/types';

export namespace GalleryNSTypes {
  export type Props = {
    selectedFilter: ServerProjectsNSTypes.Filter;
    data: ServerProjectsNSTypes.Project[];
  };

  export type UseController = (
    selectedFilter: ServerProjectsNSTypes.Filter,
    data: ServerProjectsNSTypes.Project[],
  ) => { projects: ServerProjectsNSTypes.Project[] };
}
