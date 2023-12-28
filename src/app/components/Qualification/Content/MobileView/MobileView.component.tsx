import React from 'react';

import type { ServerQualificationNSTypes } from '../../../../api/qualification/types';
import styles from './MobileView.styles.module.scss';
import { Item } from '../Item';
import { Tabs } from '../../../../common';
import type { QualificationMobileViewNSTypes } from './MobileView.types';

export const MobileView: React.FC<
  QualificationMobileViewNSTypes.Props
> = ({ titles, content }) => {
  return (
    <Tabs<
      ServerQualificationNSTypes.Title,
      ServerQualificationNSTypes.ContentItem
    >
      data={{
        labels: titles,
        content,
      }}
      labelWidthClassName={styles.labelWidthClassName}
      contentContainerStylesClassName={
        styles.contentContainerStylesClassName
      }
      renderContent={(data) => {
        return <Item key={data.id} {...data} />;
      }}
    />
  );
};
