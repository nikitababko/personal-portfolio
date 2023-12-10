'use client';

import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import type { GalleryNSTypes } from './Gallery.types';
import { useController } from './Gallery.controller';
import styles from './Gallery.styles.module.scss';
import { Project } from './Project';

export const Gallery: React.FC<GalleryNSTypes.Props> = ({
  selectedFilter,
  data,
}) => {
  const { projects } = useController(selectedFilter, data);

  return (
    <TransitionGroup
      component="div"
      className={styles.container}
    >
      {projects.map((project) => (
        <CSSTransition
          key={project.id}
          classNames={{
            enterActive: styles.transitionEnterActive,
            enter: styles.transitionEnter,
            exitActive: styles.transitionExitActive,
            exitDone: styles.transitionExit,
          }}
          timeout={{
            enter: 300,
            exit: 300,
          }}
          unmountOnExit
          mountOnEnter
        >
          <Project key={project.id} project={project} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
