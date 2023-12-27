import React from 'react';

import styles from './BurgerMenu.styles.module.scss';
import type { BurgerMenuNSTypes } from './BurgerMenu.types';

export const BurgerMenu: React.FC<
  BurgerMenuNSTypes.Props
> = ({ isOpenMobileNavigation, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.container} ${
        isOpenMobileNavigation ? styles.isOpen : ''
      }`}
    >
      <div className={styles.line} />

      <div className={styles.line} />

      <div className={styles.line} />

      <div className={styles.line} />

      <div className={styles.line} />

      <div className={styles.line} />
    </button>
  );
};
