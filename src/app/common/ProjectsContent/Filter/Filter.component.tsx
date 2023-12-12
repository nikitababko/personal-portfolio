import React from 'react';

import styles from './Filter.styles.module.scss';
import { Element } from './Element';
import { useController } from './Filter.controller';
import { ActiveElement } from './ActiveElement';
import type { ProjectsFilterNSTypes } from './Filter.types';

export const Filter: React.FC<
  ProjectsFilterNSTypes.Props
> = ({ selectedFilter, setSelectedFilter, filters }) => {
  const { offset, setOffset } = useController();

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
