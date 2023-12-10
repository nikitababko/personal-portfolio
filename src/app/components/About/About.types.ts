import type { ServerAboutNSTypes } from '../../api/about/types';

export namespace AboutNSTypes {
  export type Props = {
    data: {
      description: ServerAboutNSTypes.Description[];
      cards: ServerAboutNSTypes.Card[];
    };
  };
}
