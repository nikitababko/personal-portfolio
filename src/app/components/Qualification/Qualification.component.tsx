'use client';

import React from 'react';

import { SectionTitle } from '../../common';
import type { QualificationNSTypes } from './Qualification.types';
import { DesktopView, MobileView } from './Content';
import { useMediaQuery } from '../../hooks';

export const Qualification: React.FC<
  QualificationNSTypes.Props
> = ({ data }) => {
  const mediaMin768 = useMediaQuery('(min-width: 768px)');

  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Qualification" />

        {mediaMin768 ? (
          <DesktopView
            titles={data.titles}
            content={data.content}
          />
        ) : (
          <MobileView
            titles={data.titles}
            content={data.content}
          />
        )}
      </div>
    </section>
  );
};
