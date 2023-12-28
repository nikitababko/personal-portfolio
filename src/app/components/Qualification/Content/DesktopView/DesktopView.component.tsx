import React from 'react';

import type { QualificationDesktopViewNSTypes } from './MobileView.types';
import { Item } from '../Item';
import styles from './DesktopView.styles.module.scss';

export const DesktopView: React.FC<
  QualificationDesktopViewNSTypes.Props
> = ({ titles, content }) => {
  return (
    <div className={styles.container}>
      {titles.map((title) => (
        <div key={title.id} className={styles.column}>
          <div className={styles.columnTitle}>
            {title.value}
          </div>

          <div className={styles.columnContent}>
            {content.map((contentItem) => (
              <React.Fragment key={contentItem.id}>
                {contentItem.tags.includes(title.tag) && (
                  <Item
                    key={contentItem.id}
                    {...contentItem}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
