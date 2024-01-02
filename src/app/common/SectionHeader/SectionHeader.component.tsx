import React from 'react';

import type { SectionHeaderNSTypes } from './SectionHeader.types';
import styles from './SectionHeader.styles.module.scss';

export const SectionHeader: React.FC<
  SectionHeaderNSTypes.Props
> = ({ title }) => {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
};
