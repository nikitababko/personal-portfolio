import React from 'react';

import type { DesktopViewNSTypes } from './DesktopView.types';
import { useController } from './DesktopView.controller';
import styles from './DesktopView.styles.module.scss';
import { Item } from '../Item';

export const DesktopView: React.FC<
  DesktopViewNSTypes.Props
> = ({ titles, content }) => {
  const { filterDataByKey } = useController();

  const frontend = filterDataByKey(
    titles,
    content,
    'frontend',
  );
  const backend = filterDataByKey(
    titles,
    content,
    'backend',
  );

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.columnTitle}>
          {frontend?.header?.value}
        </div>

        <div className={styles.columnContent}>
          {frontend.elements.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              iconName={item.iconName}
            />
          ))}
        </div>
      </div>

      <div className={styles.verticalLine} />

      <div className={styles.column}>
        <div className={styles.columnTitle}>
          {backend?.header?.value}
        </div>

        <div className={styles.columnContent}>
          {backend.elements.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              iconName={item.iconName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
