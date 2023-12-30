import React from 'react';

import type { SkillsDesktopViewNSTypes } from './DesktopView.types';
import styles from './DesktopView.styles.module.scss';
import { Item } from '../Item';

export const DesktopView: React.FC<
  SkillsDesktopViewNSTypes.Props
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
                    title={contentItem.title}
                    iconName={contentItem.iconName}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}

      {/* <div className={styles.verticalLine} /> */}
    </div>
  );
};
