import React from 'react';

import { Icon } from '../../../../common';
import styles from './Item.styles.module.scss';
import type { ItemNSTypes } from './Item.types';

export const Item: React.FC<ItemNSTypes.Props> = React.memo(
  ({ title, iconName }) => {
    return (
      <div className={styles.container}>
        <Icon name={iconName} size={44} />

        <div>{title}</div>
      </div>
    );
  },
);
