import React from 'react';
import Image from 'next/image';

import styles from './Home.styles.module.scss';
import { Greetings } from './Greetings';
import { ScrollDownButton } from './ScrollDownButton';

export const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={`sectionInner ${styles.inner}`}>
        <Image
          src="/assets/home/avatar.png"
          alt="Avatar"
          width={300}
          height={320}
          className={styles.avatar}
        />

        <Greetings />

        <ScrollDownButton />
      </div>
    </section>
  );
};
