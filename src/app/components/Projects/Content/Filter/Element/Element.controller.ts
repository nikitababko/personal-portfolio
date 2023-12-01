import { useEffect, useRef, useState } from 'react';

import type { ElementNSTypes } from './Element.types';

export const useController: ElementNSTypes.UseController = (
  filterItem,
  setOffset,
  setSelectedFilter,
) => {
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
    setSelectedFilter(filterItem);
  };

  useEffect(() => {
    return () => setIsActive(false);
  }, [isActive]);

  return { handleClick, reference };
};
