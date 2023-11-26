import type { LegacyRef } from 'react';
import React from 'react';

import styles from './Element.styles.module.scss';
import type { ElementNSTypes } from './Element.types';
import { useController } from './Element.controller';

export const Element: React.FC<ElementNSTypes.Props> = ({
  filterValue,
  setIndent,
  setSelectedFilter,
  indentOfFirstElement,
}) => {
  const { handleClick, reference } = useController(
    filterValue,
    setIndent,
    setSelectedFilter,
    indentOfFirstElement,
  );

  return (
    <button
      onClick={handleClick}
      ref={reference as LegacyRef<HTMLButtonElement>}
      className={styles.container}
    >
      {filterValue}
    </button>
  );
};
