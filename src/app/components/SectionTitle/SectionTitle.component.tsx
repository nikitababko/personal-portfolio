import React from 'react';

import type { SectionTitleNSTypes } from './SectionTitle.types';
import styles from './SectionTitle.styles.module.scss';

export const SectionTitle: React.FC<
  SectionTitleNSTypes.Props
> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
