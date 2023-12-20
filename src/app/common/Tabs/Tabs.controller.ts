import { useState } from 'react';
import type { TabsNSTypes } from './Tabs.types';

export const useController = <Label>(
  labels: Label[],
): TabsNSTypes.UseControllerReturn<Label> => {
  const [selectedLabel, setSelectedLabel] = useState<Label>(
    labels[0],
  );

  return { selectedLabel, setSelectedLabel };
};
