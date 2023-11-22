import React from 'react';

import styles from './Greetings.styles.module.scss';
import { Icon } from '../../Icon';

export const Greetings: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.badgeContainer}>
        <h1 className={styles.hello}>
          <span className={styles.emoji}>👋</span>

          <span> Hello, I am</span>

          <span className={styles.name}> Nikita</span>
        </h1>
      </div>

      <div className={styles.badgeContainer}>
        <h2 className={styles.jobTitle}>
          I am a Software engineer
        </h2>
      </div>

      <div
        className={`${styles.badgeContainer} ${styles.downloadCVContainer}`}
      >
        <h3 className={styles.downloadCV}>Download CV</h3>

        <Icon name="download" size={24} />
      </div>
    </div>
  );
};
