import React from 'react';

import { SectionTitle } from '../SectionTitle/SectionTitle.component';
import styles from './About.styles.module.scss';
import { Text } from './Text';
import { Elements } from './Elements';

export const About: React.FC = () => {
  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="About" />

        <div className={styles.content}>
          <Text />

          <Elements />
        </div>
      </div>
    </section>
  );
};
