import React from 'react';

import styles from './NavBar.styles.module.scss';
import { items } from './NavBar.data';

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.itemsWrapper}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
