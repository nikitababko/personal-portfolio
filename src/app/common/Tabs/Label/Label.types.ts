import type React from 'react';

export namespace LabelNSTypes {
  export type Props<Label> = {
    selectedLabel: Label;
    labels: Label[];
    setSelectedLabel: React.Dispatch<
      React.SetStateAction<Label>
    >;
    labelWidthClassName?: string;
  };

  export type Offset = {
    offsetLeft: number;
    offsetTop: number;
  };

  export type UseController = () => {
    offset: Offset;
    setOffset: React.Dispatch<React.SetStateAction<Offset>>;
  };
}
