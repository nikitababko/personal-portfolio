import { useState } from 'react';

import type { LabelNSTypes } from './Label.types';

export const useController: LabelNSTypes.UseController =
  () => {
    const [offset, setOffset] =
      useState<LabelNSTypes.Offset>({
        offsetLeft: 0,
        offsetTop: 0,
      });

    return {
      offset,
      setOffset,
    };
  };
