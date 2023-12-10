import React from 'react';

import { SectionTitle } from '../SectionTitle/SectionTitle.component';
import styles from './About.styles.module.scss';
import { Description } from './Description';
import type { AboutNSTypes } from './About.types';
import { Cards } from './Cards';

export const About: React.FC<AboutNSTypes.Props> = ({
  data,
}) => {
  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="About" />

        <div className={styles.content}>
          <Description description={data.description} />

          <Cards cards={data.cards} />
        </div>
      </div>
    </section>
  );
};
