'use client';

import React from 'react';

import styles from './Tabs.styles.module.scss';
import type { TabsNSTypes } from './Tabs.types';
import { useController } from './Tabs.controller';
import { Label } from './Label';
import { Content } from './Content';

export const Tabs = <
  LabelItem extends TabsNSTypes.ExtendLabel,
  ContentItem extends TabsNSTypes.ExtendContentItem,
>({
  data,
  showMore,
  renderContent,
  labelWidthClassName,
  contentContainerStylesClassName,
}: TabsNSTypes.Props<LabelItem, ContentItem>) => {
  const { selectedLabel, setSelectedLabel } =
    useController<LabelItem>(data.labels);

  return (
    <div className={styles.container}>
      <Label<LabelItem>
        setSelectedLabel={setSelectedLabel}
        selectedLabel={selectedLabel}
        labels={data.labels}
        labelWidthClassName={labelWidthClassName}
      />

      <Content<LabelItem, ContentItem>
        selectedLabel={selectedLabel}
        data={data.content}
        showMore={showMore}
        renderContent={renderContent}
        contentContainerStylesClassName={
          contentContainerStylesClassName
        }
      />
    </div>
  );
};
