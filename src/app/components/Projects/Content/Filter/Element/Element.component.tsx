import type { LegacyRef } from 'react';
import React, { useEffect } from 'react';

import styles from './Element.styles.module.scss';
import type { ElementNSTypes } from './Element.types';
import { useController } from './Element.controller';

export const Element: React.FC<ElementNSTypes.Props> = ({
  filterItem,
  setOffset,
  setSelectedFilter,
}) => {
  const { handleClick, reference } = useController(
    filterItem,
    setOffset,
    setSelectedFilter,
  );

  useEffect(() => {
    const offsetLeft = reference?.current?.offsetLeft;
    const offsetTop = reference?.current?.offsetTop;
    if (
      filterItem.id === 1 &&
      offsetLeft !== undefined &&
      offsetTop !== undefined
    ) {
      setOffset?.({ offsetLeft, offsetTop });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterItem.id, reference]);

  return (
    <button
      onClick={handleClick}
      ref={reference as LegacyRef<HTMLButtonElement>}
      className={styles.container}
    >
      {filterItem.value}
    </button>
  );
};
