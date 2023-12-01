import React from 'react';

import type { ActiveElementNSTypes } from './ActiveElement.types';
import styles from './ActiveElement.styles.module.scss';

export const ActiveElement: React.FC<
  ActiveElementNSTypes.Props
> = ({ offset, selectedFilter }) => {
  return (
    <div
      className={styles.container}
      style={{
        top: offset.offsetTop,
        left: offset.offsetLeft,
      }}
    >
      <p className={styles.value}>{selectedFilter.value}</p>
    </div>
  );
};
