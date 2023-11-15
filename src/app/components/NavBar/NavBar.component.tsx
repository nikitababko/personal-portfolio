'use client';

import React from 'react';

import styles from './NavBar.styles.module.scss';
import { items } from './NavBar.data';
import { useController } from './NavBar.controller';
import { BurgerMenu } from './BurgerMenu';

export const NavBar: React.FC = () => {
  const { isOpenMobileNavigation, switchNavigation } =
    useController();

  return (
    <div
      className={`${styles.container} ${
        isOpenMobileNavigation
          ? styles.containerIsMobile
          : ''
      }`}
    >
      <nav>
        <ul
          className={`${styles.itemsWrapper} ${
            isOpenMobileNavigation
              ? styles.itemsWrapperIsMobile
              : ''
          }`}
        >
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <BurgerMenu
        isOpenMobileNavigation={isOpenMobileNavigation}
        handleClick={switchNavigation}
      />
    </div>
  );
};
