import React from 'react';

import styles from './ScrollDownButton.styles.module.scss';
import { Icon } from '../../../common';

export const ScrollDownButton: React.FC = () => {
  return (
    <button className={styles.container}>
      <Icon name="mouse" />

      <p>Click to scroll</p>

      <Icon name="arrowDown" />
    </button>
  );
};
