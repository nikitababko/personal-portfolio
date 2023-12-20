import type { LabelNSTypes } from '../Label.types';

export namespace ActiveElementNSTypes {
  export type Props<Label> = {
    offset: LabelNSTypes.Offset;
    selectedLabel: Label;
    labelWidthClassName?: string;
  };
}
