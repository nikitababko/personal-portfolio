import type React from 'react';

import type { LabelNSTypes } from '../Label.types';

export namespace ElementNSTypes {
  export type Reference = HTMLButtonElement | null;

  export type Props<Label> = {
    labelItem: Label;
    setOffset: React.Dispatch<
      React.SetStateAction<LabelNSTypes.Offset>
    >;
    setSelectedLabel: React.Dispatch<
      React.SetStateAction<Label>
    >;
    labelWidthClassName?: string;
  };

  export type UseControllerReturn = {
    reference: React.MutableRefObject<
      Reference | undefined
    >;
    handleClick: () => void;
  };
}
