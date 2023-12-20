import React from 'react';

import styles from './Label.styles.module.scss';
import { Element } from './Element';
import { useController } from './Filter.controller';
import { ActiveElement } from './ActiveElement';
import type { LabelNSTypes } from './Label.types';
import type { TabsNSTypes } from '../Tabs.types';

export const Label = <
  Label extends TabsNSTypes.ExtendLabel,
>({
  selectedLabel,
  setSelectedLabel,
  labels,
  labelWidthClassName,
}: LabelNSTypes.Props<Label>) => {
  const { offset, setOffset } = useController();

  return (
    <div className={styles.container}>
      <ActiveElement<Label>
        offset={offset}
        selectedLabel={selectedLabel}
        labelWidthClassName={labelWidthClassName}
      />

      {labels.map((label) => (
        <Element<Label>
          key={label.id}
          labelItem={label}
          setOffset={setOffset}
          setSelectedLabel={setSelectedLabel}
          labelWidthClassName={labelWidthClassName}
        />
      ))}
    </div>
  );
};
