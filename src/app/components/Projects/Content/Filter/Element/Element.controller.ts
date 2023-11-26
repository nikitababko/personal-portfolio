import { useEffect, useRef, useState } from 'react';

import type { ElementNSTypes } from './Element.types';

export const useController: ElementNSTypes.UseController = (
  filterValue,
  setIndent,
  setSelectedFilter,
  indentOfFirstElement,
) => {
  const reference = useRef<ElementNSTypes.Reference>();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    const left =
      reference?.current?.getBoundingClientRect().left;

    if (indentOfFirstElement && left) {
      setIndent(left - indentOfFirstElement);
    }

    setIsActive(true);
    setSelectedFilter(filterValue);
  };

  useEffect(() => {
    return () => setIsActive(false);
  }, [isActive]);

  return { handleClick, reference };
};
