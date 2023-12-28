import React from 'react';
import dayjs from 'dayjs';

import type { ServerQualificationNSTypes } from '../../../../api/qualification/types';
import styles from './Item.styles.module.scss';

export const Item: React.FC<ServerQualificationNSTypes.ContentItem> =
  React.memo(({ title, date, place }) => {
    const monthCountInYear = 12;

    const isPresent =
      dayjs(date.to).format('YYYY-MM-DD') ===
      dayjs().format('YYYY-MM-DD');

    return (
      <div className={styles.container}>
        <div className={styles.line} />

        <div className={styles.round} />

        <div className={styles.details}>
          <span className={styles.title}>{title}</span>

          <span className={styles.place}>{place}</span>

          <p>
            <span className={styles.other}>
              {dayjs(date.from).format('MMM YYYY')}
            </span>

            <span className={styles.other}> - </span>

            <span className={styles.other}>
              {isPresent
                ? 'Present'
                : dayjs(date.to).format('MMM YYYY')}
            </span>

            <span className={styles.other}>
              &nbsp;&#8226;&nbsp;
            </span>

            {dayjs(date.to).diff(dayjs(date.from), 'year') >
              0 && (
              <span className={styles.other}>
                {dayjs(date.to).diff(
                  dayjs(date.from),
                  'year',
                )}
                y&nbsp;
              </span>
            )}

            <span className={styles.other}>
              {dayjs(date.to).diff(
                dayjs(date.from),
                'months',
              ) % monthCountInYear}
              m
            </span>
          </p>
        </div>
      </div>
    );
  });
