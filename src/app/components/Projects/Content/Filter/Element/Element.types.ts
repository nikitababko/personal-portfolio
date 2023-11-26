import type { MutableRefObject } from 'react';

import type { FilterNSTypes } from '../Filter.types';

export namespace ElementNSTypes {
  export type Reference = HTMLButtonElement | null;

  export type Props = Pick<
    ReturnType<FilterNSTypes.UseController>,
    | 'setIndent'
    | 'setSelectedFilter'
    | 'indentOfFirstElement'
  > & {
    filterValue: FilterNSTypes.FilterValue;
  };

  export type UseController = (
    filterValue: FilterNSTypes.FilterValue,
    setIndent: ReturnType<FilterNSTypes.UseController>['setIndent'],
    setSelectedFilter: ReturnType<FilterNSTypes.UseController>['setSelectedFilter'],
    indentOfFirstElement: ReturnType<FilterNSTypes.UseController>['indentOfFirstElement'],
  ) => {
    reference: MutableRefObject<Reference | undefined>;
    handleClick: () => void;
  };
}
