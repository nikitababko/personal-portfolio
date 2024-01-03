import Link from 'next/link';
import React from 'react';

import { Icon } from './common';
import styles from './styles/notFoundPage.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Icon name="sadEmoji" size={100} />

      <h2 className={styles.title}>404 Not Found</h2>

      <p className={styles.text}>
        Page not found. Please check the entered address for
        accuracy.
      </p>

      <Link href="/" className={styles.buttonGoHome}>
        Go Home
      </Link>
    </div>
  );
}
