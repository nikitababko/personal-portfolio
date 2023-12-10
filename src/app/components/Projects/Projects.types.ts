import type { ServerProjectsNSTypes } from '../../api/projects/types';

export namespace ProjectsNSTypes {
  export type Props = {
    data: ServerProjectsNSTypes.ProjectsResponse;
  };
}
