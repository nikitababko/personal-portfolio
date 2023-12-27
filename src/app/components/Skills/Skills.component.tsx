'use client';

import React from 'react';

import { SectionTitle } from '../../common';
import type { SkillsNSTypes } from './Skills.types';
import { useMediaQuery } from '../../hooks';
import { DesktopView } from './Content/DesktopView';
import { MobileView } from './Content/MobileView';

export const Skills: React.FC<SkillsNSTypes.Props> = ({
  data: { titles, content },
}) => {
  const mediaMin768 = useMediaQuery('(min-width: 768px)');

  return (
    <section className="sectionContainer">
      <div className="sectionInner">
        <SectionTitle title="Skills" />

        {mediaMin768 ? (
          <DesktopView titles={titles} content={content} />
        ) : (
          <MobileView titles={titles} content={content} />
        )}
      </div>
    </section>
  );
};
