import type React from 'react';
import { useEffect, useRef, useState } from 'react';

import type { ElementNSTypes } from './Element.types';
import type { LabelNSTypes } from '../Label.types';

export const useController = <Label>(
  filterItem: Label,
  setOffset: ReturnType<LabelNSTypes.UseController>['setOffset'],
  setSelectedLabel: React.Dispatch<
    React.SetStateAction<Label>
  >,
): ElementNSTypes.UseControllerReturn => {
  const reference = useRef<ElementNSTypes.Reference>();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    const offsetLeft = reference?.current?.offsetLeft;
    const offsetTop = reference?.current?.offsetTop;

    if (
      offsetLeft !== undefined &&
      offsetTop !== undefined
    ) {
      setOffset({
        offsetLeft,
        offsetTop,
      });
    }

    setIsActive(true);
    setSelectedLabel(filterItem);
  };

  useEffect(() => {
    return () => setIsActive(false);
  }, [isActive]);

  return { handleClick, reference };
};
