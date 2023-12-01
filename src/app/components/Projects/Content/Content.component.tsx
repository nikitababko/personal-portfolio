import React from 'react';

import { Filter } from './Filter';
import { Gallery } from './Gallery';
import styles from './Content.styles.module.scss';

export const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <Filter />

      <Gallery />
    </div>
  );
};
