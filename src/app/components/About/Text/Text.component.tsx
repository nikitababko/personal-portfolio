import React from 'react';

import styles from './Text.styles.module.scss';
import { paragraph } from './Text.data';

export const Text: React.FC = () => {
  return (
    <div className={styles.container}>
      {paragraph?.map((p) => (
        <p key={p.id} className={styles.paragraph}>
          {p.value}
        </p>
      ))}
    </div>
  );
};
