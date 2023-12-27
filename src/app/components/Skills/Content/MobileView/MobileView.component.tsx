import React from 'react';

import styles from './MobileView.styles.module.scss';
import type { MobileViewNSTypes } from './MobileView.types';
import { Tabs } from '../../../../common';
import type { ServerSkillsNSTypes } from '../../../../api/skills/types';
import { Item } from '../Item';

export const MobileView: React.FC<
  MobileViewNSTypes.Props
> = ({ titles, content }) => {
  return (
    <Tabs<
      ServerSkillsNSTypes.Title,
      ServerSkillsNSTypes.ContentItem
    >
      data={{
        labels: titles,
        content,
      }}
      contentContainerStylesClassName={
        styles.contentContainerStylesClassName
      }
      contentContentStylesClassName={
        styles.contentContainerStylesClassName
      }
      renderContent={(data) => {
        return (
          <Item
            key={data.id}
            title={data.title}
            iconName={data.iconName}
          />
        );
      }}
    />
  );
};
