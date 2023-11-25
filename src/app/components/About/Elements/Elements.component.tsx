import React from 'react';
import Image from 'next/image';

import styles from './Elements.styles.module.scss';
import { elements } from './Elements.data';

export const Elements: React.FC = () => {
  return (
    <div className={styles.items}>
      {elements?.map((element) => (
        <div key={element.id} className={styles.item}>
          <Image
            src={element.src}
            alt={element.alt}
            width={100}
            height={100}
          />

          <p className={styles.itemText}>{element.text}</p>
        </div>
      ))}
    </div>
  );
};
