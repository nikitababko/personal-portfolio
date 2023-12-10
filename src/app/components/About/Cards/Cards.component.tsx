import React from 'react';
import Image from 'next/image';

import styles from './Cards.styles.module.scss';
import type { CardsNSTypes } from './Cards.types';

export const Cards: React.FC<CardsNSTypes.Props> = ({
  cards,
}) => {
  return (
    <div className={styles.items}>
      {cards?.map((card) => (
        <div key={card.id} className={styles.item}>
          <Image
            src={card.src}
            alt={card.alt}
            width={100}
            height={100}
          />

          <p className={styles.itemText}>{card.text}</p>
        </div>
      ))}
    </div>
  );
};
