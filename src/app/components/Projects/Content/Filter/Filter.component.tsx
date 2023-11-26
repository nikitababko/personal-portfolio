'use client';

import type { LegacyRef } from 'react';
import React from 'react';

import { filters } from './Filter.data';
import styles from './Filter.styles.module.scss';
import { Element } from './Element';
import { useController } from './Filter.controller';
import { ActiveElement } from './ActiveElement';

export const Filter: React.FC = () => {
  const {
    indent,
    setIndent,
    selectedFilter,
    setSelectedFilter,
    indentOfFirstElement,
    reference,
  } = useController();

  return (
    <div
      ref={reference as LegacyRef<HTMLDivElement>}
      style={{
        position: 'relative',
      }}
      className={styles.container}
    >
      <ActiveElement
        indent={indent}
        selectedFilter={selectedFilter}
      />

      {filters.map((filter) => (
        <Element
          key={filter.id}
          filterValue={filter.value}
          setIndent={setIndent}
          setSelectedFilter={setSelectedFilter}
          indentOfFirstElement={indentOfFirstElement}
        />
      ))}
    </div>
  );
};
