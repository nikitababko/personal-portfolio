import type { MutableRefObject } from 'react';

import type { FilterNSTypes } from '../Filter.types';

export namespace ElementNSTypes {
  export type Reference = HTMLButtonElement | null;

  export type Props = Pick<
    ReturnType<FilterNSTypes.UseController>,
    'setOffset' | 'setSelectedFilter'
  > & {
    filterItem: FilterNSTypes.FilterItem;
  };

  export type UseController = (
    filterItem: FilterNSTypes.FilterItem,
    setOffset: ReturnType<FilterNSTypes.UseController>['setOffset'],
    setSelectedFilter: ReturnType<FilterNSTypes.UseController>['setSelectedFilter'],
  ) => {
    reference: MutableRefObject<Reference | undefined>;
    handleClick: () => void;
  };
}
