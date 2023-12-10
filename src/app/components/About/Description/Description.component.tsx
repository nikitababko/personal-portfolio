import React from 'react';

import styles from './Description.styles.module.scss';
import type { DescriptionNSTypes } from './Description.types';

export const Description: React.FC<
  DescriptionNSTypes.Props
> = ({ description }) => {
  return (
    <div className={styles.container}>
      {description?.map((paragraph) => (
        <p
          key={paragraph.id}
          className={styles.description}
        >
          {paragraph.value}
        </p>
      ))}
    </div>
  );
};
