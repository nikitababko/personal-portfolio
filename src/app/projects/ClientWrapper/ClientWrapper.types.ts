import type { ServerProjectsNSTypes } from '../../api/projects/types';

export namespace ClientWrapperNSTypes {
  export type Props = {
    data: ServerProjectsNSTypes.Response;
  };
}
