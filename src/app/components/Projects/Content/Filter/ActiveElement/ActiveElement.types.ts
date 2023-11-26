import type { FilterNSTypes } from '../Filter.types';

export namespace ActiveElementNSTypes {
  export type Props = Pick<
    ReturnType<FilterNSTypes.UseController>,
    'indent' | 'selectedFilter'
  >;
}
