import type { ProjectsFilterNSTypes } from '../Filter.types';
import type { ServerProjectsNSTypes } from '../../../../api/projects/types';

export namespace ActiveElementNSTypes {
  export type Props = {
    offset: ProjectsFilterNSTypes.Offset;
    selectedFilter: ServerProjectsNSTypes.Filter;
  };
}
