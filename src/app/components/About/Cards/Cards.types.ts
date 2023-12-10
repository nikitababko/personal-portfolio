import type { ServerAboutNSTypes } from '../../../api/about/types';

export namespace CardsNSTypes {
  export type Props = {
    cards: ServerAboutNSTypes.Card[];
  };
}
