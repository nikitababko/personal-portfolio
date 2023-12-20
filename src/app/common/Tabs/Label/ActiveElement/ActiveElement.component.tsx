import React from 'react';

import type { ActiveElementNSTypes } from './ActiveElement.types';
import styles from './ActiveElement.styles.module.scss';
import type { TabsNSTypes } from '../../Tabs.types';

export const ActiveElement = <
  Label extends TabsNSTypes.ExtendLabel,
>({
  offset,
  selectedLabel,
  labelWidthClassName,
}: ActiveElementNSTypes.Props<Label>) => {
  return (
    <div
      className={`${styles.container} ${labelWidthClassName}`}
      style={{
        top: offset.offsetTop,
        left: offset.offsetLeft,
      }}
    >
      <p className={styles.value}>{selectedLabel.value}</p>
    </div>
  );
};
