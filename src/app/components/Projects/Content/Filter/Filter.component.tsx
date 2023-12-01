'use client';

import React from 'react';

import { filters } from './Filter.data';
import styles from './Filter.styles.module.scss';
import { Element } from './Element';
import { useController } from './Filter.controller';
import { ActiveElement } from './ActiveElement';

export const Filter: React.FC = () => {
  const {
    offset,
    setOffset,
    selectedFilter,
    setSelectedFilter,
  } = useController();

  return (
    <div className={styles.container}>
      <ActiveElement
        offset={offset}
        selectedFilter={selectedFilter}
      />

      {filters.map((filter) => (
        <Element
          key={filter.id}
          filterItem={filter}
          setOffset={setOffset}
          setSelectedFilter={setSelectedFilter}
        />
      ))}
    </div>
  );
};
