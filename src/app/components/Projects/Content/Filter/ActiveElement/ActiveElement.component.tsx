import React from 'react';

import type { ActiveElementNSTypes } from './ActiveElement.types';
import styles from './ActiveElement.styles.module.scss';

export const ActiveElement: React.FC<
  ActiveElementNSTypes.Props
> = ({ indent, selectedFilter }) => {
  return (
    <div
      className={styles.container}
      style={{
        left: indent,
      }}
    >
      <p className={styles.value}>{selectedFilter}</p>
    </div>
  );
};
