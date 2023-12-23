'use client';

import React from 'react';

import { SectionTitle, Tabs } from '../../common';
import styles from './Qualification.styles.module.scss';
import type { QualificationNSTypes } from './Qualification.types';
import type { ServerQualificationNSTypes } from '../../api/qualification/types';
import { Content } from './Content';

export const Qualification: React.FC<
  QualificationNSTypes.Props
> = ({ data }) => {
  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Qualification" />

        <Tabs<
          ServerQualificationNSTypes.Title,
          ServerQualificationNSTypes.ContentItem
        >
          data={{
            labels: data.titles,
            content: data.content,
          }}
          labelWidthClassName={styles.labelWidthClassName}
          contentContainerStylesClassName={
            styles.contentContainerStylesClassName
          }
          renderContent={(content) => {
            return (
              <Content key={content.id} {...content} />
            );
          }}
        />
      </div>
    </section>
  );
};
