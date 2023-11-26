import React from 'react';

import { SectionTitle } from '../SectionTitle/SectionTitle.component';
import { Content } from './Content';

export const Projects: React.FC = () => {
  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Projects" />

        <Content />
      </div>
    </section>
  );
};
